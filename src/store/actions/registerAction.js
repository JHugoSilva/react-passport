import { Http } from '../../config/globalConfig'
import { changeLoading } from './loadingActions'
import { changeNotify } from './notifyActions'
import { setUserToken } from './authAction'

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

export const registerUser = (data) => {
    return dispatch => {
        dispatch(changeLoading({
            open: true,
            msg: 'Registrando Usuário'
        }))
        return Http.post('/register', data)
            .then(res => {
                dispatch(changeLoading({
                    open: false
                }))
                if (typeof res !== 'undefined') {
                    if (res.data.error) {
                        dispatch(registerError(res.data.error))
                    }
                    if (res.data.success) {
                        console.log(res)
                        dispatch(changeNotify({
                            open: true,
                            class: 'success',
                            msg: 'Usuário Cadastrado com Sucesso ;)'
                        }))
                        dispatch(setUserToken(res.data.token))
                        dispatch(success(true))
                    }
                }
            })
            .catch(() => {
                dispatch(changeLoading({
                    open: false
                }))
            })
    }
}