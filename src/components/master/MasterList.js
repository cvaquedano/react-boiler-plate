import React, { Fragment, useContext, useEffect } from 'react';
import MasterContext from '../../context/masters/masterContext';
import Spinner from '../layout/Spinner';
import Master from './Master';
import MasterHeader from './MasterHeader';

const MasterList = () => {
    const masterContext = useContext(MasterContext);
    const {loading, masters,obtenerMaster} = masterContext;

    useEffect(()=> {
        obtenerMaster()
        // eslint-disable-next-line
    },[]);

    return (
       <Fragment>
           <div className='header'>
            <MasterHeader/>
            {loading ? <Spinner/>: null}
           </div>
           <table className='table table-hover'>
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