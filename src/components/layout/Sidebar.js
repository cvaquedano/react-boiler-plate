import React from 'react';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside>
            <h1>Menu <span>BoilerPlate</span></h1>
            <div className="proyectos">
                <div style={{ marginBottom: '15px' }}>
                    <NavLink
                        to="/master">
                        Master
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/status">
                        Status
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;