import MapView, {Marker} from 'react-native-maps';

import { StyleSheet, View, Text, Platform } from 'react-native';

export default function CustomMap(props: any) {

  let coordinate = props.coords ? {
    latitude: props.coords.latitude,
    longitude: props.coords.longitude,
  } : {
    latitude: -23.55052, // Default latitude (São Paulo)
    longitude: -46.633308, // Default longitude (São Paulo)
  };

  const handleMapPress = (event: any) => {
    const newCoordinate = event.nativeEvent.coordinate;
    if (props.onLocationChange) {
      props.onLocationChange(newCoordinate);
    }
    console.log('Localização selecionada:', newCoordinate);
  }

  
  if (Platform.OS === 'web') {

    return (
      <View style={styles.containerMap}>
        <Text>Mapa não disponível para esta plataforma.</Text>
      </View>
    );

  }

  return (
    <View style={styles.containerMap}>
      <MapView
        style={styles.map}
        mapType="standard"
        region={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          draggable
          coordinate={ coordinate }

          onDragEnd={(event) => {
            handleMapPress(event);
          }}

          title="Localização do Socorro"
          description="Arraste o marcador para ajustar a localização."
        />
      </MapView>
    </View>
  );

}
 
const styles = StyleSheet.create({
  containerMap: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
