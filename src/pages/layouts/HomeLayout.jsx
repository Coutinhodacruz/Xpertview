import Navbar from "./Navbar";
import styles from '../../App.module.css';
import laff from '../../assets/your-coach.jpeg';
import Benefit from "./Benefit";
import Choose from './Choose'
import {useNavigate} from "react-router-dom";
export default function Home() {
    const Navigate= useNavigate()
    const SmallAndMedium=()=>{
        return (
            <div className="flex flex-col justify-center items-center lg:hidden">
                <div className="grid grid-rows-2 grid-cols-2 " >
                    <img src={laff} className="w-[120px] rounded-[4px] order-1 ml-[30%]" alt="img"/>
                    <p className={`text-2xl order-2 text-center flex justify-center items-center mr-[20%]
                         ${styles.header} sm:text-6xl`}>
                        We can do more together
                    </p>
                    <p className='order-3 col-span-2 mx-[30px] sm:text-[20px] sm:mt-[2%]'>
                        At Xpert View, we believe in empowering individuals to reach their fullest
                        potential through personalized coaching and comprehensive training programs.
                        Whether you are looking to improve your personal skills, advance your career,
                        or achieve your life goals, our system is designed to guide you every step
                        of the way.
                    </p>
                    <div className='order-4 col-span-2 justify-center items-center flex '>
                        <button className={"border-2 px-2 hover:cursor-pointer"}
                                onClick={()=>{Navigate('/contact')}}>
                            Individual Consultation
                        </button>
                    </div>


                </div>
            </div>
        )
    }
    const LargeScreens=()=>{
        return (
            <div  className={`hidden lg:flex absolute mt-[720px] 
                            lg:justify-center lg:items-center`}>
                <img src={laff} className={`border-white border-[15px] h-[500px] w-[600px] 
                            shadow-2xl overflow-hidden hidden lg:flex`} alt="img" />
                <div className={`flex-col mx-[70px] h-[400px] w-[700px] 
                            grid grid-rows-3 grid-cols-1 ${styles.grid}`}>
                    <p className={`text-5xl ${styles.header} hidden lg:flex justify-center items-start`}>
                        We can do more together
                    </p>
                    <p className='text-lg font-md hidden lg:flex lg:text-start lg:mx-auto'>
                        At Xpert View, we believe in empowering individuals to reach their fullest
                        potential through personalized coaching and comprehensive training programs.
                        Whether you are looking to improve your personal skills, advance your career,
                        or achieve your life goals, our system is designed to guide you every step
                        of the way.
                    </p>

                    <button onClick={()=>{Navigate('/contact')}} className="hidden lg:flex w-[200px]
                              ml-[100px] border-2  justify-center items-center">
                        Individual Consultation</button>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col my-auto">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Navbar/>
                </div>
                <SmallAndMedium/>
                <LargeScreens/>
            </div>
            <div className={`flex justify-center items-center  lg:mt-[370px]`}>
                <Benefit/>
            </div>
            <Choose/>                  
        </div>
    );
}
