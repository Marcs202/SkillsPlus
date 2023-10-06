import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { ScrollView, StyleSheet, Text, View, Image,SafeAreaView, Platform } from 'react-native';
import CustomDropdown from '../components/customdropdown';

export default function HomeScreen({navigation}){
   
    return(
        <ScrollView style={styles.contenedor}>
           <ScrollView horizontal>
                <View>
                    <Image source={require("../placeholderimgs/img1.jpg")} style={styles.bubbleban}/>
                </View>
                <View>
                    <Image source={require("../placeholderimgs/img2.jpg")} style={styles.bubbleban}/>
                </View>
                <View>
                    <Image source={require("../placeholderimgs/img3.jpg")} style={styles.bubbleban}/>
                </View>
                <View>
                    <Image source={require("../placeholderimgs/img4.jpg")} style={styles.bubbleban}/>
                </View>
                <View>
                    <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                </View>
           </ScrollView>
           <ScrollView>
                <View>
                    <CustomDropdown style={styles.dropdown}></CustomDropdown>
                </View>
                <Text style={styles.titulo}>Usuario más contratados</Text>
                <View style={styles.listado}>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                    <View style={styles.listaItem}>
                        <Image source={require("../placeholderimgs/img5.jpg")} style={styles.bubbleban}/>
                    </View>
                </View>
           </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bubbleban:{
		width: 80,
		height: 80,
        marginRight:10,
        borderRadius: 50,
    },
    contenedor:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        marginHorizontal: 5,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5, 
        
    },
    listaItem:{
        flexBasis: '33%',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    titulo:{
        fontWeight: 'bold',
        marginVertical:10,
        fontSize:24,
    }
})
=======
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text onPress={()=> alert('Esta es la pantalla principal')} style={{fontSize: 26, fontWeight: 'bold'}}>
                Pantalla principal
            </Text>
        </View>
    )
}
>>>>>>> 10fe6ea154e23fc0281910054c414de24aadeb52
