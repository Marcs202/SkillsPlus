import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { Card, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import CheckBox from "react-native-checkbox";
import axios from "axios";
import { useGlobal } from "../asset/valuesglobal";

export default function ProfileScreen({ isAuthenticated, userType }) {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

 
  const handleLogin = () => {
    navigation.navigate("login", { screen: "login" });
  };

  const handleLogout = () => {
    try {
      userIdProfesional.set(null); // Asigna un valor nulo a userIdProfesional
      userId.set(null); // Asigna un valor nulo a userId
      // Luego, redirige al usuario a la pantalla de inicio de sesión
      navigation.navigate("login", { screen: "login" });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  const updateProfesional = () => {
   
    navigation.navigate("cambioProfesional", {screen: 'cambioProfesional'})
  };

  const { userIdProfesional } = useGlobal();
  const { userId } = useGlobal();

  //Perfil
  const [users, setUsers] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetch(`http://140.84.176.85:3000/usuarios/usuario?id=${userId}`)
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error(error));
    }, [userId])
  );

  //Servicios
  const [data, setDataApi] = useState([]); // Aquí almacenaremos los datos de la API

  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          `http://140.84.176.85:3000/servicios/?idProfesional=${userIdProfesional}`
        )
        .then((response) => {
          if (response.data && typeof response.data === "object") {
            setDataApi(response.data); // Analizar solo si es un objeto válido
          } else {
            console.error("Respuesta de la API no es un JSON válido.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    }, [userIdProfesional, userId])
  );

  return (
    <>
      <View style={styles.perfiltop}>
        <AntDesign
          style={{ paddingRight: 20, marginLeft: 250 }}
          name="deleteuser"
          type="font-awesome"
          size={30}
          color="#6F2C8C"
          onPress={handleLogout}
        />
        <AntDesign
          style={{ marginRight: 20 }}
          name="swap"
          type="font-awesome"
          color="#6F2C8C"
          size={30}
          onPress={() => updateProfesional()}
        />
        <AntDesign
          name="team"
          type="font-awesome"
          color="#6F2C8C"
          size={30}
          marginRight={20}
          onPress={handleLogin}
        />

        {/* <Modal isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Selecciona un rol:</Text>

            <CheckBox
              label="Profesional"
              checked={selectedOption === "Opción 1"}
              onChange={() => handleOptionSelect("Opción 1")}
            />
            <CheckBox
              label="Contratista"
              checked={selectedOption === "Opción 2"}
              onChange={() => handleOptionSelect("Opción 2")}
            />
            <Button title="Cerrar" onPress={toggleModal} />
          </View>
        </Modal> */}
      </View>

      <ScrollView>
        <View style={styles.userContainer}>
          <Image source={{ uri: users.Foto }} style={styles.perfil} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>
              {users.Nombre} {users.Apellido}
            </Text>
            <Text style={styles.email}>{users.Correo}</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.containerIn}>
            {data.map((item) => (
              <View key={item.ID_Servicio} style={styles.serviceBox}>
                <Text style={styles.title}>{item.Titulo}</Text>
                <View style={{ width: "70%", flexDirection: "row" }}>
                  <Text style={styles.descriptionIn}>{item.Descripcion}</Text>
                  <Image
                    source={{ uri: item.Foto }}
                    style={styles.serviceImg}
                  />
                </View>
                <Button
                  mode="contained"
                  style={styles.serviceBtn}
                  onPress={() => {
                    navigation.navigate("Notificaciones", {
                      screen: "Notificaciones",
                    });
                  }}
                >
                  Contratacion
                </Button>
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  perfiltop: {
    display: "flex",
    flexDirection: "row",
  },
  userContainer: {
    flexDirection: "row",
    flex: 2,
    marginLeft: 10,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  perfil: {
    width: 80,
    height: 80,
    marginLeft: 15,
    borderRadius: 50,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6F2C8C",
  },
  email: {
    fontSize: 16,
  },
  containerIn: {
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6F2C8C",
    padding: 5,
    marginLeft: 100,
  },
  descriptionIn: {
    color: "#4A376A",
    fontWeight: "500",
    fontSize: 16,
    padding: 15,
    alignContent: "center",
    textAlign: "justify",
  },
  serviceImg: {
    width: 110,
    height: 130,
    borderRadius: 10,
    marginTop: "10%",
  },
  serviceBox: {
    borderWidth: 2,
    borderColor: "#AA92CE" /* #722FE3 */,
    borderStyle: "dotted",
    borderRadius: 10 /* #D4E6F1 */,
    marginTop: 25,
    paddingBottom: 15,
    backgroundColor: "#F5EDF9",
  },
  serviceBtn: {
    borderWidth: 2,
    borderColor: "#F5EDF9",
    borderRadius: 25,
    width: 140,
    marginLeft: 45,
    backgroundColor: "#722FE3",
  },
});
