import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MasterContext from '../../../context/masters/masterContext';

const MasterDetailHeader = () => {

    const masterContext = useContext(MasterContext);
    const {master} = masterContext;

    const {id} = master;

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1>
                    <Link to={'/main'} className='text-light'>
                        This header will redirect to the  main page
                    </Link>
                </h1>
            </div>
            <Link to={`/master/${id}/detail/new`}
            className='btn btn-danger nuevo-post d-block d-md-inline-block'
                >Add Master Detail &#43;</Link>
            </nav>
    );
};

export default MasterDetailHeader;