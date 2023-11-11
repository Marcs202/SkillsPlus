import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../components/card";

export default function NotificationScreen({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card
            title="Contrato"
            subtitle="Aceptado"
            difficulty="Baja - Media"
            description="Aprende GitHub en 3 semanas"
            buttonLabel="Finalizar"
            onPress={() => console.log("Empezar")}
            gradientColors={["#21c8f6", "#637bff"]}
            icon={<Text>GitHub Icon</Text>} // Reemplaza esto con el icono adecuado
          />
          <Card
            title="Contrato"
            subtitle="Confirmación"
            difficulty="Media - Alta"
            description="Flutter en 1 año"
            buttonLabel="Empezar"
            onPress={() => console.log("Empezar")}
            gradientColors={["#6edcc4", "#1aab8b"]}
            icon={<Text>Android Icon</Text>} // Reemplaza esto con el icono adecuado
          />
          <Card
            title="Contrato"
            subtitle="Rechazado"
            difficulty="Media - Alta"
            description="Flutter en 1 año"
            buttonLabel="Empezar"
            onPress={() => console.log("Empezar")}
            gradientColors={["#F54949", "#170834"]}
            icon={<Text>Android Icon</Text>} // Reemplaza esto con el icono adecuado
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
