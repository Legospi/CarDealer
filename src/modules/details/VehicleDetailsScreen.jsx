import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const VehicleDetails = ({ route, navigation }) => {
    const { vehicle } = route.params;


    //Aqui convierto a millares con el toLocaleString
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: vehicle.imageUrl }} style={styles.image} />
            <Text style={styles.makeModel}>{vehicle.make} {vehicle.model}</Text>
            <Text style={styles.details}>Año: {vehicle.year}</Text>
            <Text style={styles.details}>Color: {vehicle.color}</Text>
            <Text style={styles.details}>Kilometros: {vehicle.kilometers.toLocaleString('es-ES')}</Text> 
            <Text style={styles.details}>Precio: ${vehicle.price.toLocaleString('es-ES')}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Regresar" onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    makeModel: {
        marginTop: 16,
        fontSize: 24,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 8,
        fontSize: 18,
    },
    buttonContainer: {
        marginTop: 16,
        width: '100%',
    },
});

export default VehicleDetails;
