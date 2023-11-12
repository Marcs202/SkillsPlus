import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import { useGlobal } from "../asset/valuesglobal";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
export default function EditServices() {
  const navigation = useNavigation();
  const { userIdProfesional } = useGlobal();
    const [Titulo, setTitulo] = useState('');
    const [Desc, setDesc] = useState('');
    const [selectedImage, setSelectedImage] = useState(''); // Estado para almacenar la imagen seleccionada

    const route = useRoute();
  const { id_servicio } = route.params;

  useEffect(() => {
    console.log('ID del Servicio:', id_servicio);
    // Realiza las operaciones necesarias con el id_servicio
  }, [id_servicio]);


    // const ImagePicker = () => {
    //     let options = {
    //         storageOptions:{
    //             path:"image"
    //         }
    //     }
    //     launchImageLibrary(options,response =>{
    //         setSelectedImage(response.assets[0].uri)
    //         console.log('respondeeeeeeeeeeee',response)
    //     })
    // }

    const uploadService = async () => {  
      const data = new FormData();
     // data.append('name', 'Nombre de ejemplo'); 
      data.append('idServicio', id_servicio);
      data.append('titulo', Titulo);
      data.append('descripcion', Desc); 
    //   data.append('image', {
    //     uri: selectedImage,
    //     type: 'image/jpeg', 
    //     name: 'image.jpg', 
    //   }); 

      console.log('Data del post',data)
  
      try {
        
        const response = await axios.put('http://140.84.176.85:3000/servicios/editar', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        alert('Servicio editado con éxito');
        console.log(response.data);
      } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud.
        console.error('Error al editar el servicio', error);
        alert('Error al editar el servicio');
      }
      
      navigation.navigate("homeName");
    }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titulo del servicio:</Text>
      <TextInput
        style={styles.input}
        value={Titulo}
        onChangeText={(text) => setTitulo(text)}
        placeholder="Escribe el título"
      />
      <Text style={styles.label}>Descripción del servicio:</Text>
      <TextInput
        style={styles.input}
        value={Desc}
        onChangeText={(text) => setDesc(text)}
        placeholder="Escribe la descripción"
        multiline={true}
        numberOfLines={4}
      />

      {/* <TouchableOpacity style={styles.imageUploadButton} onPress={ImagePicker}>
        <Text style={styles.imageUploadText}>Subir Imagen</Text>
      </TouchableOpacity>

     <Image style={styles.selectedImage} source={{uri: selectedImage}}></Image> */}

     <TouchableOpacity style={styles.addButton} onPress={uploadService}>
        <Text style={styles.addButtonText}>Editar Servicio</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        marginTop: 0
      },
      label: {
        fontSize: 18,
        marginBottom: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
      },
      imageUploadButton: {
        backgroundColor: '#9600db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
      },
      imageUploadText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      selectedImage: {
        width: 200,
        height: 200,
        marginVertical: 10,
        alignSelf: 'center',
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
});