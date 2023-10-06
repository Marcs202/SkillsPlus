import { SelectList } from 'react-native-dropdown-select-list'
import React from 'react';
import { Text,View, StyleSheet } from 'react-native';

const CustomDropdown = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{backgroundColor: 'white', marginTop: 30}}
        dropdownStyles={{backgroundColor: 'white'}}
    />
  )

};

export default CustomDropdown;