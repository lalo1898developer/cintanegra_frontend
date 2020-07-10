import React from 'react';
import Navigation from './components/Navigation';
import HolaMundo from './components/HolaMundo';
import AuthContextProvider from './contexts/AuthContext'

function App() {
  return (
    <AuthContextProvider>

      <Navigation nombre="Eduardo" edad={22}></Navigation>
      <div className="container">
        <h1>Hello World!</h1>
        <HolaMundo></HolaMundo>
     </div>
    </AuthContextProvider>
  );
}

export default App;
