import React from 'react';
import { Link } from 'react-router-dom';

const MasterHeader = () => {
    return (
        <nav
        className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1>
                    <Link
                    to={'/main'}
                    className='text-light'>
                        React hook boiler plate
                    </Link>
                </h1>
            </div>
            <Link to={'/master/new'}
            className='btn btn-secondary'
                >Add Master &#43;</Link>
            </nav>
    );
};

export default MasterHeader;