import React, { useState } from "react";
import axios from 'axios';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Custominput from "../../components/custominput";
import CustomCheckbox from "../../components/customcheckbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, createUsername] = useState("");
  const [lastname, createLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, createPassword] = useState("");
  const [rpassword, repeatPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: "image",
      },
    };
    launchImageLibrary(options, (response) => {
      setSelectedImage(response.assets[0].uri);
      setSelectedImageName(response.assets[0].fileName)
      console.log("respondeeeeeeeeeeee", response);
    });
  };
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageName, setSelectedImageName] = useState("");
  const uploadService = async () => {
    const data = new FormData();
    data.append('nombre', username);
    data.append("apellido", lastname);
    data.append("correo", email);
    data.append("pass", password);
    data.append("image", {
      uri: selectedImage,
      type: "image/*",
      name: selectedImageName,
    });

    console.log("Data del post", data);

    try {
      const response = await axios.post(
        "http://140.84.176.85:3000/usuarios/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Usuario registrado con éxito");
      console.log(response.data);
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud.
      console.error("Error al guardar el servicio", error);
      alert("Error al guardar el servicio");
    }

    navigation.navigate("homeName");
  };

  const handleToggle = () => {
    setChecked(!checked);
  };

  const saveData = async () => {
    if (
      username.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      rpassword.length == 0
    ) {
      console.warn("llene todos los campos");
    } else {
      if (password == rpassword) {
        try {
          var user = {
            Username: username,
            Email: email,
            Password: password,
          };
          await AsyncStorage.setItem("UserData", JSON.stringify(user));
          navigation.navigate("Contacts");
        } catch (error) {
          console.warn(error);
        }
      } else {
        console.warn("Las contraseñas no coinciden.");
      }
    }
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.root}>
          <Text style={styles.titulo}>Crear cuenta</Text>
          <Custominput
            placeholder="Nombre"
            value={username}
            setValue={createUsername}
          />
           <Custominput
            placeholder="Apellido"
            value={lastname}
            setValue={createLastname}
          />
          <Custominput
            placeholder="Correo Electrónico"
            value={email}
            setValue={setEmail}
          />
          <Custominput
            placeholder="contraseña"
            value={password}
            setValue={createPassword}
            secureTextEntry={true}
          />
          {/* <CustomCheckbox
            checked={checked}
            onChange={handleToggle}
            text="Acepto los terminos y condiciones"
          /> */}
                <TouchableOpacity style={styles.imageUploadButton} onPress={ImagePicker}>
        <Text style={styles.imageUploadText}>Subir Imagen</Text>
      </TouchableOpacity>

      <Image
        style={styles.selectedImage}
        source={{ uri: selectedImage }}
      ></Image>

      <TouchableHighlight style={styles.buttonSignUp} onPress={uploadService}>
        <Text style={styles.textRegister}>Registrarse</Text>
      </TouchableHighlight>
        </View>
        
      </SafeAreaView>

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
  imageUploadButton: {
    backgroundColor: "#9600db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  imageUploadText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginVertical: 10,
    alignSelf: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
  textRegister: {
    color: "white",
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 22,
  },
  buttonSignUp: {
    backgroundColor: "#27374D",
    padding: 10,
    marginVertical: 5,
    marginTop: 40,
    borderRadius: 50,
    width: 170,
  },
});

export default SignUp;
