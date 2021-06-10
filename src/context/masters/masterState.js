import React, { useReducer } from 'react';

import {
    OBTENER_MASTER,
    AGREGAR_MASTER,
    // VALIDAR_MASTER,
    MASTER_ACTUAL,
    ELIMINAR_MASTER,
    MASTER_ERROR,
    OBTENER_MASTER_STATUS,
    AGREGAR_MASTER_STATUS,
    EDIT_MASTER,
    // VALIDAR_MASTER_STATUS,
    MASTER_STATUS_ACTUAL,
    EDIT_MASTER_STATUS,
    ELIMINAR_MASTER_STATUS,
    MASTER_STATUS_ERROR,
} from '../../types';
import masterReducer from './masterReducer';
import masterContext from './masterContext';
import clienteAxios from '../../config/axios';

const MasterState = props  => {

    const initialState = {
       masters : [],
       master: null,
       mensaje : null,

       masterStatus: null,
       mastersStatus:[]
    };

    const [state, dispatch] = useReducer(masterReducer, initialState);

    const agregarMaster = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/master/post', datos);

            dispatch({
                type:AGREGAR_MASTER,
                payload: respuesta.data
            });

        } catch (error) {

            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }

            dispatch({
                type: MASTER_ERROR,
                payload: alerta
            })
        }
    }

    const obtenerMaster = async () =>{
        try {
            const respuesta = await clienteAxios.get('/api/master');
            dispatch({
                type:OBTENER_MASTER,
                payload: respuesta.data
            });

        } catch (error) {
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }

            dispatch({
                type: MASTER_ERROR,
                payload: alerta
            })
        }
    }

    const setMasterActual =  id => {
        dispatch({
            type: MASTER_ACTUAL,
            payload: id
        });
    };

    const eliminarMaster = async id => {

        try {
            await clienteAxios.delete(`/api/master/${id}`);

            dispatch({
                type: ELIMINAR_MASTER,
                payload: id
            });

        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', // error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: MASTER_ERROR,
                payload: alerta
            });
        }

    };

    const editMaster = async datos =>{
        try {
            if(datos.genderText==='1'){
                datos.gender = Boolean(true);
            } else {
                datos.gender = Boolean(false);
            }

            datos.name = `${datos.firstName.trim()} ${datos.lastName.trim()}`;
            await clienteAxios.put(`/api/Master/${datos.id}`,datos);

            dispatch({
                type:EDIT_MASTER,
                payload: datos
            });

        } catch (error) {

            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }

            dispatch({
                type: MASTER_STATUS_ERROR,
                payload: alerta
            })
        }
    }

    const agregarMasterStatus = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/MasterStatus/post',datos);

            dispatch({
                type:AGREGAR_MASTER_STATUS,
                payload: respuesta
            });

        } catch (error) {

            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }

            dispatch({
                type: MASTER_STATUS_ERROR,
                payload: alerta
            })
        }
    }

    const editMasterStatus = async datos =>{
        try {
            await clienteAxios.put(`/api/MasterStatus/${datos.id}`,datos);

            dispatch({
                type:EDIT_MASTER_STATUS,
                payload: datos
            });

        } catch (error) {

            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }

            dispatch({
                type: MASTER_STATUS_ERROR,
                payload: alerta
            })
        }
    }

    const obtenerMasterStatus = async () =>{
        try {
            const respuesta = await clienteAxios.get('/api/MasterStatus');

            dispatch({
                type:OBTENER_MASTER_STATUS,
                payload: respuesta.data
            });

        } catch (error) {
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error'
            }

            dispatch({
                type: MASTER_STATUS_ERROR,
                payload: alerta
            })
        }
    }

    const setMAsterStatusActual =  id => {

        dispatch({
            type: MASTER_STATUS_ACTUAL,
            payload: id
        });
    };

    const eliminarMasterStatus = async id => {

        try {
            await clienteAxios.delete(`/api/MasterStatus/${id}`);

            dispatch({
                type: ELIMINAR_MASTER_STATUS,
                payload: id
            });

        } catch (error) {
            const alerta = {
                msg: 'Hubo un error', // error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: MASTER_STATUS_ERROR,
                payload: alerta
            });
        }

    };


    return (
        <masterContext.Provider
            value={{
                masters: state.masters,
                master: state.master,
                mensaje: state.mensaje,
                mastersStatus: state.mastersStatus,
                masterStatus : state.masterStatus,
                agregarMaster,
                obtenerMaster,
                setMasterActual,
                editMaster,
                eliminarMaster,
                agregarMasterStatus,
                obtenerMasterStatus,
                setMAsterStatusActual,
                editMasterStatus,
                eliminarMasterStatus
            }}
        >
            {props.children}
        </masterContext.Provider>
    );

}

export default MasterState;