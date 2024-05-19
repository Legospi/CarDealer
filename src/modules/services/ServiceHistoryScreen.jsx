import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ImageBackground } from 'react-native';

const ServiceHistoryScreen = ({ navigation }) => {
    const [serviceHistory, setServiceHistory] = useState([]);

    const fetchServiceHistory = () => {
        const data = [
            { id: 1, date: '2022-01-15', type: 'Taller', cost: 200000 },
            { id: 2, date: '2022-02-20', type: 'Pintura', cost: 300000 },
            { id: 3, date: '2022-03-25', type: 'Reparación', cost: 400000 },
        ];
        setServiceHistory(data);
    };

    useEffect(() => {
        fetchServiceHistory();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>Fecha: {item.date}</Text>
            <Text style={styles.itemText}>Tipo de Servicio: {item.type}</Text>
            <Text style={styles.itemText}>Precio: ${item.cost}</Text>
        </View>
    );

    return (
        <ImageBackground
            source={{ uri: 'https://files.oaiusercontent.com/file-eCKFzBDibmPnwTh0dU7eMUId?se=2024-05-19T23%3A29%3A29Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D923b7586-bd64-46c4-9be0-3d7eb4827742.webp&sig=sBTMeKfxq0A2CAmVdLrtpYWx4AWzLPNXdiBT4E5gosQ%3D' }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Historial de Servicio</Text>
                <FlatList
                    data={serviceHistory}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Regresar" onPress={() => navigation.goBack()} />
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
    item: {
        marginBottom: 10,
        backgroundColor: '#e0e0e0',
        padding: 15,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
});

export default ServiceHistoryScreen;
