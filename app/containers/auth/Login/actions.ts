/*
 *
 * Login actions
 *
 */

import { action } from 'typesafe-actions';
import { api, apiEndPoints } from '../../../api';
import { setBearerToken } from '../../../commonUtils/auth';
import {LOGIN_USER, SET_IS_AUTHENTICATED, SET_LANGUAGE, WRONG_NAME_PASSWORD } from './constants';


const setLanguage = (payload) => action(SET_LANGUAGE, payload)

const logoutUserAction = (payload) => action(SET_IS_AUTHENTICATED,payload)

const useNamePasswordNotValid = (payload) => action(WRONG_NAME_PASSWORD, payload)

export const loginUserAction = async (dispatch,user) => {

    const person = {
      userNameOrEmailAddress:user.email,
      password:user.password
    }
  
      try {
        const response = await api
        .post(apiEndPoints.logIn, JSON.stringify(person))
        .then(res => res)
        .catch(err => {
          throw err;
        });
        console.log("res",response)
        if(response.data.success){
          const {accessToken} = response.data.result;
          setBearerToken(accessToken)
        } 
      } catch (err:any) {
        dispatch(useNamePasswordNotValid(err.response.data.success))   

        console.log("user", err.response.data.success);
      }
    }
    




export const sendEmailForResetPassword = async(email) => {
    const mail = {
      emailAddress:email,
    }
   try{
     const res = await api.post(apiEndPoints.sendResetPasswordCode,JSON.stringify(mail))
   }catch(err){
     console.log("err",err)
   }
     
}

export const getChangedLanguage= async (dispatch,lang) =>{
  const language = {
    languageName:lang
  }
  try{
    const res = await api.get(apiEndPoints.GetLanguageTextsByLanguageName,{params:language})
    console.log(res);

    dispatch(setLanguage(res.data.result))
  }catch(err){
    console.log(err);
  }

}

