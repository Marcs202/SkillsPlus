import { SelectList } from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const CustomDropdown = ({ onValueChange, onValueChangeDep }) => {
  const [selected, setSelected] = useState([]);
  const [apiData, setApiData] = useState([]); // Estado para almacenar los datos de la API


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



  const selectData = Array.isArray(apiData) ? apiData.map((item) => ({ key: item.ID, value: item.NOMBRE })) : [];
  const selectData2 = Array.isArray(selected) ? selected.map((item) => ({ key: item.ID, value: item.NOMBRE })) : [];
  
  // console.log('Pruebas',selectData2)
  // console.log('Pruebas',selectData)

  const handleValueChange = (value) => {
    setApiData(value);
    if (onValueChange) {
      onValueChange(value); // Llama a la función de devolución de llamada con el valor seleccionado
    }
  };
  const handleValueChangeDep = (value) => {
    setSelected(value);
    if (onValueChangeDep) {
      onValueChangeDep(value); // Llama a la función de devolución de llamada con el valor seleccionado
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
        setSelected={handleValueChangeDep}
        data={selectData2}
        save="value"
        boxStyles={{  backgroundColor: "white",  width: '50%', justifyContent:'space-between'  }}
        dropdownStyles={{ backgroundColor: "white"  }}
      />
      </View>
    </>
  );
};

export default CustomDropdown;
