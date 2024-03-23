import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


const VehicleDetailsScreen = ({ route, navigation }) => {
    const { vehicle } = route.params;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleViewDetails = (vehicle) => {
        navigation.navigate('VehicleDetails', { details: vehicle });
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: vehicle.imageUrl }} style={styles.vehicleImage} />
            <Text style={styles.title}>{vehicle.make} {vehicle.model}</Text>
            <Text>Year: {vehicle.year}</Text>
            <Text>Color: {vehicle.color}</Text>
            <Text>Kilometers: {vehicle.kilometers}</Text>
            <Text>Price: ${vehicle.price}</Text>
            <Button title="Regresar" onPress={handleGoBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    vehicleImage: {
        width: 200,
        height: 150,
        marginBottom: 10
    }
});

export default VehicleDetailsScreen;


