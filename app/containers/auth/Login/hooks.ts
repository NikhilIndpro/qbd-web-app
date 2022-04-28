import {useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "./actions"
import {getBearerToken} from "../../../commonUtils/auth"
export const useLogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            
            email: Yup.string().required("Required"),
            password: Yup.string()
            .required("Required"),

        }),

        onSubmit:  (values) => {
            let email = values.email;
            let password = values.password;
            const payload = {
                email: email,
                password: password
            }
          dispatch(loginUserAction(payload))
         setTimeout(() => {
            navigate("/home")

          }, 2000)
        }
    })
//   useEffect(()=>{
//         const token = getBearerToken()
//          if(token) navigate("/dawdad")
//     },[dispatch])
    
    return{
        formik
    }
};
