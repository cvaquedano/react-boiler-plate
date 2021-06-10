import {
    OBTENER_MASTER,
    AGREGAR_MASTER,
    VALIDAR_MASTER,
    MASTER_ACTUAL,
    ELIMINAR_MASTER,
    MASTER_ERROR,
    OBTENER_MASTER_STATUS,
    AGREGAR_MASTER_STATUS,
    // VALIDAR_MASTER_STATUS,
    EDIT_MASTER,
    EDIT_MASTER_STATUS,
    MASTER_STATUS_ACTUAL,
    ELIMINAR_MASTER_STATUS,
    MASTER_STATUS_ERROR

} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=>{
    switch(action.type){

        case OBTENER_MASTER:
            return {
                ...state,
                masters: action.payload
            };
        case AGREGAR_MASTER:
            return {
                ...state,
                masters: [...state.masters,action.payload]
            };
        case VALIDAR_MASTER:
            return {
                ...state,
                // errorFormulario: true
            };
        case MASTER_ACTUAL:
            return {
                ...state,
                master: state.masters
                    .filter(master =>
                        master.id === action.payload
                        ),
            };
        case ELIMINAR_MASTER:
            return {
                ...state,
                masters: state.masters
                    .filter(master =>
                        master.id !== action.payload
                        ),
                master: null
            };

        case OBTENER_MASTER_STATUS:
            return {
                ...state,
                mastersStatus: action.payload
            };
        case AGREGAR_MASTER_STATUS:
            return {
                ...state,
                mastersStatus: [...state.mastersStatus,action.payload]
            };

        case MASTER_STATUS_ACTUAL:
            return {
                ...state,
                masterStatus: state.mastersStatus
                    .filter(masterStatus =>
                        masterStatus.id === action.payload
                        )
            };
        case ELIMINAR_MASTER_STATUS:
            return {
                ...state,
                mastersStatus: state.mastersStatus
                    .filter(masterStatus =>
                        masterStatus.id !== action.payload
                        ),
                        masterStatus: null
            };

        case EDIT_MASTER:
            return{
                ...state,
                masters : state.masters.map(masters =>
                    masters.id === action.payload.id ? masters = action.payload :
                    masters
                )
            }

        case EDIT_MASTER_STATUS:
            return{
                ...state,
                mastersStatus : state.mastersStatus.map(masterStatus =>
                    masterStatus.id === action.payload.id ? masterStatus = action.payload :
                    masterStatus
                )
            }

        case MASTER_STATUS_ERROR:
        case MASTER_ERROR:
            return {
                ...state,
                mensaje: action.payload
            };


        default:
            return state;
    }
}