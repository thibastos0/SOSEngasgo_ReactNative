import { View, Platform, Alert } from 'react-native';

import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import { globalStyles } from '../theme/globalStyles';
import CustomButton from '../components/CustomButton';
import CustomMap from '../components/CustomMap';
import * as deviceService from '../services/device';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ConfirmLocationScreen(props: any) {

    const [deviceId, setDeviceId] = useState<string | "">("");

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


    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
                    <CustomButton
                        title="Sim, Chamar Socorro"
                        variant="primary"
                        navigateTo={props.navigation.navigate}
                        targetScreen="Emergency"
                        data={{ 
                            emergencyProtocol: deviceService.generateEmergencyProtocol(deviceId),
                            location: location 
                        }}
                    />
                    <CustomButton
                        title="Não, Cancelar Acionamento"
                        variant="outline"
                        navigateTo={handleCancel}
                    />
                </View>
            </View>

            <Footer />
        </View>
    );
}
