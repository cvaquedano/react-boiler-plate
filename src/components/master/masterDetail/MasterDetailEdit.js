import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MasterContext from '../../../context/masters/masterContext';
import AlertContext from '../../../context/alerts/alertContext'

const MasterDetailEdit = () => {

    const history = useHistory();

    // state local
    const [masterDetailLocal, setMasterDetailLocal] = useState({
        value: '',
        quantity: 0,
        price: 0,
        total: 0
    });

    const masterContext = useContext(MasterContext);
    const {master, masterDetail, editMasterDetail} = masterContext;

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    useEffect(()=>{
        setMasterDetailLocal(masterDetail)
    },[masterDetail]);

    // al recargar la pagina pueda que el state se pierda y de un error
    if(!setMasterDetailLocal) return null;

    const {value, quantity, price, total} = masterDetailLocal;

    const submitEditMasterDetail = e => {
        e.preventDefault();

        if(value.trim() === '' ||
        quantity === 0||
        price === 0 ||
        total === 0 ){
            showAlert('All fields are requered','alerta-error');
            return;
        }

        editMasterDetail(master.id, masterDetailLocal)
        history.push(`/master/${master.id}/detail`);

    };

    const onChangeFormulario = e =>{
        setMasterDetailLocal({
            ...masterDetailLocal,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className='row justify-content-center'>
           <div className='col-md-8'>
               <div className='card-body'>
                   <h2 className='text-center mb-4 font-weight-bold'>
                       Edit Master Detail
                   </h2>
                   {alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
                   <form
                    onSubmit={submitEditMasterDetail}
                   >
                       <div className='form-group'>
                           <label>Value</label>
                           <input
                                type='text'
                                className='form-control'
                                placeholder='Detail Value'
                                name='value'
                                value={value}
                                onChange={onChangeFormulario}
                            />
                            <label>Quantity</label>
                            <input
                                type='number'
                                className='form-control'
                                name='quantity'
                                value={quantity}
                                onChange={onChangeFormulario}
                            />
                            <label>Price</label>
                            <input
                                type='number'
                                className='form-control'
                                name='price'
                                value={price}
                                onChange={onChangeFormulario}
                            />
                            <label>Total</label>
                            <input
                                type='number'
                                className='form-control'
                                name='total'
                                value={total}
                                onChange={onChangeFormulario}
                            />
                       </div>

                       <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                        >
                            Save Changes
                       </button>
                   </form>
               </div>
           </div>
       </div>
    );
};

export default MasterDetailEdit;