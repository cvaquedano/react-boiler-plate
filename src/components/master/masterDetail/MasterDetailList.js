import React, { Fragment, useContext, useEffect } from 'react';
import MasterContext from '../../../context/masters/masterContext';
import Spinner from '../../layout/Spinner';
import MasterDetail from './MasterDetail';
import MasterDetailHeader from './MasterDetailHeader';
import MasterReadOnlyHeader from './MasterReadOnlyHeader';


const MasterDetailList = () => {
    const masterContext = useContext(MasterContext);
    const {master,masterDetails, loading, getMasterDetail} = masterContext;

    useEffect(()=> {
        getMasterDetail(master.id)
        // eslint-disable-next-line
    },[master]);

    return (
       <Fragment>
           <div className='header'>
            <MasterDetailHeader/>
            {loading ? <Spinner/>: null}
           </div>
           <div className='header'>
               <MasterReadOnlyHeader/>
           </div>
           <table className='table table-hover'>
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