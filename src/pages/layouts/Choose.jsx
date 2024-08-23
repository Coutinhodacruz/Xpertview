import styles from '../../App.module.css'
import Footer from './Footer'
import {useNavigate} from "react-router-dom";
export default function Choose(){
    const Navigate = useNavigate()
    return (
        <div>
            
            <p className={`${styles.header} text-5xl text-center my-[30px] md:text-7xl`}>Choose your way</p>
            <p className='text-center text-xl mb-[7px]'>You will achieve your success faster with me</p>
            <p className='w-[80vw] text-center mx-auto my-auto'>
                we believe in empowering individuals to reach their fullest
                            potential through personalized coaching and comprehensive training programs.
                            Whether you are looking to improve your personal skills, advance your career,
                            or achieve your life goals, our system is designed to guide you every step
                            of the way.
            </p>
            <div className={`lg:flex-row lg:justify-around lg:items-center md:justify-center md:items-center flex
              flex-col md: lg:mx-[0] `}>
                <div className="bg-[#2C2B2E] text-white md:w-[500px] px-[20px]
                     flex flex-col justify-center items-center  mt-[40px] lg:mt-[0]">
                    <p className={`${styles.header} text-7xl py-[20px]`}>Training</p>
                    <p className='text-center py-[15px] px-[40px] text-xl'>
                        I cordially invite you to the training, the next training date is August 22, 2024</p>
                    <button onClick={()=>Navigate('/training')}
                        className='my-[20px] bg-white text-[#000000] px-[1vw] py-[0.6vw] rounded-[5px]'>
                        Sign up for training</button>
                </div>
                <div className="bg-[#756961] text-white md:w-[500px] px-[20px]
                     flex flex-col justify-center items-center mt-[40px] lg:mt-[0]">
                    <p className={`${styles.header} text-7xl py-[20px]`}>Coaching</p>
                    <p className='text-center py-[15px] px-[40px] text-xl'>
                        I cordially invite you for a consultation, call me and
                         we will arrange an appointment.</p>
                    <button onClick={()=>{Navigate('/coaching')}}
                    className='my-[20px] bg-white text-[#000000] px-[1vw] py-[0.6vw] rounded-[5px]'>
                    Individual meeting</button>
                </div>
            </div>
           <Footer />

        </div>
    )
}