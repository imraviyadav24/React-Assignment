import axios from 'axios';
// import { returnErrors} from './errorActions';

import {ADD_TASK,ADD_TASK_FAIL,UPDATE_TASK,UPDATE_TASK_FAIL,DELETE_TASK,DELETE_TASK_FAIL,TASK_LOADED,TASK_ERROR,TASK_LOADING,TOKEN_LOADED,TOKEN_ERROR,TOKEN_LOADING,USER_LOADED,USER_LOADING,AUTH_ERROR} from './types';

// check token & load user
export const  fetchToken= ()=> (dispatch,getState)=>{
    // User loading
    dispatch({type:TOKEN_LOADING});
    // get token from localstorage
    // const token=getState().auth.token;
 
    // Header
const config={
    headers:{
        // "Accept": "application/json",
        'Content-Type': 'application/json',          
      }
}
const email="spicebluetest2@gmail.com";
const password="12345678";
const body=JSON.stringify({email,password});
console.log(body);
// if token , add to headers
// if(token){
    // config.headers['x-auth-token']=token;
// }
     axios.post("https://stage.api.sloovi.com/login",body,config)
    .then(res=> dispatch({
        type:TOKEN_LOADED,
        payload:res.data
    }
    ))
    
    .catch(err=>{
        console.log(err);
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type:TOKEN_ERROR
        });
    }) 
    setTimeout(()=>{
        
        loadUser()(dispatch,getState);
        getTasks()(dispatch,getState);
    },1000);
}
export const  loadUser= ()=> (dispatch,getState)=>{
    // User loading
    dispatch({type:USER_LOADING});
    // get token from localstorage
    const token=getState().auth.token;
    console.log("Token",token);
    // Header
const config={
    headers:{
        // "Accept": "application/json",
        'Content-Type': 'application/json',          
      }
}

// if token , add to headers
if(token){
    config.headers['Authorization']='Bearer '+token;
}
     axios.get("https://stage.api.sloovi.com/user",config)
    .then(res=> dispatch({
        type:USER_LOADED,
        payload:res.data
    }
    ))
    .catch(err=>{
        console.log(err);
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type:AUTH_ERROR
        });
    }) 
}
export const  getTasks= ()=> (dispatch,getState)=>{
    // User loading
    dispatch({type:TASK_LOADING});
    // get token from localstorage
    const token=getState().auth.token;
    console.log("Token",token);
    // Header
const config={
    headers:{
        // "Accept": "application/json",
        'Content-Type': 'application/json',          
      }
}

// if token , add to headers
if(token){
    config.headers['Authorization']='Bearer '+token;
}
     axios.get("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",config)
    .then(res=> dispatch({
        type:TASK_LOADED,
        payload:res.data
    }
    ))
    .catch(err=>{
        console.log(err);
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type:TASK_ERROR
        });
    }) 
}

export const addTask=({assigned_user,task_date,task_time,task_msg,is_completed})=>(dispatch,getState)=>{
    const token=getState().auth.token;
    console.log("Token",token);
    // Header
const config={
    headers:{
        // "Accept": "application/json",
        'Content-Type': 'application/json',          
      }
}
if(token){
    config.headers['Authorization']='Bearer '+token;
}

const body=JSON.stringify({assigned_user,task_date,task_time,task_msg,is_completed});
console.log(body);

axios.post("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",body,config)
    .then(res=> dispatch({
        type:ADD_TASK,
        payload:res.data
    }
    ))
    
    .catch(err=>{
        console.log(err);
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type:ADD_TASK_FAIL
        });
    })

}

export const editTask=({task_id,assigned_user,task_date,task_time,task_msg,is_completed})=>(dispatch,getState)=>{
    const token=getState().auth.token;
    console.log("Token",token);
    console.log("Token",assigned_user,task_date,task_time,task_msg,is_completed);
    // Header
const config={
    headers:{
        // "Accept": "application/json",
        'Content-Type': 'application/json',          
      }
}
if(token){
    config.headers['Authorization']='Bearer '+token;
}

const body=JSON.stringify({assigned_user,task_date,task_time,task_msg,is_completed});
console.log(body);

axios.put("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+task_id,body,config)
    .then(res=> dispatch({
        type:UPDATE_TASK,
        payload:res.data
    }
    ))
    
    .catch(err=>{
        console.log(err);
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type:UPDATE_TASK_FAIL
        });
    })

}

export const deleteTask=({task_id})=>(dispatch,getState)=>{
    const token=getState().auth.token;
    console.log("Token",token);
    // Header
const config={
    headers:{
        // "Accept": "application/json",
        'Content-Type': 'application/json',          
      }
}
if(token){
    config.headers['Authorization']='Bearer '+token;
}

axios.delete("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+task_id,config)
    .then(res=> dispatch({
        type:DELETE_TASK,
        payload:res.data
    }
    ))
    
    .catch(err=>{
        console.log(err);
        
        dispatch({
            type:DELETE_TASK_FAIL
        });
    })

}










// Login User





// export const login=({email,password})=>dispatch=>{
//     // Headers
//     const config={
//         headers:{
//             "Accept": "application/json",
//             "Content-Type": "application/json",          
//           }
//     }
//     // Request body

//     const body=JSON.stringify({email,password});
//     console.log(body);

//     axios.post("/api/auth",body,config)
//     .then(res=> dispatch({
//         type:LOGIN_SUCCESS,
//         payload:res.data
//     }))
//     .catch(err=>{
//         console.log("catch block error")
//         dispatch(returnErrors(err.response.data, err.response.status,"LOGIN_FAIL"));
//         dispatch({
//             type:LOGIN_FAIL
//         });
//     })

// }


// // Register User

// export const register=({name,email,password})=>dispatch=>{
//     // Headers
//     const config={
//         headers:{'Content-Type':'application/json'}
//     }
//     // Request body

//     const body=JSON.stringify({name,email,password});
//     console.log(body);

//     axios.post("/api/users",body,config)
//     .then(res=> dispatch({
//         type:REGISTER_SUCCESS,
//         payload:res.data
//     }))
//     .catch(err=>{
//         console.log("catch block error")
//         dispatch(returnErrors(err.response.data, err.response.status,"REGISTER_FAIL"));
//         dispatch({
//             type:REGISTER_FAIL
//         });
//     })

// }


// export const update=({id,name,email})=>(dispatch,getState)=>{
//     // Headers
//     const config={
//         headers:{'Content-Type':'application/json'}
//     }
//     const token=getState().auth.token;
//     if(token){
//         config.headers['x-auth-token']=token;
//     }
//     // Request body

//     const body=JSON.stringify({id,name,email});
//     console.log(body);
//     axios.post("/api/auth/update",body,config)
//     .then(res=> dispatch({
//         type:UPDATE_SUCCESS,
//         payload:res.data
//     }))
//     .catch(err=>{
//         console.log("catch block error-- ")
//         dispatch(returnErrors(err.response.data, err.response.status,"UPDATE_FAIL"));
//         dispatch({
//             type:UPDATE_FAIL
//         });
//     })

// }



// // Logout uSER
// export const logout=()=>{
//     return{
//         type:LOGOUT_SUCCESS
//     };
// };
// // export const tokenConfig=getState=>{
// //     const token=getState().auth.token;
// // }
