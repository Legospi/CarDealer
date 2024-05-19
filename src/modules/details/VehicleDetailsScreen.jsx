import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const VehicleDetails = ({ route, navigation }) => {
    const { vehicle } = route.params;

    return (
        <ImageBackground 
            source={{ uri: 'https://files.oaiusercontent.com/file-5ERQNYzU3KEtuqFHNYTllEiH?se=2024-05-19T23%3A24%3A28Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D45348151-043a-417c-9775-6095184322f8.webp&sig=U/KyyUk06xaIjl%2BPJjsSArePlPfS%2Bt92lAmtIlzKir0%3D' }} 
            style={styles.backgroundImage}
        >
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
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
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

export default VehicleDetails;
