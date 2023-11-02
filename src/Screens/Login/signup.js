import React, { useState } from "react";
import {View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableHighlight} from "react-native";
import Custominput from "../../components/custominput";
import CustomCheckbox from "../../components/customcheckbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


const SignUp = () => {
    const navigation = useNavigation();
    const [username, createUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, createPassword] = useState("");
    const [rpassword, repeatPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked);
    };

    const saveData = async() => {
        if (username.length == 0 || email.length == 0 || password.length == 0 || rpassword.length == 0){
            console.warn('llene todos los campos');
        }else{
            if(password == rpassword){
                try{
                    var user = {
                        Username: username,
                        Email: email,
                        Password: password
                    }
                    await AsyncStorage.setItem('UserData', JSON.stringify(user));
                    navigation.navigate('Contacts');
                }catch(error){
                    console.warn(error);
                }
            }else{
                console.warn('Las contraseñas no coinciden.');
            }
            
        }
    }

    return(
        <ScrollView>
            <SafeAreaView>
                <View style={styles.root}>
                    <Text style={styles.titulo}>Crear cuenta</Text>
                    <Custominput placeholder="Ingrese nombre de usuario" value={username} setValue={createUsername}/>
                    <Custominput placeholder="Ingrese Correo Electrónico" value={email} setValue={setEmail}/>
                    <Custominput placeholder="Ingrese una contraseña" value={password} setValue={createPassword} secureTextEntry={true}/>
                    <Custominput placeholder="Reescriba la contraseña" value={rpassword} setValue={repeatPassword} secureTextEntry={true}/>
                    <CustomCheckbox 
                    checked={checked} 
                    onChange={handleToggle}
                    text = "Acepto los terminos y condiciones"
                    />
                    <TouchableHighlight style={styles.buttonSignUp} onPress={saveData}><Text style={styles.textRegister}>Registrarse</Text></TouchableHighlight>                    
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        justifyContent: 'flex-start',
        marginTop: 130,
        flex: 1,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10
    },
    textRegister: {
        color: 'white',
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 22
    },
    buttonSignUp: {
        backgroundColor: '#27374D',
        padding: 10,
        marginVertical: 5,
        marginTop: 40,
        borderRadius: 50,
        width: 170,
    }
});

export default SignUp;