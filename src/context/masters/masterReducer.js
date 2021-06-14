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
    MASTER_STATUS_ERROR,
    OBTENER_MASTER_DETAIL,
    EDIT_MASTER_DETAIL,
    AGREGAR_MASTER_DETAIL,
    MASTER_DETAIL_ACTUAL,
    ELIMINAR_MASTER_DETAIL,
    MASTER_DETAIL_ERROR

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
                        )[0],
            };
        case EDIT_MASTER:
            return{
                ...state,
                masters : state.masters.map(masters =>
                    masters.id === action.payload.id ? masters = action.payload :
                    masters
                )
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

        case OBTENER_MASTER_DETAIL:
            return {
                ...state,
                masterDetails: action.payload
            };
        case AGREGAR_MASTER_DETAIL:
            return {
                ...state,
                masterDetails: [...state.masterDetails,action.payload]
            };
        case MASTER_DETAIL_ACTUAL:
            return {
                ...state,
                masterDetail: state.masterDetails
                    .filter(masterDetail =>
                        masterDetail.id === action.payload
                        )[0],
            };
        case EDIT_MASTER_DETAIL:
            return{
                ...state,
                masterDetails : state.masterDetails.map(masterDetails =>
                    masterDetails.id === action.payload.id ? masterDetails = action.payload :
                    masterDetails
                )
            };
        case ELIMINAR_MASTER_DETAIL:
        return {
            ...state,
            masterDetails: state.masterDetails
                .filter(masterDetails =>
                    masterDetails.id !== action.payload
                    ),
            masterDetail: null
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
                        )[0]
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
        case EDIT_MASTER_STATUS:
            return{
                ...state,
                mastersStatus : state.mastersStatus.map(masterStatus =>
                    masterStatus.id === action.payload.id ? masterStatus = action.payload :
                    masterStatus
                )
            };

        case MASTER_DETAIL_ERROR:
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