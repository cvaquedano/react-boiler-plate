import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MasterContext from '../../context/masters/masterContext';

const MasterStatusEdit = () => {

    const history = useHistory();

    // state local
    const [masterStatusLocal, setMasterStatusLocal] = useState({
        value: '',
        description: ''
    });

    const masterContext = useContext(MasterContext);
    const {masterStatus, editMasterStatus} = masterContext;

    useEffect(()=>{
        setMasterStatusLocal(masterStatus)
    },[masterStatus]);

    // al recargar la pagina pueda que el state se pierda y de un error
    if(!masterStatusLocal) return null;

    const {value, description} = masterStatusLocal;

    const submitEditMasterStatus = e => {
        e.preventDefault();
        editMasterStatus(masterStatusLocal)

        history.push('/status');
    };

    const onChangeFormulario = e =>{
        setMasterStatusLocal({
            ...masterStatusLocal,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className='row justify-content-center'>
           <div className='col-md-8'>
               <div className='card-body'>
                   <h2 className='text-center mb-4 font-weight-bold'>
                       Edit Master Status
                   </h2>
                   <form
                    onSubmit={submitEditMasterStatus}
                   >
                       <div className='form-group'>
                           <label>Nombre Producto</label>
                           <input
                                type='text'
                                className='form-control'
                                placeholder='Status Value'
                                name='value'
                                value={value}
                                onChange={onChangeFormulario}
                            />
                            <label>Nombre Producto</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Status Description'
                                name='description'
                                value={description}
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

export default MasterStatusEdit;