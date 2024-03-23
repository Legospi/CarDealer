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
            source={{uri: 'https://previews.123rf.com/images/pekosman/pekosman2307/pekosman230716769/208934877-vector-gráfico-de-carreras-de-autos-deportivos-fondo-abstracto-moderno-con-coche-deportivo.jpg'}}
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
