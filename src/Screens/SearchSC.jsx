import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,TextInput } from 'react-native';

export default function SearchScreen({navigation}){
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = () => {
        setSearchQuery(query);
    }
    return(
        <SafeAreaView style={{flex:1,marginHorizontal:20}}>
            <TextInput 
            placeholder='Búsqueda' 
            clearButtonMode='always' 
            style={styles.searchBox} 
            autoCapitalize='none' 
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
            ></TextInput>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBox:{
        paddingHorizontal:20, 
        paddingVertical:10, 
        borderColor:"#C8C6D7", 
        borderWidth: 1, 
        borderRadius: 8,
    }
})