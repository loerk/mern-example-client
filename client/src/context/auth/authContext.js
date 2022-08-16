import {createContext, useReducer} from "react";
import authReducer, { authState } from "./authReducer";
import * as api from "../../api/index"


export const AuthContext = createContext(authState);

export const AuthProvider = ({children}) =>{

    const [state, dispatch] = useReducer(authReducer, authState);

    const signIn = async (formData) => {

        try{
            const data = await api.login(formData)
            dispatch({type :"AUTH_SIGNIN", payload: data})

        }
        catch(err){
            console.log(err)
        }
    }

    const signUp = async (formData) => {

        try{
            const data = await api.signup(formData)
            dispatch({type :"AUTH_SIGNUP", payload: data.savedUser})

        }
        catch(err){
            console.log(err)
        }
    }

    const value ={
        signIn,
        signUp,
        isAuthenticated: state.isAuthenticated
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
