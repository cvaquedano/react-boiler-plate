import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router';
import AlertContext from '../../../context/alerts/alertContext'
import MasterContext from '../../../context/masters/masterContext';



const MasterDetailNew = () => {

    const [masterDetailLocal, setMasterDetailLocal] = useState({
        value: '',
        quantity: 0,
        price: 0,
        total: 0,
    });

    const {value, quantity, price, total } = masterDetailLocal;


    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const masterContext = useContext(MasterContext);
    const {master, addMasterDetail} = masterContext;

    const history = useHistory()


    const submitNewMasterStatus = e =>{
        e.preventDefault();

        if(value.trim() === '' ||
        quantity === 0||
        price === 0 ||
        total === 0 ){
            showAlert('All fields are requered','alerta-error');
            return;
        }


        addMasterDetail(master.id, masterDetailLocal);

        history.push(`/master/${master.id}/detail`)

    }
    const updateState = e =>{

        setMasterDetailLocal({
            ...masterDetailLocal,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='row justify-content-center'>
           <div className='col-md-8'>
               <div className='card-body'>
                   <h2 className='text-center mb-4 font-weight-bold'>
                       Add New Master
                   </h2>
                   {alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
                   <form
                    onSubmit={submitNewMasterStatus}
                   >
                       <div className='form-group'>
                           <label>Value</label>
                           <input
                                type='text'
                                className='form-control'
                                placeholder='Value of the detail.'
                                name='value'
                                value={value}
                                onChange={updateState}
                            />
                            <label>quantity</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Quantity'
                                name='quantity'
                                value={quantity}
                                onChange={updateState}
                            />
                            <label>Price</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Price'
                                name='price'
                                value={price}
                                onChange={updateState}
                            />
                           <label>Total</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Total'
                                name='total'
                                value={total}
                                onChange={updateState}
                            />
                       </div>

                       <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                        >
                            Add
                       </button>
                   </form>
                   {/* { cargando ? <p>Cargando...</p> : null} */}
               </div>
           </div>
       </div>
    );
};


export default MasterDetailNew;

