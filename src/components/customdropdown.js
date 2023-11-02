import { SelectList } from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const CustomDropdown = ({ onValueChange }) => {
  const [selected, setSelected] = useState("");
  const [apiData, setApiData] = useState([]); // Estado para almacenar los datos de la API

  // Simula una solicitud a la API, reemplaza esto con tu lógica real de solicitud a la API.
  useEffect(() => {
    fetch("http://140.84.176.85:3000/categorias/")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://140.84.176.85:3000/categorias/")
      .then((response) => response.json())
      .then((data) => setSelected(data))
      .catch((error) => console.error(error));
  }, []);



  const selectData = apiData.map((item) => ({ key: item.ID, value: item.NOMBRE }));
  //const selectData2 = selected.map((item) => ({ key: item.ID, value: item.NOMBRE }));

  const handleValueChange = (value) => {
    setSelected(value);
    if (onValueChange) {
      onValueChange(value); // Llama a la función de devolución de llamada con el valor seleccionado
    }
  };

  return (
    <>
    <View style={{ flexDirection: 'row', marginTop:10}}>
      <SelectList
        setSelected={handleValueChange}
        data={selectData}
        save="value"
        boxStyles={{  backgroundColor: "white", width: '50%', justifyContent:'space-between' }}
        dropdownStyles={{ backgroundColor: "white",  }}
      />
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={selectData}
        save="value"
        boxStyles={{  backgroundColor: "white",  width: '50%', justifyContent:'space-between'  }}
        dropdownStyles={{ backgroundColor: "white"  }}
      />
      </View>
    </>
  );
};

export default CustomDropdown;
