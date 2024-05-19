import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const StartScreen = ({ navigation }) => {
    const handleNavigateToInventory = () => {
        navigation.navigate('Inventory');
    };

    const handleNavigateToInformationRequest = () => {
        navigation.navigate('InformationRequest');
    };

    const handleNavigateToServiceRequest = () => {
        navigation.navigate('ServiceRequest');
    };

    const handleNavigateToTestDrive = () => {
        navigation.navigate('TestDrive');
    };

    const handleNavigateToContact = () => {
        navigation.navigate('Contact');
    };

    const handleNavigateToServiceHistory = () => {
        navigation.navigate('ServiceHistory');
    };

    return (
        <ImageBackground
            source={{uri: 'https://files.oaiusercontent.com/file-3faRHHrYoUPyTqGplwVu70Ik?se=2024-05-19T23%3A16%3A25Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8138a624-4c03-4a98-a716-3203fa5fced1.webp&sig=QYtrUlnYSkipzGDdgR0LvO9tpps8tORlJZoTG25xHHU%3D'}}
            style={styles.container}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Bienvenido a CarDealer!</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Catálogo De Vehículos" onPress={handleNavigateToInventory} style={styles.button} />
                    <View style={styles.separator} />
                    <Button title="Solicitud De Información" onPress={handleNavigateToInformationRequest} style={styles.button} />
                    <View style={styles.separator} />
                    <Button title="Prueba De Manejo" onPress={handleNavigateToTestDrive} style={styles.button} /> 
                    <View style={styles.separator} />
                    <Button title="Solicitud De Servicio" onPress={handleNavigateToServiceRequest} style={styles.button} /> 
                    <View style={styles.separator} />
                    <Button title="Historial De Servicio" onPress={handleNavigateToServiceHistory} style={styles.button} /> 
                    <View style={styles.separator} />
                    <Button title="Contáctenos" onPress={handleNavigateToContact} style={styles.button} /> 
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%',
    },
    button: {
        marginBottom: 10,
    },
    separator: {
        marginVertical: 10, 
    },
});




export default StartScreen;
