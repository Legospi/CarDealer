import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
        <View style={styles.container}>
            <Text>Agendar Prueba de Manejo</Text>
            <TextInput
                style={styles.input}
                placeholder="Identificacion"
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
            <Button title="Agendar Prueba de Manejo" onPress={handleScheduleTestDrive} />
            {isDataSaved && <Text style={styles.successMessage}>Datos guardados exitosamente</Text>}
            <Button title="Regresar" onPress={handleGoBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5
    },
    successMessage: {
        color: 'green',
        marginTop: 10
    }
});

export default TestDriveModule;
