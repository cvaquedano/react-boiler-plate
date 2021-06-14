import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import MasterContext from '../../../context/masters/masterContext';

const MasterDetail = ({masterDetail}) => {

    const {id, value, quantity, price, total }= masterDetail

    const history = useHistory();

    const masterContext = useContext(MasterContext);
    const {master,setMasterDetailActual,deleteMasterDetail} = masterContext;


    const confirmDeleteMasterDetail = id =>{

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

                deleteMasterDetail(master.id, id);
            }
        });

    }

    // funcion que redirige de forma programada
    const redirectoToEditMasterDetail = masterDetail => {

        setMasterDetailActual(masterDetail.id);
        history.push(`/master/${master.id}/detail/edit/${masterDetail.id}`);
    }


    return (
        <tr>
            <td>{value}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{total}</td>
            <td className="acciones">
                <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => redirectoToEditMasterDetail(masterDetail)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteMasterDetail(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default MasterDetail;