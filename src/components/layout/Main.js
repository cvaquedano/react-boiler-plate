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
        <div>
            <h1>This is the main page. algo use as default</h1>
            <h2>Debe de listar las tecnologias, patrones o cualqueir informacion relevante sobre como se elaboro este proyecto</h2>

        </div>
    );
};

export default Main;