import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import Custominput from "../../components/custominput";
import Custombutton from "../../components/custombutton";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useGlobal } from "../../asset/valuesglobal";

const Signin = () => {
  const [usernamel, setUsernamel] = useState("");
  const [passwordl, setPasswordl] = useState("");
  const navigation = useNavigation();

  // const { setUserIdProfesional } = useGlobal();
  const { setUserId } = useGlobal();
  const { userId } = useGlobal();
  const { setUserIdProfesional } = useGlobal();
  const { userIdProfesional } = useGlobal();
  const onSignInPressed = () => {
    const userData = {
      correo: usernamel,
      pass: passwordl,
    };
    console.log("responde", userData);
    axios
      .post("http://140.84.176.85:3000/usuarios/login", userData, {
        headers: {
          "Content-Type": "application/json", // Establece el encabezado de tipo JSON
        },
      })
      .then((response) => {
        // console.log('respuesta',response)
        console.log("respuesta", response.data.idUsuario);
        if (response.status === 201) {
          console.info("Inicio de sesión exitoso");
          setUserId(response.data.idUsuario);
          setUserIdProfesional(response.data.idProfesional);
          console.log("variable global", userId);
          console.log("variable profesiona;", userIdProfesional);
          if (userId != null) {
            navigation.navigate("homeName");
          }
        } else {
          console.warn("Credenciales incorrectas");
        }
      })
      .catch((error) => {
        console.warn("Error en la solicitud", error);
      });
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.titulo}>Login</Text>
        <Custominput
          placeholder="Usuario"
          value={usernamel}
          setValue={setUsernamel}
        />
        <Custominput
          placeholder="Contraseña"
          value={passwordl}
          setValue={setPasswordl}
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.buttonSignIn}
          onPress={onSignInPressed}
        >
          <Text style={styles.textIngresar}>Ingresar</Text>
        </TouchableHighlight>
        <Custombutton
          text="¿No tienes cuenta? Crea una."
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    justifyContent: "flex-start",
    marginTop: 130,
    flex: 1,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
  buttonSignIn: {
    backgroundColor: "#27374D",
    padding: 10,
    marginVertical: 10,
    marginTop: 40,
    borderRadius: 50,
    width: 135,
  },
  textIngresar: {
    color: "white",
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Signin;
