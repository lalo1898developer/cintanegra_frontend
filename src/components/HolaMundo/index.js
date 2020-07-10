import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'

const HolaMundo = () => {
    const { setNombre } = useContext(AuthContext);
    return ( 
        <input 
            type="text" 
            label="Escribe tu nombre"
            onChange={(e) => setNombre(e.target.value)}
        ></input>
    );
}
 
export default HolaMundo;