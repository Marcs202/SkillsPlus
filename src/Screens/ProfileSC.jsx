import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity  } from "react-native";
import { HStack, Banner, Avatar } from "@react-native-material/core";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Card, Button } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';



export default function ProfileScreen({ updateDetailScreenVisibility}) {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDetailScreen, setShowDetailScreen] = useState(true);

  const [user, setUser] = useState(null);

 


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleLogin = () => {
    navigation.navigate('login',{screen: 'login'});
  };

  const handlOption = () => {
    alert("Tendras que volverte a logear para relizar el cambio" );
    handleLogin();

  };
  
 
  return (
    <>
   
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height:50,
          width:'100%',
          backgroundColor: "white",
       
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
        <AntDesign
          style={{ paddingRight: 20, marginLeft:300 }}
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
          onPress={handleLogin}       
        />
      
      



      <Modal  isVisible={isModalVisible}>
        <View style={{  backgroundColor:'white', justifyContent: 'center', alignItems: 'center',  borderRadius: 10, padding: 20}}>
        

          <Text> ¿ Deseas convertirte en profesional ?</Text>
          <Card.Actions>
         < Button onPress={handlOption}  > Si </Button> 
         < Button onPress={toggleModal}> No </Button>
        </Card.Actions> 
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

      {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
          Tipo de usuario
        </Text>
      </View> */}

      <Card>
        <Card.Title title="Decoraciones para bodas" />
        <Card.Content>
          <Text variant="bodyMedium">
            Mi nombre es Jeffrey Reyes, soy una persona que se caracteriza por brindar mis
            servicios en Bodas, en lo que mi servicio se basa es en la organización de la
            decoración, arreglos, mesas.
            !Todo lo que quieres en tú boda con creatividad y esfuerzo se puede lograr¡
          </Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/702" }} />
        <Card.Actions>
          <Button>Ver</Button>
        </Card.Actions>
      </Card>
      
       

       
    
    </>
  );
}
