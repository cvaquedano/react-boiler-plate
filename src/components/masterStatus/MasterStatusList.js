import React, { Fragment, useContext, useEffect } from 'react';

import MasterContext from '../../context/masters/masterContext';
import Spinner from '../layout/Spinner';
import MasterStatus from './MasterStatus';
import MasterStatusHeader from './MasterStatusHeader';

const MasterStatusList = () => {
    const masterContext = useContext(MasterContext);
    const {loading, mastersStatus,obtenerMasterStatus} = masterContext;

    useEffect(()=> {
        obtenerMasterStatus()
        // eslint-disable-next-line
    },[]);

    return (
       <Fragment>
           <div className='header'>
            <MasterStatusHeader/>
            {loading ? <Spinner/>: null}
           </div>
           <table className='table table-hover'>
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