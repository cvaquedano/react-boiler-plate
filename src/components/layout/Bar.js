import React, {useContext, useEffect} from 'react';
import AuthContext from  '../../context/authentication/authContext';


const Bar = () => {

    const authContext = useContext(AuthContext);
     const {usuario ,usuarioAutenticado, cerrarSesion} = authContext;

     useEffect(()=>{
        usuarioAutenticado()
     },[]);

    return (
       <header className="app-header">
           {usuario ? <p className="nombre-usuario">Hello <span>{usuario.name}</span></p> : null}
           

           <nav className="nav-principal">
               <button
                className='btn btn-blank btn-eliminar'
                onClick={()=>cerrarSesion()}
               >
                   Logout
               </button>
           </nav>
       </header>
    );
};

export default Bar;