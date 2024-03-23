import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ServiceRequestScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [message, setMessage] = useState('');
    const [requestSent, setRequestSent] = useState(false); 

    const handleSubmit = () => {
        const serviceRequest = {
            name,
            email,
            phone,
            serviceType,
            message
        };
        console.log('Solicitud De Servicio:', serviceRequest);


        setTimeout(() => {
            setRequestSent(true); 
        }, 1000);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Solicitud De Servicio</Text>
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
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo de Servicio (Taller, Pintura, Otros)"
                value={serviceType}
                onChangeText={setServiceType}
            />
            <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Mensaje"
                multiline
                value={message}
                onChangeText={setMessage}
            />
            <Button title="Enviar Solicitud" onPress={handleSubmit} />
            <Button title="Regresar" onPress={handleGoBack} />
            {requestSent && (
                <Text style={styles.successMessage}>Solicitud enviada exitosamente.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    messageInput: {
        height: 100
    },
    successMessage: {
        color: 'green',
        textAlign: 'center',
        marginTop: 10
    }
});

export default ServiceRequestScreen;
