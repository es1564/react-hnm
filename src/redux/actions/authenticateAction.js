function login(id, password){
    return (dispatch, getState)=>{
        console.log('action')
        dispatch({type:"loginSuccess", payload: {id, password}})
    }
}

export const authenticateAction={login}