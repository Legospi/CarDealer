import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const InformationRequestModule = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isDataSaved, setIsDataSaved] = useState(false);

    const handleSendRequest = () => {
        setTimeout(() => {
            setIsDataSaved(true);
        }, 1000);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={{ uri: 'https://files.oaiusercontent.com/file-jZ1C0OkshtlytSL6QZyLHNPe?se=2024-05-19T23%3A30%3A53Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2bcd6f1c-b4f6-46ce-a812-41040e7795e7.webp&sig=1i8pvJKA7J4F/tALPbnSBhcevg8HC8QGrx/RCZ0S2/g%3D' }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Solicitud De Información</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Correo Electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mensaje"
                    value={message}
                    onChangeText={setMessage}
                    multiline
                    numberOfLines={4}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Enviar Solicitud" onPress={handleSendRequest} />
                </View>
                {isDataSaved && <Text style={styles.successMessage}>Solicitud enviada exitosamente</Text>}
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

export default InformationRequestModule;

