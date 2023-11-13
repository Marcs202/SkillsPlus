import React,{ useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { MainContainer } from './src/MainContainer';
import { GlobalProvider } from './src/asset/valuesglobal';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App(){

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Aqui cargaríamos otras cosas como alguna API
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Se renderiza la APP
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // setAppIsReady, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  return(
    <GestureHandlerRootView style={{flex:1}}>
    <View
      style={{ flex: 1,}}
      onLayout={onLayoutRootView}>
        <GlobalProvider> 
      <MainContainer/>
      </GlobalProvider>
    </View>
    </GestureHandlerRootView>
    
  );
}

export default App;