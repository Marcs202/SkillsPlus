import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Custominput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput  
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width:'100%',
        height: 40,
        borderColor: '#e8e8e8',
        borderWidth: 1 ,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5 ,
        marginVertical: 5,
    },
    input:{

    },
})

export default Custominput;