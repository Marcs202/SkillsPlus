import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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
            console.log(response)
        })
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

     <TouchableOpacity style={styles.addButton} onPress={() => {alert('Servicio guardado');}}>
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