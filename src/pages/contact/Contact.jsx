import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import styles from '../../App.module.css'
import { Icon } from "@iconify/react";
import { Field, Formik, Form } from "formik";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const navigate = useNavigate();

    const ContactSchema = Yup.object().shape({
        fullName: Yup.string().strip().min(5, 'Name too short').required("Name cannot be blank"),
        phoneNumber: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number must be digits only')
            .min(10, 'Phone number is too short')
            .max(14, 'Phone number is too long')
            .required('Phone number is required'),        message: Yup.string().strip().min(2, 'Message too short').required('Message is required')
    });

    const submitForm = async (values, { resetForm }) => {
        try {
            const payload = {
                fullName: values.fullName,
                phoneNumber: values.phoneNumber,
                message: values.message
            };
            console.log(payload)
            const response = await axios.post("http://localhost:8080/api/v1/xpertview/contact", payload);

            if (response.status === 200) {
                toast.success("Contact request successfully sent.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate('/home');
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            resetForm({
                fullName: '',
                phoneNumber: '',
                message: ''
            });
        }
    };

    const ContactMe = () => {
        return (
            <Formik
                initialValues={{
                    fullName: '',
                    phoneNumber: '',
                    message: ''
                }}
                onSubmit={submitForm}
                validationSchema={ContactSchema}
            >
                {({ values, errors, handleChange, handleBlur, touched }) => (
                    <Form className={'bg-gray-100 sm:mx-[40px] pl-[10%] md:w-[25em] py-[30px] md:ml-0'}>
                        <div className={`flex flex-col ${styles.ptags}`}>
                            <p>Name</p>
                            <Field
                                type='text'
                                className={`w-[80%] text-black ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-gray-500'}`}
                                name='fullName'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder=''
                            />
                            {errors.fullName && touched.fullName ? <div className="text-red-500 text-xs">{errors.fullName}</div> : null}

                            <p>Phone Number</p>
                            <Field
                                type='tel'
                                className={`w-[80%] ${errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-gray-500'}`}
                                name='phoneNumber'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder=''
                            />
                            {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-500 text-xs">{errors.phoneNumber}</div> : null}

                            <p>Message</p>
                            <Field
                                className={`w-[80%] ${errors.message && touched.message ? 'border-red-500 ' : 'border-gray-500'}`}
                                name='message'
                                as='textarea'
                                rows='5'
                                placeholder=''
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.message && touched.message ? <div className="text-red-500 text-sm">{errors.message}</div> : null}

                            <button type="submit"
                                    className="mt-4 bg-gray-700 text-white w-[40%] h-[30%] mx-[20%]
                               font-bold px-4 rounded active:bg-blue-950">
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    };

    return (
        <div>
            <Navbar />
            <div className={'mt-[50px] md:flex'}>
                <div className={'flex flex-col justify-center items-start ml-[10%]'}>
                    <p className={`${styles.header} font-bold text-6xl`}>Contact With me </p>
                    <p className={`${styles.header} font-bold text-3xl `}>Xpert View</p>
                    <p className={'mt-[15px] mb-[5px]'}>Union Road 47</p>
                    <p className={'mb-[15px]'}>London EC4Y 8AX</p>
                    <div className={'my-[20px]'}>
                        <p className={'flex text-lg mb-[15px] font-bold'}>
                            <Icon icon="mdi:telephone-outline" width="30px" height="30px" />
                            +1234567890
                        </p>
                        <p className={'flex text-lg my-[2%] font-bold'}>
                            <Icon icon="ic:baseline-alternate-email" width="30px" height="30px" />
                            XpertView@gmail.com
                        </p>
                        <p>Monday- Friday 8:30am-8pm</p>
                    </div>
                </div>
                <div className={'mx-[30px]'}>
                    <ContactMe />
                </div>
            </div>
            <Footer />
            <ToastContainer/>
        </div>
    );
}
