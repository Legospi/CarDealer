import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSearch = () => {

    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    const renderSearchResultItem = ({ item }) => (
        <View style={styles.searchResultItem}>
            <Text>{item.brand} {item.model}</Text>

        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search by brand or model"
                value={searchText}
                onChangeText={setSearchText}
            />
            <Button title="Search" onPress={handleSearch} />
            <FlatList
                data={searchResults}
                renderItem={renderSearchResultItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <Button title="Regresar" onPress={handleGoBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    searchInput: {
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    searchResultItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    }
});

export default SearchScreen;
