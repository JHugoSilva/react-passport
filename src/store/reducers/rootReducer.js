import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import LoadingReducer from './loadingReducer'
import NotifyReducer from './notifyReducer'
import RegisterReducer from './registerReducer'

const rootReducer = combineReducers({
    AuthReducer,
    LoadingReducer,
    NotifyReducer,
    RegisterReducer
})

export default rootReducer