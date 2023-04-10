let initialState = {
    id: '',
    password: '',
    authenticate: false
};

function authenticateReducer(state = initialState, action) {
    const {type, payload} = action;
    console.log('action>>')
    console.log(action)
    switch(type) {
        case "loginSuccess":
            return {
                ...state, 
                id: payload.id, 
                password: payload.password, 
                authenticate: true
            }
        default:
            return {...state};
    }
}

export default authenticateReducer;