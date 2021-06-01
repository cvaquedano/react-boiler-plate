import React, {useContext, useEffect} from 'react';
import Bar from './Bar';
import Sidebar from './Sidebar';
import AuthContext from  '../../context/authentication/authContext';

const Main = () => {

     const authContext = useContext(AuthContext);
     const {usuarioAutenticado} = authContext;

     useEffect(()=>{
        usuarioAutenticado()
     },[]);
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Bar/>

                <main>
                    <div className="cotenedor-tareas">
                    </div>
                </main>

            </div>

        </div>
    );
};

export default Main;