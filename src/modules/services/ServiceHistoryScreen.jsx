import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

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
            <Text>Fecha: {item.date}</Text>
            <Text>Tipo de Servicio: {item.type}</Text>
            <Text>Precio: ${item.cost}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historial de Servicio</Text>
            <FlatList
                data={serviceHistory}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <Button title="Regresar" onPress={() => navigation.goBack()} />
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
    item: {
        marginBottom: 10,
        backgroundColor: '#f9c2ff',
        padding: 20,
        borderRadius: 5
    }
});

export default ServiceHistoryScreen;
