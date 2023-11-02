import * as React from 'react';
import { MainContainer } from './src/MainContainer';
import { GlobalProvider } from './src/asset/valuesglobal'
function App(){
  return(
    <GlobalProvider>
    <MainContainer/>
    </GlobalProvider>
  );
}

export default App;