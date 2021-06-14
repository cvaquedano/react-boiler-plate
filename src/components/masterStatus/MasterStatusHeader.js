import React from 'react';
import { Link } from 'react-router-dom';

const MasterStatusHeader = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
        <div className='container'>
            <h1>
                <Link to={'/'} className='text-light'>
                    This header will redirect to the main page
                </Link>
            </h1>
        </div>
        <Link to={'/status/new'}
        className='btn btn-primario'
            >Add Master Stauts &#43;</Link>
        </nav>
    );
};

export default MasterStatusHeader;