import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    LOADING
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=>{
    switch(action.type){

        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false,
                loading:false
            }

        case CERRAR_SESION:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                mensaje: action.payload,
                usuario: null,
                autenticado: null,
                cargando:true,
                loading:false
            }

        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando:false,
                loading:false
            }

        case LOADING:
        return{
            ...state,
            loading:true
        }

        default:
            return state;
    }
}