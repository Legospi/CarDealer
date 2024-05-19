import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, ImageBackground, StyleSheet } from 'react-native';
import firebaseConfig from '../../../firebase/config';
import firebase from '../../../firebase';

const InventoryScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const vehiclesCollection = await firebase.db.collection('vehicle').get();
                const vehiclesData = vehiclesCollection.docs.map(doc => ({
                    id: doc.id,
                    make: doc.data().marca,
                    model: doc.data().modelo,
                    year: doc.data().año,
                    color: doc.data().color,
                    kilometers: doc.data().km,
                    price: parseInt(doc.data().precio), 
                    imageUrl: doc.data().imagen || 'default_image_url', 
                }));
                setVehicles(vehiclesData);
            } catch (error) {
                console.error("Error fetching vehicles: ", error);
            }
        };

        fetchVehicles();
    }, []);

    const handleViewDetails = (vehicle) => {
        navigation.navigate('VehicleDetails', { vehicle });
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    const renderItem = ({ item }) => (
        <View style={styles.vehicleItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.vehicleImage} />
            <Text style={styles.vehicleText}>{item.make} {item.model} - {item.year}</Text>
            <Text style={styles.vehicleText}>Precio: ${item.price.toLocaleString('es-ES')}</Text> 
            <View style={styles.buttonContainer}>
                <Button title="Detalles" onPress={() => handleViewDetails(item)} />
            </View>
        </View>
    );

    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.make.toLowerCase().includes(searchText.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchText.toLowerCase()) ||
        vehicle.year.toString().includes(searchText)
    );

    return (
        <ImageBackground
            source={{ uri: 'https://previews.123rf.com/images/pekosman/pekosman2307/pekosman230716769/208934877-vector-gr%C3%A1fico-de-carreras-de-autos-deportivos-fondo-abstracto-moderno-con-coche-deportivo.jpg' }}
            style={styles.background}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <FlatList
                    data={filteredVehicles}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
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
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    vehicleItem: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    vehicleImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    vehicleText: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 8,
    },
});

export default InventoryScreen;
