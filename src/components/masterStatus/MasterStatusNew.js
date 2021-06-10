import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router';
import AlertContext from '../../context/alerts/alertContext';
import MasterContext from '../../context/masters/masterContext';

const MasterStatusNew = () => {

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const masterContext = useContext(MasterContext);
    const {agregarMasterStatus} = masterContext;

    const history = useHistory()

    const submitNewMasterStatus = e =>{
        e.preventDefault();

        if(value.trim() === '' || description.trim() === ''){
            showAlert('Ambos campos son obligatorios','alerta-error');
            return;
        }

        agregarMasterStatus({
            value, description
        });

        history.push('/status')

    }
    return (
        <div className='row justify-content-center'>
           <div className='col-md-8'>
               <div className='card-body'>
                   <h2 className='text-center mb-4 font-weight-bold'>
                       Add New Master Status
                   </h2>
                   {alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
                   <form
                    onSubmit={submitNewMasterStatus}
                   >
                       <div className='form-group'>
                           <label>Status Value</label>
                           <input
                                type='text'
                                className='form-control'
                                placeholder='Status value'
                                name='value'
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            <label>Status Description</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Status description'
                                name='description'
                                value={description}
                                onChange={e => setDescription(e.target.value)}
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

export default MasterStatusNew;