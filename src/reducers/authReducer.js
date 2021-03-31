import {USER_LOADED,USER_LOADING,AUTH_ERROR, TOKEN_LOADING, TOKEN_LOADED, TASK_LOADED, TASK_LOADING} from '../actions/types';

const initialState={
    token:'',
    isLoading:false,
    isAuthenticated:null,
    user:null,
    data:null,
    tasks:null
};

export default function(state=initialState,action){
    switch(action.type){
        case TOKEN_LOADING:
            return{
                ...state,
                isLoading:true,
                
            };
        case TOKEN_LOADED:
            // localStorage.setItem ('token');
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                data:action.payload,
                token:action.payload.results.token

            };
        case TASK_LOADING:
            return{
                ...state,
                isLoading:true,
                
            };
        case TASK_LOADED:
            // localStorage.setItem ('token');
            return{
                ...state,
                // isAuthenticated:true,
                isLoading:false,
                tasks:action.payload,
                // token:action.payload.results.token

            };
        case USER_LOADING:
            return{
                ...state,
                isUpdate:false,
                isLoading:true,
                
            };
        case USER_LOADED:
            // localStorage.setItem ('token');
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload.results,
            };
        
        
        case AUTH_ERROR:  
        // case UPDATE_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                isLoading:false,
            };
        default:
            return state;
    }
}