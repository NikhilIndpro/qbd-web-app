import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import {
  sendEmailForResetPassword,
  getChangedLanguage,
  loginUserAction
} from './actions';
 
import { RootState } from "../../rootState"

export const useLogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const languageRes = useSelector((state:RootState) => state.loginReducer.language);
  const invalidUser = useSelector((state:RootState) => state.loginReducer.inValidUser)
  const languageConstant = {
    english: 'en',
    swedish: 'sv-SE',
  };


  const logInKey = languageRes && languageRes.find((r:any) => r.name === 'Login');
  const forgetPasswordKey =
    languageRes && languageRes.find((r:any) => r.name === 'Forgot your password ?');
  const noWorriesKey =
    languageRes && languageRes.find((r:any) => r.name === 'no worries, click');
  const toResetPassWordKey =
    languageRes && languageRes.find((r:any) => r.name === 'to reset your password.');
  const hereKey = languageRes && languageRes.find((r:any) => r.name === 'here');
  const EnterEmailKey =
    languageRes &&
    languageRes.find(
        (r:any) => r.name === 'Enter your e-mail address below to reset your password.',
    );
  const goBackKey = languageRes && languageRes.find((r:any) => r.name === 'Back');
  const submitKey = languageRes && languageRes.find((r:any) => r.name === 'Submit');
  const ForgetPasswordPageKey =
    languageRes && languageRes.find((r:any) => r.name === 'Forget Password ?');
  const InvalidUserNameOrPasswordKey = languageRes && languageRes.find((r:any) => r.name === 'InvalidUserNameOrPassword')  
  const userNameKey = languageRes && languageRes.find((r:any) => r.name === "Username")
  const passwordKey = languageRes && languageRes.find((r:any) =>r.name === "Password")
  const requiredKey = languageRes && languageRes.find((r:any) => r.name === "required")
  
  
 



  const [forgotPasswordPage, setforgotPasswordPage] = useState(false);
  const [forgotPasswordEmail, setforgotPasswordEmail] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [shoowInvalidUserError, setShoowInvalidUserError] = useState(false);

  useEffect(() => {
   invalidUser === false?
       setShoowInvalidUserError(true): setShoowInvalidUserError(false)
    
   }, [invalidUser]);


   useEffect(() => {
    getChangedLanguage(dispatch, selectedLanguage);
  }, [languageRes]);
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const userNameValidation =`${userNameKey && userNameKey.value} ${requiredKey && requiredKey.value}`

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },


    validationSchema: Yup.object({
      email: Yup.string()
         .matches(emailRegExp, 'Please enter a valid email address.')
        .required(userNameValidation),
      password: Yup.string().required(`${passwordKey && passwordKey.value} ${requiredKey && requiredKey.value}`),
    }),

    onSubmit: values => {
      let email = values.email;
      let password = values.password;
      const payload = {
        email: email,
        password: password,
      };
      loginUserAction(dispatch,payload)
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    },
  });

  const forgotPassword = e => {
    e.preventDefault();
    console.log('forgotPasswordEma', forgotPasswordEmail);
    sendEmailForResetPassword(forgotPasswordEmail);
  };

  const changeLanguage = res => {
    setSelectedLanguage(res);
  };

  return {
    formik,
    forgotPassword,
    forgotPasswordPage,
    forgotPasswordEmail,
    setforgotPasswordEmail,
    setforgotPasswordPage,
    changeLanguage,
    selectedLanguage,
    languageConstant,
    logInKey,
    forgetPasswordKey,
    noWorriesKey,
    toResetPassWordKey,
    hereKey,
    ForgetPasswordPageKey,
    EnterEmailKey,
    goBackKey,
    submitKey,
    shoowInvalidUserError,
    InvalidUserNameOrPasswordKey,
    userNameKey,
    passwordKey,
    requiredKey
  };
};
