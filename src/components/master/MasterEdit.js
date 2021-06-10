import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MasterContext from '../../context/masters/masterContext';

const MasterEdit = () => {

    const history = useHistory();

    // state local
    const [masterLocal, setMasterLocal] = useState({
        id:'',
        name:'',
        firstName: '',
        lastName: '',
        dob:'',
        genderText:'',
        masterStatusEntityId:'',
        gender: Boolean(false)

    });

    const masterContext = useContext(MasterContext);
    const {master,mastersStatus,  editMaster, obtenerMasterStatus} = masterContext;

    useEffect(()=> {
        obtenerMasterStatus()
        // eslint-disable-next-line
    },[]);

    useEffect(()=>{
        const masterForEdit = {
            id :master[0].id,
            firstName :master[0].name.split(' ')[0],
            lastName : master[0].name.split(' ')[1],
            dob: master[0].dob.slice(0,10),
            masterStatusEntityId : master[0].masterStatusEntityId,
            gender: master[0].gender,
            genderText: master[0].gender ? '1' : '0'
        }
        setMasterLocal(masterForEdit)
    },[master]);

    // al recargar la pagina pueda que el state se pierda y de un error
    if(!masterLocal) return null;

    const {firstName,lastName, dob, genderText, masterStatusEntityId, gender } = masterLocal;

    const submitEditMaster = e => {
        e.preventDefault();

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

        editMaster(masterLocal)

        history.push('/master');
    };

    const updateState = e =>{
        setMasterLocal({
            ...masterLocal,
            [e.target.name] : e.target.value

        })
    }
    return (
        <div className='row justify-content-center'>
           <div className='col-md-8'>
               <div className='card-body'>
                   <h2 className='text-center mb-4 font-weight-bold'>
                       Edit Master
                   </h2>
                   <form
                    onSubmit={submitEditMaster}
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
                            Save Changes
                       </button>
                   </form>
               </div>
           </div>
       </div>
    );
};


export default MasterEdit;