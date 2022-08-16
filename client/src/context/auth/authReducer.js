export const authState ={
    isAuthenticated : false,
    loading: true,
    user:{}, // we are expecting a user object that will contain user id, user name, or anything that is sent from the backend.
    error: false
}

const authReducer = ( state, action) =>{
    
    // (type : signin, payload: data coming , and i will updated state according to the action type and the data and then i will return the state back)

    const {type, payload} = action;

    switch (type) {

        case "AUTH_SIGNIN":{
            return{
                ...state,
                isAuthenticated: true,
                loading : false,
                user: payload.data
            }
        }
        case "AUTH_SIGNUP":{
            return{
                ...state,
                isAuthenticated: true,
                loading : false,
                user: payload.savedUser
            }
        }

        default:{
            return state
        }
    }

}
export default authReducer