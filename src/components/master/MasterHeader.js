import React from 'react';
import { Link } from 'react-router-dom';

const MasterHeader = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1>
                    <Link to={'/'} className='text-light'>
                        This header will redirect to the main page
                    </Link>
                </h1>
            </div>
            <Link to={'/master/new'}
            className='btn btn-danger nuevo-post d-block d-md-inline-block'
                >Agregar Producto &#43;</Link>
        </nav>
    );
};

export default MasterHeader;