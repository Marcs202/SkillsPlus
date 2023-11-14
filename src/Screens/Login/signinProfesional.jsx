import { SelectList } from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useGlobal } from "../../asset/valuesglobal";
import axios from "axios";
import {useNavigation,} from "@react-navigation/native"
const signinProfesionales = () => {
  const [selected, setSelected] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [selectedCategoriaId, setSelectedCategoriaId] = useState(null);
  const [selectedDepartamentoId, setSelectedDepartamentoId] = useState([]);
  const navigation = useNavigation();
  const { userId } = useGlobal();
  useEffect(() => {
    fetch("http://140.84.176.85:3000/categorias/")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://140.84.176.85:3000/departamentos/")
      .then((response) => response.json())
      .then((data) => setSelected(data))
      .catch((error) => console.error(error));
  }, []);

  const selectData = Array.isArray(apiData)
    ? apiData.map((item) => ({ key: item.ID, value: item.NOMBRE }))
    : [];
  const selectData2 = Array.isArray(selected)
    ? selected.map((item) => ({ key: item.ID, value: item.NOMBRE }))
    : [];

    console.log('selectData',selectData)

    const handleValueChange = (id) => {
        console.log('valueeeID',id)
        
      setSelectedCategoriaId(id);
    
       
      };
    
      const handleValueChangeDep = (value) => {
        console.log('valueee',value)
      
       setSelectedDepartamentoId(value);
    
        
      };

  const update = () => {
    console.log('sssss',selectedCategoriaId)
    console.log('aaaaaa',selectedDepartamentoId)
    
    const data = {
      idUsuario: userId,
      idCategoria: selectedCategoriaId,
      idsDepartamento: [selectedDepartamentoId],
    };

     console.log('Data del post',data)
 
     try {
       
       const response = axios.post('http://140.84.176.85:3000/profesionales/', data, {
         headers: {
            "Content-Type": "application/json",
         },
       });
       
       alert('Se modifico el usuario a profesional');
     } catch (error) {
       // Manejar cualquier error que ocurra durante la solicitud.
       console.error('Error al guardar el servicio', error);
       alert('Error al modificar usuario el servicio');
     }
     navigation.navigate("login", { screen: "login" });
     
  }

  return (
    <>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <SelectList
           setSelected={handleValueChange}
          data={selectData}
          save="key"
          boxStyles={{
            backgroundColor: "white",
            width: "50%",
            justifyContent: "space-between",
          }}
          dropdownStyles={{ backgroundColor: "white" }}
        />
        <SelectList
          setSelected={handleValueChangeDep}
          data={selectData2}
          save="key"
          boxStyles={{
            backgroundColor: "white",
            width: "50%",
            justifyContent: "space-between",
          }}
          dropdownStyles={{ backgroundColor: "white" }}
        />
       
      </View>
      <Button
          mode="contained"
          style={styles.serviceBtn}
          onPress={() => {
           update();
          }}
        >
          Contratacion
        </Button>
    </>
  );
};
const styles = StyleSheet.create({
  serviceBtn: {
    borderWidth: 2,
    borderColor: "#F5EDF9",
    borderRadius: 25,
    width: 140,
    marginLeft: 45,
    backgroundColor: "#722FE3",
    marginTop: 50,
    marginLeft: 135,
  

  },
});

export default signinProfesionales;
