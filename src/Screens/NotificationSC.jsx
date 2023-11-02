import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function NotificationScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', margin: 30 }}>
            <Text> Aqui irán notificaciones de Usuario e Profesional</Text>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#C8C6D7",
        borderWidth: 1,
        borderRadius: 8,
    }
})