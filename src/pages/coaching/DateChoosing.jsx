import styles from '../../App.module.css';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
    export default function DateChoosing() {
    const [isLoading, setIsLoading] = useState(false)
    const Navigate = useNavigate()
    const Text = () => (
        <p className={'mx-[5%] md:font-normal md:text-sm lg:font-thin lg:text-2xl'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s. <br />
            When an unknown printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
    );
    const Inputs = () => (
        <>
            <Formik
                    initialValues={{ name: '', phone: '', date: '', message: '' }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Fullname is Required'),
                        phone: Yup.number().typeError('Must be a number').required('Phone number is Required'),
                        date: Yup.string().required('Date is required'),
                        message: Yup.string().required('Message is Required'),
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        setIsLoading(true)
                        try {
                            const response = await fetch('https://your-api-endpoint.com/api/v1/xpertView/coaching', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(values),
                            });

                            if (response.status===200) {
                                console.log(response)
                                toast("Request Succesfully sent.",{
                                    position:'top-center',
                                    pauseOnHover:true,
                                    progress:undefined,
                                    autoClose:3000,
                                    hideProgressBar:false,
                                    draggable:false
                                })
                                Navigate('/home')
                            }
                            const data = await response.json();
                            console.log('Success:', data);
                        } catch (error) {
                            console.log(error.message)
                            toast(`${error.message}`,{
                                position:'top-center',
                                pauseOnHover:true,
                                progress:undefined,
                                autoClose:3000,
                                hideProgressBar:false,
                                draggable:false
                            })
                            console.error('Error:', error);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className={`flex flex-col ml-[7%] mr-[5%] shadow-2xl p-[20px]`}>
                                <div className={'flex flex-col mt-[5%] '}>
                                    <label htmlFor="name" className={`${styles.headerText} my-[5px] text-center text-7xl`}>Choose A Date</label>
                                    <Field name="name" type="text" placeholder='Fullname'  className={`border rounded-[5px]
                                        pl-[20px] h-10 my-[20px]`}/>
                                    {touched.name && errors.name && <div className="text-red-500">{errors.name}</div>}
                                    <Field name="phone" type="number" placeholder='Phone Number ' className={`border rounded-[5px]
                                        pl-[20px] h-10 my-[20px]`}/>
                                    {touched.phone && errors.phone && <div className="text-red-500">{errors.phone}</div>}
                                    <Field name="date" type="text" placeholder='proposed date' className={`border rounded-[5px]
                                        pl-[20px] h-10 my-[20px]`}/>
                                    {touched.date && errors.date && <div className="text-red-500">{errors.date}</div>}
                                    <Field name="message" as="textarea" placeholder="Message"
                                           className={'border h-44 my-[20px] rounded-[5px] pl-[20px]'} />
                                    {touched.message && errors.message && <div className="text-red-500">{errors.message}</div>}
                                </div>
                                <div className={'flex justify-center items-center '}>
                                    <button type="submit"
                                            className={'bg-[#756961] w-[80px] text-white text-center rounded-[10px]'}>
                                        {isLoading? (
                                            <div>
                                                LoadingLoop
                                            </div>
                                        ): (<p>Send</p>)
                                        }</button>
                                </div>
                            </div>
                        </Form>

                        )}
            </Formik>
         <ToastContainer/>
        </>
    );
    const Header = () => (
        <p className={`${styles.benefit} text-[300%] text-center`}>
            Choose a convenient Date
        </p>
    );
    return (
            <div className={`grid my-[40px] ${styles.largeGrid} lg:grid-rows-2 lg:grid-cols-2`}>
                <div className={`order-1 md:order-2 lg:order-3 lg:mt-[10%]`}>
                    <Text />
                </div>
                <div className={`order-3 lg:order-1 lg:col-span-1 lg:my-auto lg:row-span-2`}>
                    <Inputs />
                </div>
                <div className={`order-2 md:order-1 lg:order-2 lg:my-auto`}>
                    <Header />
                </div>
            </div>
    );
}
