import React, { Fragment, useContext, useEffect } from 'react';
import MasterContext from '../../../context/masters/masterContext';
import Spinner from '../../layout/Spinner';
import MasterDetail from './MasterDetail';
import MasterDetailHeader from './MasterDetailHeader';


const MasterDetailList = () => {
    const masterContext = useContext(MasterContext);
    const {master,masterDetails, loading, getMasterDetail} = masterContext;

    useEffect(()=> {
        getMasterDetail(master.id)
        // eslint-disable-next-line
    },[master]);

    return (
       <Fragment>
           <MasterDetailHeader/>
           {loading ? <Spinner/>: null}
           <table className='table table-striped'>
               <thead className='bg-primary table-dark'>
                   <tr>
                       <th scope='col'>Value</th>
                       <th scope='col'>Quantity</th>
                       <th scope='col'>Price</th>
                       <th scope='col'>Total</th>
                       <th scope='col'>Actions</th>
                   </tr>
               </thead>
               <tbody>
                   { masterDetails.length ===0 ? 'No rows to show' : (
                       masterDetails.map(masterDetail => (
                           <MasterDetail
                            key={masterDetail.id}
                            masterDetail={masterDetail}
                           />
                       ))
                   )}

               </tbody>
           </table>
       </Fragment>
    );
};


export default MasterDetailList;