import React, { useState } from 'react';
import { View, Text, Button, Image, FlatList, TextInput, StyleSheet } from 'react-native';


const InventoryScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    
    const vehicles = [
        { id: 1, make: 'Ford', model: 'Mustang', year: 2020, color: 'Red', kilometers: 5000, price: 50000, imageUrl: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg' },
        { id: 2, make: 'Honda', model: 'Civic', year: 2024, color: 'Blue', kilometers: 2000, price: 25000, imageUrl: 'https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg' },
        { id: 3, make: 'Ford', model: 'F-150', year: 2021, color: 'Black', kilometers: 10000, price: 60000, imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/ford-f-150-raptor-2024-1-6502f263a6cce.jpg'}
    ];

    const handleViewDetails = (vehicle) => {
        navigation.navigate('VehicleDetails', { vehicle });
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    const renderItem = ({ item }) => (
        <View style={styles.vehicleItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.vehicleImage} />
            <Text>{item.make} {item.model} - {item.year}</Text>
            <Text>Price: ${item.price}</Text>
            <Button title="Detalles" onPress={() => handleViewDetails(item)} />
        </View>
    );

    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.make.toLowerCase().includes(searchText.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchText.toLowerCase()) ||
        vehicle.year.toString().includes(searchText)
    );

    return (
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
            <Button title="Regresar" onPress={handleGoBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    vehicleItem: {
        marginBottom: 20,
        alignItems: 'center'
    },
    vehicleImage: {
        width: 200,
        height: 150,
        marginBottom: 10
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 50
    }
});

export default InventoryScreen;
