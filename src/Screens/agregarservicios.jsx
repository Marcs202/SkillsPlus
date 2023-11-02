import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

export default function AddServices() {
    const [Titulo, setTitulo] = useState('');
    const [Desc, setDesc] = useState('');
    const [selectedImage, setSelectedImage] = useState(''); // Estado para almacenar la imagen seleccionada

    // Función para abrir el selector de imágenes

    const ImagePicker = () => {
        let options = {
            storageOptions:{
                path:"image"
            }
        }
        launchImageLibrary(options,response =>{
            setSelectedImage(response.assets[0].uri)
            console.log('respondeeeeeeeeeeee',response)
        })
    }

    const uploadService = async () => {
      
      const data = new FormData();
     // data.append('name', 'Nombre de ejemplo'); 
      data.append('titulo', Titulo);
      data.append('descripcion', Desc);
      data.append('profesionalId', 2); 
      data.append('image', {
        uri: selectedImage,
        type: 'image/jpeg', 
        name: 'image.jpg', 
      }); 

      console.log('Data del post',data)
  
      try {
        
        const response = await axios.post('http://140.84.176.85:3000/servicios/upload', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        alert('Servicio guardado con éxito');
        console.log(response.data);
      } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud.
        console.error('Error al guardar el servicio', error);
        alert('Error al guardar el servicio');
      }
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

      <TouchableOpacity style={styles.imageUploadButton} onPress={ImagePicker}>
        <Text style={styles.imageUploadText}>Subir Imagen</Text>
      </TouchableOpacity>

     <Image style={styles.selectedImage} source={{uri: selectedImage}}></Image>

     <TouchableOpacity style={styles.addButton} onPress={uploadService}>
        <Text style={styles.addButtonText}>Guardar Servicio</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
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