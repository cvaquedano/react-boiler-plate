import React from 'react';
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
       <aside>
           <h1>Menu <span>BoilerPlate</span></h1>
           <div className="proyectos">
               <NavLink
               to="/Listado">
                   Listado
               </NavLink>
               
               <NavLink
               to="/Detalle">
                   Detalle
               </NavLink>
           </div>
       </aside>
    );
};

export default Sidebar;