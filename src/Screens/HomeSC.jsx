import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text onPress={()=> alert('Esta es la pantalla principal')} style={{fontSize: 26, fontWeight: 'bold'}}>
                Pantalla principal
            </Text>
        </View>
    )
}