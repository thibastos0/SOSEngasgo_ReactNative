import { View, Platform, Alert } from 'react-native';

import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import { globalStyles } from '../theme/globalStyles';
import CustomButtonConfirm from '../components/CustomButtonConfirm';
import CustomMap from '../components/CustomMap';
import * as deviceService from '../services/device';
import { sendEmergencyWhatsApp } from '../services/api';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ConfirmLocationScreen(props: any) {

    const [deviceId, setDeviceId] = useState<string | "">("");
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function getDeviceId() {
            const id = await deviceService.getOrCreateDeviceId();
            setDeviceId(id);
        }

        getDeviceId();
    }, []);

    const handleCancel = () => {
        const confirmMessage = 'Deseja realmente cancelar o acionamento de socorro?';

        if (Platform.OS === 'web') {
            if (window.confirm(confirmMessage)) {
                props.navigation.goBack();
            }
        } else {
            Alert.alert(
                'Cancelar Acionamento',
                confirmMessage,
                [
                    { text: 'Não', style: 'cancel' },
                    {
                        text: 'Sim, Cancelar',
                        style: 'destructive',
                        onPress: () => props.navigation.goBack(),
                    },
                ]
            );
        }
    };

    useEffect(() => {
        async function getCurrentLocation() {
      
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão de localização negada. Por favor, habilite a permissão para continuar.');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        }

        getCurrentLocation();
    }, []);

    const handleLocationChange = (newCoords: { latitude: number; longitude: number }) => {
        if (location) {
            setLocation({
                ...location,
                coords: {
                    ...location.coords,
                    latitude: newCoords.latitude,
                    longitude: newCoords.longitude,
                },
            });
        }
    };

    const handleConfirmEmergency = async () => {
        if (!location) {
            Alert.alert('Aguarde', 'Obtendo a sua localização atual...');
            return;
        }

        setLoading(true);

        try {
            const emergencyObj = deviceService.generateEmergencyProtocol(deviceId);

            const payload = {
                protocol_id: emergencyObj.protocol,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                device_id: deviceId,
            };

            // Dispara a requisição para a Vercel -> n8n
            await sendEmergencyWhatsApp(payload);

            // Navega apenas após a confirmação do envio
            props.navigation.navigate('Emergency', {
                emergency: emergencyObj,
                location: location,
            });
        } catch (error) {
            Alert.alert(
                'Falha no Acionamento',
                'Não foi possível conectar com o servidor de emergência. Tente novamente.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Header
                title="Confirmar Localização"
                showBack={true}
            />

            <View style={globalStyles.containerSpaceBetween}>

                <CustomMap 
                    coords={location ? location.coords : errorMsg}
                    onLocationChange={handleLocationChange}
                />

                <View style={globalStyles.buttonContainer}>
                    <CustomButtonConfirm
                        title="Sim, Chamar Socorro"
                        variant="primary"
                        loading={loading}
                        onPress={handleConfirmEmergency}
                    />
                    <CustomButtonConfirm
                        title="Não, Cancelar Acionamento"
                        variant="outline"
                        disabled={loading}
                        onPress={handleCancel}
                    />
                </View>
            </View>

            <Footer />
        </View>
    );
}
