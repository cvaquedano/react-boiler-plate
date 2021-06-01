import React from 'react';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside>
            <h1>Menu <span>BoilerPlate</span></h1>
            <div className="proyectos">
                <div style={{ marginBottom: '15px' }}>
                    <NavLink
                        to="/Listado">
                        Listado
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/Detalle">
                        Detalle
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;