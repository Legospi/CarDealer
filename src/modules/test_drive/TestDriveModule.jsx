import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const TestDriveModule = ({ navigation }) => {
    const [id, setId] = useState('');
    const [names, setNames] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isDataSaved, setIsDataSaved] = useState(false);

    const handleScheduleTestDrive = () => {
        setTimeout(() => {
            setIsDataSaved(true);
        }, 1000);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={{ uri: 'https://previews.123rf.com/images/pekosman/pekosman2307/pekosman230716769/208934877-vector-gráfico-de-carreras-de-autos-deportivos-fondo-abstracto-moderno-con-coche-deportivo.jpg' }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Agendar Prueba de Manejo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Identificación"
                    value={id}
                    onChangeText={setId}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nombres"
                    value={names}
                    onChangeText={setNames}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Celular"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                    <Button title="Agendar Prueba de Manejo" onPress={handleScheduleTestDrive} />
                </View>
                {isDataSaved && <Text style={styles.successMessage}>Datos guardados exitosamente</Text>}
                <View style={styles.buttonContainer}>
                    <Button title="Regresar" onPress={handleGoBack} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        width: '80%',
        marginTop: 10,
    },
    successMessage: {
        color: 'green',
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default TestDriveModule;
