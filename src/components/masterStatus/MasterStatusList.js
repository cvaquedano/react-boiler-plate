import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MasterContext from '../../context/masters/masterContext';
import MasterStatus from './MasterStatus';

const MasterStatusList = () => {
    const masterContext = useContext(MasterContext);
    const {mastersStatus,obtenerMasterStatus} = masterContext;

    useEffect(()=> {
        obtenerMasterStatus()
        // eslint-disable-next-line
    },[]);

    return (
       <Fragment>

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


           <table className='table table-striped'>
               <thead className='bg-primary table-dark'>
                   <tr>
                       <th scope='col'>Value</th>
                       <th scope='col'>Description</th>
                       <th scope='col'>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   { mastersStatus.length === 0 ? 'No rows to show' : (
                       mastersStatus.map(masterStatus => (
                           <MasterStatus
                            key={masterStatus.id}
                            masterStatus={masterStatus}
                           />
                       ))
                   )}

               </tbody>
           </table>
       </Fragment>
    );
};

export default MasterStatusList;