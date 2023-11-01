import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function DetailScreen(){
    const navigation = useNavigation();
      const handleAgregarServicios = () => {
        navigation.navigate('agregarservicios',{screen: 'agregarservicios'});
      };

    //Datos quemados para el FlatList
  const iconData = [
    {
        id: '1',
        title: 'Servicio 1',
        onPress: () => alert('Iconos de Opción 1 presionados'),
      },
      {
        id: '2',
        title: 'Servicio 2',
        onPress: () => alert('Iconos de Opción 2 presionados'),
      },
      {
        id: '3',
        title: 'Servicio 3',
        onPress: () => alert('Iconos de Opción 3 presionados'),
      },
  ];

  const commonIcons = [
    { name: 'pencil', text: 'Editar', color:'#474747' },
    { name: 'options', text: 'Detalles', color: '#9600db' },
    { name: 'trash', text: 'Eliminar', color: '#db0000' },
  ];
  
  //Consts para filtro
  const [searchText, setSearchText] = useState('');
  const filteredIcons = iconData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

    
    return (
        <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAgregarServicios}>
          <Text style={styles.addButtonText}>Agregar servicios</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <FlatList
          data={filteredIcons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.optionContainer}>
              <Text style={styles.optionTitle}>{item.title}</Text>
              <View style={styles.iconContainer}>
                {commonIcons.map((iconItem, index) => (
                  <TouchableOpacity key={index} onPress={item.onPress}>
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
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
      },
      addButton: {
        backgroundColor: '#9600db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
      },
      optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      },
      optionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconItem: {
        alignItems: 'center',
        marginHorizontal: 10,
      },
      iconText: {
        marginBottom: 5,
      },
})
