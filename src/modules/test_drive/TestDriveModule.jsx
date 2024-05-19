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
            source={{ uri: 'https://files.oaiusercontent.com/file-GpEpHwqmboSYGqlnM7qXEqx9?se=2024-05-19T23%3A26%3A18Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D911dcc79-ad0b-4325-9e0d-caad740e1167.webp&sig=KjrwIG549256m7tDfdXlW2heZS9/FrkAQInE2kWBLzY%3D' }}
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
