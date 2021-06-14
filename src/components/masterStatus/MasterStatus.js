import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import MasterContext from '../../context/masters/masterContext';

const MasterStatus = ({masterStatus}) => {

    const {id,value, description}= masterStatus;


    const history = useHistory();

    const masterContext = useContext(MasterContext);
    const {setMAsterStatusActual,eliminarMasterStatus} = masterContext;


    const confirmDeleteMasterStatus = id =>{

        Swal.fire({
            title:'Estas seguro de eliminar?',
            text:'No podras reversar esta accion!',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Si, borrarlo!'
        }).then((result)=>{
            if(result.value){

                eliminarMasterStatus(id);
            }
        });

    }

    // funcion que redirige de forma programada
    const redirectoToEditMasterStatus = masterStatus => {

        setMAsterStatusActual(masterStatus.id);
        //dispatch(obtenerProductoEditarAction(masterStatus));
        history.push(`/status/edit/${masterStatus.id}`);
    }
    return (
        <tr>
            <td>{value}</td>
            <td>{description}</td>
            <td className="acciones">
            <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => redirectoToEditMasterStatus(masterStatus)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteMasterStatus(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default MasterStatus;