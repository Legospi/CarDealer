import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const ContactScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [requestSent, setRequestSent] = useState(false); 

    const handleSubmit = () => {
        const serviceRequest = {
            name,
            email,
            phone,
            message
        };
        console.log('Contactenos:', serviceRequest);

        setTimeout(() => {
            setRequestSent(true); 
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
                <Text style={styles.title}>Contáctenos</Text>
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
                    style={[styles.input, styles.messageInput]}
                    placeholder="Mensaje"
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />
                <View style={styles.buttonContainer}>
                    <Button title="Contactar" onPress={handleSubmit} />
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

export default ContactScreen;
