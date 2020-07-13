import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;