import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

            <h1>Ract boiler plate project with login and a crud.</h1>
            <h2>React hook (useState, useContext, useEffect and useHistory) with three different context.</h2>
            <h2>Nested switch is being used to manage public and private routes.
            Axio is used to connect to the backend api.</h2>

            <h2>
            Authentication is handled by token that is stored in the localstore.
            Validation, alerts, messages, loading spinner are components integrated in the project.</h2>
            <h2>Style is handled by custom css boostrap and styles components. </h2>

            <Link to={'https://github.com/cvaquedano/react-boiler-plate'} target="_blank">
                    Front end source code
            </Link>
            <h1>
            <td onClick={()=> window.open("https://github.com/cvaquedano/react-boiler-plate", "_blank")}>Front end source code</td>
            </h1>
            <h1>
            <td onClick={()=> window.open("https://github.com/cvaquedano/netcoreboilerplate", "_blank")}>Back end source code</td>
            </h1>

        </div>
    );
};

export default Main;