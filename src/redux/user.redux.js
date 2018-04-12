import axios from 'axios'
import {getRedirectPath} from '../util'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'
const ERROR_MSG = ''
const LOG_OUT = 'LOG_OUT'
const initState = {
  redirectTo:'',
  msg:'',
  user:'',
  type:''
}


export function user(state=initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, msg: '', redirectTo:getRedirectPath(action.payload), isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth:false, msg:action.msg}
    case LOAD_DATA:
      return {...state, ...action.payload}
    case LOG_OUT:
      return {...initState, redirectTo:'/login'}
    default:
        return state
  }
}

function authSuccess(obj) {
  const{pwd, ...data} = obj
  console.log('data', data);
  return {type: AUTH_SUCCESS, payload:data}
}
export function loadData(userInfo) {
  return {type:LOAD_DATA, payload:userInfo}
}

export function login({user, pwd}) {
  if(!user||!pwd) {
    return errorMsg('Must input user and password')
  }
  return dispatch=> {
    axios.post('/user/login', {user,pwd})
      .then(res=>{
        if(res.status===200&&res.data.code===0) {
          // dispatch(registerSuccess({user.pwd,type}))
          console.log('login response', res.data.data);
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
export function logoutSubmit() {
  return {type: LOG_OUT}
}
export function update(data) {
  return dispatch=>{
    axios.post('/user/update', data)
      .then(res=>{
        if(res.status===200&&res.data.code===0) {
          // dispatch(registerSuccess({user.pwd,type}))
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

function errorMsg(msg) {
  return {msg, type:ERROR_MSG}
}

export function register({user, pwd, repeatpwd, type}) {
  if(!user || !pwd || !type) {
    return errorMsg("account and password must be input")
  }
  if(pwd!==repeatpwd) {
    return errorMsg("inconsistent password")
  }
  return dispatch=>{
    axios.post('/user/register', {user, pwd, type})
      .then(res=>{
        if(res.status===200&&res.data.code===0) {
          dispatch(authSuccess(res.data.data))
        } else{
          dispatch(errorMsg(res.data.msg))
        }
      })
  }

}
