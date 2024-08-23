import React, {useState} from "react";
import '../index.css'
import {Field, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import axios from 'axios';
import {Form, useNavigate} from "react-router-dom";
import {Icon} from "@iconify/react";
import loadingAltLoop from "@iconify-icons/line-md/loading-alt-loop";

function Register(){
    const [ loading, isLoading]= useState(false);
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email:'',phoneNumber:'',password:``, confirmPassword:''
    })
    const load=()=>{
        return  (<div className ='flex items-center justify-center'>
            <Icon width={24} heigth={24} icon={loadingAltLoop}/>
        </div>)
    }

    let userSchema =Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[,/;!#@%^*&(){}~`])/,
                'Password must contain letters, numbers, and special characters')
            .required('Password is required'),
        phoneNumber:Yup.string()
            .matches(/^[0-9]{10}/)
            .required('phone Number is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })
    const submitForm = async(values)=>{
        let errorValue = 1;
        isLoading(true);
        try{
            if(values.password !== values.confirmPassword){
                toast("Passwords must match",{
                    autoClose:3000,
                    position:"top-center",
                    progress:undefined,
                    closeOnClick:true
                })
                setUserData({
                    email:'',
                    password: '',
                    phoneNumber: '',
                    confirmPassword:''
                })
                errorValue= 2;
                throw new Error("Invaid details provided");
            }
            const payload = {
                email:userData.email,
                password:userData.password,
                phoneNumber: userData.phoneNumber
            }
            const response= await axios.post(
                'http://localhost:8080/api/v1/organizer/register', payload,{
                    headers:{
                        "Content-Type":'application/json'
                    }
                })
            console.log(response)
            if(response.status===201){
                toast('Registeration successful.',{
                    position:'top-center',
                    autoClose:3000,
                    closeOnClick:true,
                    progress:undefined,
                    draggable:true
                })
                navigate('/dashboard');
            }
        }
        catch(error){
            if(errorValue===2){
            }
            else{
                toast("something went wrong,or pls check details provided.",
                    {
                        position:"top-center",
                        autoClose:3000,
                        closeOnClick:true,
                        progress:undefined
                    })
            }
        }
        finally {
            setUserData({
                email:userData.email,
                password:'',
                confirmPassword: '',
                phoneNumber:''
            });
            isLoading(false);
        }
    }
    const login = ()=>{
        navigate('/login')
    }
    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div 
            className='w-[80vw] mx-[5vw] h-[80vh] block justify-center bg-amber-400 rounded-[30px]
                    sm:w-[60vw]'>
                    <p className='mt-[4vh] text-center text-amber-500 font-extrabold text-2xl bg-black'>Event Booker</p>
                    <div className=''>
                    <Formik
                        initialValues={{email: '', password: '', confirmPassword: '', phoneNumber: ''}}
                        validationSchema={userSchema}
                        onSubmit={submitForm}>

                        {({values, errors,
                              handleChange,handleBlur
                              ,touched}) => (
                            <Form>
                                <div className='flex justify-center items-center flex-col mt-[7vh]'>
                                    <div className=''>
                                    <p className='font-semibold text-1xl lg:ml-[2vw] lg:my-[px] mb-[6px]'>
                                    Email*
                                        </p>
                                        <Field
                                            className='px-[4vw] sm:w-[40vw]  xl:w-[45vw] 
                                            lg:py-[1vw] lg:px-[2vw] lg:w-[45vw] md:py-[0.7vw]
                                            py-[3vw] s sm:py-[20px] rounded-[10px]'
                                            placeholder='email'
                                            type='email'
                                            name='Email'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            values={values.email}
                                            style={{borderColor: errors.email && touched.email ? 'red' : 'inherit',}}
                                        />
                                    </div>

                                    <div>
                                    <p className='font-semibold text-1xl lg:ml-[2vw] lg:my-[px] mb-[6px]'>
                                    PhoneNumber*
                                        </p>
                                        <Field
                                         className='px-[4vw] sm:w-[40vw]  xl:w-[45vw] 
                                         xl:py-[1vw] lg:px-[2vw] lg:w-[45vw] lg:py-[0.7vw]
                                          py-[3vw] s sm:py-[20px] rounded-[10px]'
                                            placeholder='📞Phone'
                                            type='number'
                                            name='phoneNumber'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            values={values.phoneNumber}
                                            style={{borderColor: errors.phoneNumber && touched.phoneNumber ? 'red' : 'inherit',}}
                                        />
                                    </div>

                                    <div >
                                    <p className='font-semibold text-1xl lg:ml-[2vw] lg:my-[px] mb-[6px]'>
                                    Password*
                                        </p>
                                        <Field
                                            className='px-[4vw] sm:w-[40vw]  xl:w-[45vw] 
                                            xl:py-[1vw] lg:px-[2vw] lg:w-[45vw] lg:py-[0.7vw]
                                            py-[3vw] s sm:py-[20px] rounded-[10px]'
                                            placeholder='password'
                                            type='password'
                                            name='password'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            values={values.password}
                                            style={{borderColor: errors.password && touched.password ? 'red' : 'inherit',}}
                                        />
                                    </div>

                                    <div >
                                    <p className='font-semibold text-1xl lg:ml-[2vw] lg:my-[px] mb-[6px]'>
                                    Confirm password*
                                        </p>
                                        <Field
                                             className='px-[4vw] sm:w-[40vw]  xl:w-[45vw] 
                                             lg:py-[1vw] lg:px-[2vw] lg:w-[45vw] lg:py-[0.7vw]
                                             py-[3vw] s sm:py-[20px] rounded-[10px]'
                                            placeholder='confirm password'
                                            type='password'
                                            name='confirmPassword'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            values={values.confirmPassword}
                                            style={{borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : 'inherit',}}
                                        />
                                    </div>

                                    <div className='flex justify-center align-center gap-2 pt-[10vw]'>
                                        <div>
                                            {loading ? (
                                                <button className=''>
                                                    {load()}f
                                                </button>
                                            ) : (
                                            <button onClick={submitForm} type='submit'
                                            className='bg-black px-[1px] w-[100px] text-amber-500 rounded-[10px]'
                                            >
                                                    Register
                                                </button>
                                            )}
                                        </div>
                                        <button onClick={login} 
                                        className='bg-black px-[10px] w-[100px] text-amber-500 rounded-[10px]'>
                                                Login
                                        </button>
                                    </div>

                                </div>
                            </Form>
                            )
                        }
                    </Formik>
                    <ToastContainer/>  
                </div>
            </div>
        </div>

    )
}


export default Register;