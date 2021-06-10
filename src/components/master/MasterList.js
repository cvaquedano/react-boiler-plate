import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MasterContext from '../../context/masters/masterContext';
import Master from './Master';

const MasterList = () => {
    const masterContext = useContext(MasterContext);
    const {masters,obtenerMaster} = masterContext;

    useEffect(()=> {
        obtenerMaster()
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
            <Link to={'/master/new'}
            className='btn btn-danger nuevo-post d-block d-md-inline-block'
                >Add Master &#43;</Link>
            </nav>


           <table className='table table-striped'>
               <thead className='bg-primary table-dark'>
                   <tr>
                       <th scope='col'>Name</th>
                       <th scope='col'>DOB</th>
                       <th scope='col'>Gender</th>
                       <th scope='col'>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   { masters.length ===0 ? 'No rows to show' : (
                       masters.map(master => (
                           <Master
                            key={master.id}
                            master={master}
                           />
                       ))
                   )}

               </tbody>
           </table>
       </Fragment>
    );
};

export default MasterList;