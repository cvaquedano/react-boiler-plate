import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Main = () => {

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado()
    }, []);

    return (
        <h1>Desde Main</h1>
    );
};

export default Main;