import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

//Pantallas
import HomeScreen from './Screens/HomeSC';
import DetailScreen from './Screens/DetailSC';
import ProfileScreen from './Screens/ProfileSC';
import SearchScreen from './Screens/SearchSC';
import AddServices from './Screens/agregarservicios';

//Nombre de las pantallas
const homeName= 'Inicio';
const detailsName = 'Detalles';
const searchName = 'Búsqueda';
const profileName = 'Perfil';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BTab(){
    return(
            <Tab.Navigator initialRouteName={homeName} screenOptions={({route})=> ({
                tabBarIcon:({focused, color, size}) =>{
                    let iconName;
                    let rn =route.name;
                    if (rn === homeName){
                        iconName = focused ? 'home':'home-outline'
                    } else if(rn === detailsName){
                        iconName = focused ? 'list' : 'list-outline'
                    }else if (rn === profileName){
                        iconName = focused ? 'person' : 'person-outline'
                    }else if (rn === searchName){
                        iconName = focused ? 'search' : 'search-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                "tabBarActiveTintColor": "#6F2C8C",
                "tabBarInactiveTintColor": "#BFACC8",
                "tabBarLabelStyle": {
                    "paddingBottom": 10,
                    "fontSize": 10
                },
                "tabBarStyle": [
                    {
                    "padding": 10,
                    "height" : 70
                    },
                    null
                ]
            }) }
            
            >
                <Tab.Screen name={homeName} component={HomeScreen}></Tab.Screen>
                <Tab.Screen name={detailsName} component={DetailScreen}></Tab.Screen>
                <Tab.Screen name={searchName} component={SearchScreen}></Tab.Screen>
                <Tab.Screen name={profileName} component={ProfileScreen}></Tab.Screen>
            </Tab.Navigator>
    )
}

export function MainContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Tab' component={BTab} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="agregarservicios" component={AddServices}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
