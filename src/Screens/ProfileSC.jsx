import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text onPress={()=> navigation.navigate('Home')} style={{fontSize: 26, fontWeight: 'bold'}}>
                Pantalla de opciones
            </Text>
        </View>
    )
}