import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import LoadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    AuthReducer,
    LoadingReducer
})

export default rootReducer