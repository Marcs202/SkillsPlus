import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { HStack, Banner, Avatar } from "@react-native-material/core";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Card, Button } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import CheckBox from 'react-native-checkbox';
import { MainContainer } from "../MainContainer";

export default function ProfileScreen({ navigation }) {

export default function ProfileScreen({ updateDetailScreenVisibility}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'Opción 1') {
      updateDetailScreenVisibility(true); 
     
    } else {
      updateDetailScreenVisibility(false);
    }
    toggleModal();
  };
  
  const onSignInPressed = () =>{
    MainContainer.navigate('SignIn');
 }

  return (
    <>
   
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 50,
          width: '100%',
          backgroundColor: "white",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
        <AntDesign
          style={{ paddingRight: 20, marginLeft: 300 }}
          name="swap"
          type="font-awesome"
          color="#6F2C8C"
          size={30}
          onPress={() => {
            toggleModal()
          }}
        />

        <AntDesign
          style={{ paddingRight: 15 }}
          name="team"
          type="font-awesome"
          color="#6F2C8C"
          size={30}
          marginRight={20}
          onPress={() => {   // Aqui deberia ir el evento para pasar al LOGIN 
            alert("2222");   // onSignInPressed
          }}
        />

        <Modal isVisible={isModalVisible}>
          <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Selecciona un rol:</Text>

            <CheckBox
              label="Profesional"
              checked={selectedOption === 'Opción 1'}
              onChange={() => handleOptionSelect('Opción 1')}
            />
            <CheckBox
              label="Contratista"
              checked={selectedOption === 'Opción 2'}
              onChange={() => handleOptionSelect('Opción 2')}
            />


            <Button title="Cerrar" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
      <Banner
        illustration={(props) => (
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://objectstorage.mx-queretaro-1.oraclecloud.com/n/axjm5wci2rqn/b/skillsImages/o/William.jpg",
            }}
          />
        )}
        text={
          <Text
            style={{
              fontSize: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Jeffrey Reyes
          </Text>
        }
      ></Banner>

      <Card>
        <Card.Title title="Decoraciones para bodas" />
        <Card.Content>
          <View>
            {data ? (
              <Text>{data.message}</Text> // Suponiendo que la API devuelve un objeto con una propiedad "message"
            ) : (
              <Text>Cargando...</Text>
            )}
          </View>
          {/* <Text variant="bodyMedium">
            Mi nombre es Jeffrey Reyes, soy una persona que se caracteriza por brindar mis
            servicios en Bodas, en lo que mi servicio se basa es en la organización de la
            decoración, arreglos, mesas.
            !Todo lo que quieres en tú boda con creatividad y esfuerzo se puede lograr¡
          </Text> */}
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/702" }} />
        <Card.Actions>
          <Button>Ver</Button>
        </Card.Actions>
      </Card>
      
       

       
    
    </>
  );
}
