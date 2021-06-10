import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Main = () => {

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, []);

    return (
        <h1>This is the main page. algo use as default</h1>
    );
};

export default Main;