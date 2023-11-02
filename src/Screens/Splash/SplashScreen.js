import React, {Component} from "react"
import {View,StatusBar} from "react-native"
import * as Animatable from "react-native-animatable"
import  {imageBrackgroundStyle} from "../../components/General"


export default class SplashScreen extends Component{



  render(){
    return(
      <View style={imageBrackgroundStyle.image}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)"/>

      <Animatable.Image 
      animation="pulse"
      easing="ease-out"
      iterationCount="infinite"
      style={{
        width:300,
        height:114,
        marginLeft:25


      }}
      source={require("../../img/skill_logo.png")}
      />
      </View>
    );
  }
}