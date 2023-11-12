import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useGlobal } from "../asset/valuesglobal";

import axios from "axios";

export default function DetailScreen() {
  const { userIdProfesional } = useGlobal();
  const navigation = useNavigation();
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleAgregarServicios = () => {
    navigation.navigate("agregarservicios", { screen: "agregarservicios" });
  };
  const handleEditarServicio = (id_servicio) => {
    // Navegar al componente EditarServicio pasando el id_servicio
    navigation.navigate("editarservicios", { id_servicio });
  };

  useFocusEffect(
    React.useCallback(async () => {
      try {
        const response = await axios.get(
          `http://140.84.176.85:3000/servicios/?idProfesional=${userIdProfesional}`
        );
        setServicios(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener servicios", error);
        // Manejar el error de la solicitud GET
      }
    }, [userIdProfesional])
  );

  const commonIcons = [
    { name: "pencil", text: "Editar", color: "#474747" },
    { name: "trash", text: "Eliminar", color: "#db0000" },
  ];

  const handleIconClick = (iconName, servicioId) => {
    console.log('sss',servicioId)
    if (iconName === "pencil") {
      // Lógica para editar
      handleEditarServicio(servicioId);
    } else if (iconName === "trash") {
      // Lógica para eliminar
      handleEliminarServicio(servicioId)
    }
  };

  const handleEliminarServicio = (id) => {
     const data = new FormData();
    console.log(id)
    // data.append('name', 'Nombre de ejemplo'); 
     data.append('idServicio', id);
  
     console.log('Data del post',data)
 
     try {   
       const response = axios.put('http://140.84.176.85:3000/servicios/inactivar', data, {
         headers: {
           'Content-Type': 'multipart/form-data',
         },
       });   
       alert('Se elimino el servicio con exito');
       navigation.navigate("homeName");
       console.log(response.data);
     } catch (error) {
       // Manejar cualquier error que ocurra durante la solicitud.
       console.error('Error al eliminar el servicio', error);
       alert('Error al eliminar el servicio');
     }
   }

  //Consts para filtro
  const [searchText, setSearchText] = useState("");
  const filteredIcons = loading
    ? []
    : servicios.filter((item) =>
        item.Titulo.toLowerCase().includes(searchText.toLowerCase())
      );
  console.log("FILTROO", filteredIcons);
  console.log("servic", servicios);

  return (
    <View style={styles.container}>
   
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAgregarServicios}
      >
        <Text style={styles.addButtonText}>Agregar servicios</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <FlatList
        data={filteredIcons}
        keyExtractor={(item) => item.ID_Servicio.toString()}
        renderItem={({ item }) => (
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>{item.Titulo}</Text>
            <View style={styles.iconContainer}>
              {commonIcons.map((iconItem, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleIconClick(iconItem.name, item.ID_Servicio)}
                >
                  <View style={styles.iconItem}>
                    <Text style={styles.iconText}>{iconItem.text}</Text>
                    <Ionicons
                      name={iconItem.name}
                      size={30}
                      color={iconItem.color}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: "#9600db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  iconText: {
    marginBottom: 5,
  },
});
