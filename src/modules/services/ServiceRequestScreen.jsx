import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

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
        <ImageBackground
            source={{ uri: 'https://files.oaiusercontent.com/file-ZGuMdYvOHViGw9SasNmBJBfh?se=2024-05-19T23%3A27%3A36Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6ab0e6c3-3830-45ed-8744-705ea360c4ec.webp&sig=O8fRC4wduHGm6cMxPYRz4XyJW9PT2ruKMvqFx2raPTI%3D' }}
            style={styles.background}
        >
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
                    keyboardType="email-address"
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
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />
                <View style={styles.buttonContainer}>
                    <Button title="Enviar Solicitud" onPress={handleSubmit} />
                </View>
                {requestSent && (
                    <Text style={styles.successMessage}>Solicitud enviada exitosamente.</Text>
                )}
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
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    messageInput: {
        height: 100,
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
    },
    successMessage: {
        color: 'green',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
});

export default ServiceRequestScreen;
