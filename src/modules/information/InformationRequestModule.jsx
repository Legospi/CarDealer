import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


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
        <View style={styles.container}>
            <Text>Solicitud De Información</Text>
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
            <Button title="Enviar Solicitud" onPress={handleSendRequest} />
            {isDataSaved && <Text style={styles.successMessage}>Solicitud enviada exitosamente</Text>}
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

export default InformationRequestModule;
