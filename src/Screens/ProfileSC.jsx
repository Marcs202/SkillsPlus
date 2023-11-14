import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen({ isAuthenticated, userType }) {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const { userIdProfesional, setUserIdProfesional } = useGlobal();
  const { userId, setUserId } = useGlobal();

  const toggleModal = () => {
    navigation.navigate("cambioProfesional", { screen: "cambioProfesional" });
  };
  const handleLogin = () => {
    navigation.navigate("login", { screen: "login" });
  };

  const handleLogout = () => {
    try {
      setUserId(null);
      setUserIdProfesional(null);

      navigation.navigate("homeName", { screen: "homeName" });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
    fetchServices();
  }, [userId, userIdProfesional]);



  //Perfil
  const [users, setUsers] = useState([]);

  const fetchUserInfo = useCallback(() => {
    fetch(`http://140.84.176.85:3000/usuarios/usuario?id=${userId}`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, [userId]);

  //Perfil Profesional
  const [profesionals, setProfesionals] = useState([]);

  const fetchProfeInfo = useCallback(() => {
    fetch(`http://140.84.176.85:3000/usuarios/usuario?id=${userId}`)
      .then((response) => response.json())
      .then((data) => setProfesionals(data))
      .catch((error) => console.error(error));
  }, [userId]);

  //Servicios
  const [data, setDataApi] = useState([]); // Aquí almacenaremos los datos de la API

  const fetchServices = useCallback(() => {
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
  }, [userIdProfesional]);
  useEffect(() => {
    fetchUserInfo();
    fetchProfeInfo();
    fetchServices();
  }, [fetchUserInfo, fetchProfeInfo, fetchServices]);

  return (
    <>
      {userId == null && userIdProfesional == null ? (
        <View style={styles.containerEmpty}>
          <Image
            source={{
              uri: "https://axjm5wci2rqn.objectstorage.mx-queretaro-1.oci.customer-oci.com/n/axjm5wci2rqn/b/skillsImages/o/splash.png",
            }}
            style={styles.logoImg}
          />
          <View style={styles.userBox}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={handleLogin}
            >
              <Text style={styles.name}>Log in</Text>
              <AntDesign
                style={{ marginLeft: 10 }}
                name="team"
                type="font-awesome"
                color="#6F2C8C"
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : userIdProfesional == null ? (
        <ScrollView>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              style={{ marginRight: 10, marginLeft: 20 }}
              name="deleteuser"
              type="font-awesome"
              size={30}
              color="#6F2C8C"
              onPress={handleLogout}
            />
            <Text style={{ color: "#6F2C8C" }} onPress={handleLogout}>
              Cerrar Sesión
            </Text>
            <AntDesign
              style={{ marginRight: 10, marginLeft: 60 }}
              name="swap"
              type="font-awesome"
              color="#6F2C8C"
              size={30}
              onPress={() => {
                toggleModal();
              }}
            />
            <Text
              style={{ color: "#6F2C8C" }}
              onPress={() => {
                toggleModal()
              }}
            >
              Cambio a Profesional
            </Text>
          </View>

          <View style={styles.containerIn}>
            <Text style={styles.nameUser}>Informacion del Perfil</Text>
            <View style={styles.ClientBox}>
              <Text style={styles.name}>Nombre: </Text>
              <Text style={styles.infoLabel}>{users.Nombre}</Text>
              <Text style={styles.name}>Apellido: </Text>
              <Text style={styles.infoLabel}>{users.Apellido}</Text>
              <Text style={styles.name}>Correo:</Text>
              <Text style={styles.infoLabel}>{users.Correo}</Text>
              <Text style={styles.name}>Foto de Perfil:</Text>
              <Image source={{ uri: users.Foto }} style={styles.userImg} />
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View style={styles.userContainer}>
            <Image source={{ uri: profesionals.Foto }} style={styles.perfil} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>
                {profesionals.Nombre} {profesionals.Apellido}
              </Text>
              <Text style={styles.email}>{profesionals.Correo}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="deleteuser"
                  type="font-awesome"
                  size={30}
                  color="#6F2C8C"
                  onPress={handleLogout}
                />
                <Text style={{ color: "#6F2C8C" }} onPress={handleLogout}>
                  Cerrar Sesión
                </Text>
              </View>
            </View>
          </View>

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
                  Contrataciones
                </Button>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6F2C8C",
  },
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
  infoLabel: {
    flex: 1,
    marginLeft: 75,
    fontWeight: "400",
    fontSize: 20,
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
    paddingTop: 5,
  },
  nameUser: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6F2C8C",
    marginTop: 20,
    textAlign: "center",
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
  userImg: {
    width: 110,
    height: 130,
    borderRadius: 10,
    marginTop: "10%",
    padding: 15,
    marginTop: 20,
    justifyContent: "center",
    marginLeft: "30%",
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
    width: 190,
    marginLeft: 45,
    backgroundColor: "#722FE3",
  },
  ClientBox: {
    borderWidth: 2,
    borderColor: "#AA92CE" /* #722FE3 */,
    borderStyle: "dotted",
    borderRadius: 10 /* #D4E6F1 */,
    marginTop: 60,
    padding: 15,
    backgroundColor: "#F5EDF9",
  },
  userBox: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 50,
    borderWidth: 2,
    borderColor: "#AA92CE" /* #722FE3 */,
    borderStyle: "dotted",
    borderRadius: 10 /* #D4E6F1 */,
    padding: 15,
    backgroundColor: "#F5EDF9",
  },
  logoImg: {
    width: 350,
    height: 130,
    marginBottom: 50,
    justifyContent: "center",
  },
});