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
            source={{ uri: 'https://previews.123rf.com/images/pekosman/pekosman2307/pekosman230716769/208934877-vector-gráfico-de-carreras-de-autos-deportivos-fondo-abstracto-moderno-con-coche-deportivo.jpg' }}
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
