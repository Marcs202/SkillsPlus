// En un archivo GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); 
  const [userIdProfesional, setUserIdProfesional] = useState(null); 

  return (
    <GlobalContext.Provider value={{ userId, setUserId, userIdProfesional, setUserIdProfesional }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
