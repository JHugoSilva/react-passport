import { Http } from '../../config/globalConfig'
import { changeLoading } from './loadingActions'
import { changeNotify } from './notifyActions'

export const actionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CHANGE: 'CHANGE',
}

export const getToken = (token) => ({
    type: actionTypes.GET_TOKEN,
    token
})

export const removeToken = () => ({
    type: actionTypes.LOGOUT,
})

export const loginSuccess = bool => ({
    type: actionTypes.SUCCESS,
    bool
})

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error
})

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const loading = (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isLoading: {
        active: bool,
        msg: msg
    }
})

export const getUserToken = () => dispatch =>
    localStorage.getItem('access_token')
        .then(res => {
            dispatch(loading(false))
            if (typeof res !== 'undefined') {
                dispatch(getToken(res))
            }
        })

export const setUserToken = (token) => dispatch => {
    localStorage.setItem('access_token', token)
    dispatch(loading(false))
    dispatch(loginSuccess(true))
}

export const login = (credentials) => {
    return dispatch => {
        // dispatch(loading(true))
        dispatch(changeLoading({
            open: true,
            msg: 'Autenticando...'
        }))
        return Http.post('/oauth/token', {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'soZ20iYLtDTg5d5aoBwicM3YpAdyilyOkGWnTDXC',
            username: credentials.username,
            password: credentials.password
        })
            .then(res => {
                //dispatch(loading(false))
                dispatch(changeLoading({
                    open: false,
                    msg: ''
                }))
                if (typeof res !== 'undefined') {
                    dispatch(setUserToken(res.data.access_token))
                }
            })
            .catch(error => {
                dispatch(changeLoading({
                    open: false,
                    msg: ''
                }))
                if (error.response) {
                    if (error.response.status === 401 || error.response.status === 400) {
                        dispatch(changeNotify({
                            open: true,
                            msg: 'E-mail e/ou senha incorretos',
                            class: 'error'
                        }))
                    }
                } else {
                    dispatch(changeNotify({
                        open: true,
                        msg: 'Error ao tentar fazer login',
                        class: 'error'
                    }))
                }
            })
    }
}



