import React, { useState,useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import AlertContext from '../../context/alerts/alertContext';
import MasterContext from '../../context/masters/masterContext';

const MasterNew = () => {

    const [masterLocal, setMasterLocal] = useState({
        firstName: '',
        lastName: '',
        dob:'',
        genderText:'',
        masterStatusEntityId:'',
        gender: Boolean(false)
    });

    const {firstName,lastName, dob, genderText, masterStatusEntityId, gender } = masterLocal;


    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const masterContext = useContext(MasterContext);
    const {mastersStatus, obtenerMasterStatus, agregarMaster} = masterContext;

    const history = useHistory()

    useEffect(()=> {
        obtenerMasterStatus()
        // eslint-disable-next-line
    },[]);

    const submitNewMasterStatus = e =>{
        e.preventDefault();

        if(firstName.trim() === '' ||
        lastName.trim() === ''||
        dob.trim() === '' ||
        genderText.trim() ==='' ||
        masterStatusEntityId.trim()===''){
            showAlert('All fields are requered','alerta-error');
            return;
        }

        if(genderText==='1'){
            setMasterLocal({
                ...masterLocal,
                [gender]: Boolean(true)
            })
        }
        else{
            setMasterLocal({
                ...masterLocal,
                [gender]: Boolean(false)
            })

        }

        agregarMaster(masterLocal);

        history.push('/master')

    }
    const updateState = e =>{

        setMasterLocal({
            ...masterLocal,
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
                           <label>First Name</label>
                           <input
                                type='text'
                                className='form-control'
                                placeholder='First Name'
                                name='firstName'
                                value={firstName}
                                onChange={updateState}
                            />
                            <label>Last Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Last Name'
                                name='lastName'
                                value={lastName}
                                onChange={updateState}
                            />
                            <label>DOB</label>
                            <input
                                type="date"
                                name="dob"
                                className='form-control'
                                onChange={updateState}
                                value={dob}
                            />
                            <div>
                                <label>Gender</label>
                                <input
                                    type="radio"
                                    name="genderText"
                                    value='1'
                                    checked={genderText === "1"}
                                    onChange={updateState}

                                /> Male
                                <input
                                    type="radio"
                                    name="genderText"
                                    value='0'
                                    checked={genderText === "0"}
                                    onChange={updateState}
                                /> Female
                            </div>

                            <label>Status</label>
                            <select
                                onChange={updateState}
                                name="masterStatusEntityId"
                                value={masterStatusEntityId}
                            >
                                <option value="">- Seleccione -</option>
                                {mastersStatus.map(opcion => (
                                    <option key={opcion.Id} value={opcion.id}>{opcion.value}</option>
                                ))}
                            </select>
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


export default MasterNew;