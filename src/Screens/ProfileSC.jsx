import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HStack, Banner, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {  Card,Button } from 'react-native-paper';



export default function ProfileScreen({ navigation }) {
  return (
    <>
      <Banner
        illustration={(props) => (
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://picsum.photos/702",
            }}
          />
        )}
      
        text={
          <Text style={{ fontSize: 24, alignItems: 'center',justifyContent: "center" }}>Nombre del usuario</Text>
        }
      ></Banner>

      {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
          Tipo de usuario
        </Text>
      </View> */}

      <Card>
    <Card.Title title="Nombre del servicio" />
    <Card.Content>
      <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat dignissimos ab nulla aut error officia ratione dicta soluta quam eum deserunt animi facilis, quibusdam ea natus vitae iusto. Corporis?</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/702' }} />
    <Card.Actions>
    
      <Button>Ver</Button>
    </Card.Actions>
  </Card>
    </>
  );
}
