import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import MasterContext from '../../context/masters/masterContext';

const Master = ({master}) => {

    const {id, name, dob, gender, }= master

    const history = useHistory();

    const masterContext = useContext(MasterContext);
    const {setMasterActual,eliminarMaster} = masterContext;


    const confirmDeleteMaster = id =>{

        Swal.fire({
            title:'Estas seguro de eliminar?',
            text:'No podras reversar esta accion!',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Yes, Delete it!'
        }).then((result)=>{
            if(result.value){

                eliminarMaster(id);
            }
        });

    }

    // funcion que redirige de forma programada
    const redirectoToEditMaster = master => {

        setMasterActual(master.id);
        //dispatch(obtenerProductoEditarAction(masterStatus));
        history.push(`/master/edit/${master.id}`);
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> {dob}</span></td>
            <td>{gender ? 'Male' : 'Female'}</td>
            <td className="acciones">
            <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => redirectoToEditMaster(master)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteMaster(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Master;