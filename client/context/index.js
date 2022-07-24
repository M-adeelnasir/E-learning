import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { logoutUser } from "../requests/user";
//initial state
const initialState = {
    user: null
}

//create context
const Context = createContext();

//root reducer
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        default:
            return state
    }
}

//context provider
const Provider = ({ children }) => {

    const router = useRouter()

    const [state, dispatch] = useReducer(rootReducer, initialState)
    useEffect(() => {
        dispatch({
            type: "LOGIN",
            payload: JSON.parse(window.localStorage.getItem("user"))
        })
    }, [])



    axios.interceptors.response.use(function (response) {
        //any status code that lies in 2XX cause function to trigger
        // Do something with response data
        return response
    }, function (err) {
        //any status code that lies in 4XX cause function to trigger
        // Do something with response error
        let res = err.response

        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {

            return new Promise((resolve, reject) => {
                logoutUser().then((data) => {
                    // console.log("/401 err >logout");
                    dispatch({ type: 'LOGOUT' })
                    window.localStorage.removeItem('user')
                    router.push('/login')
                }).catch((err) => {
                    // console.log("AXIOS INTERCEPTORS ERROR=>", err);
                    reject(err)
                })

            })

        }
        return Promise.reject(err);


    })


    useEffect(() => {
        const getCsrfToken = async () => {
            const { data } = await axios.get('/api/v1/csrf-token')
            axios.defaults.headers['X-CSRF-Token'] = data.getgetCsrfToken
        }
        getCsrfToken()
    }, [])



    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export { Provider, Context }