import styles from '../../App.module.css';
import {useState} from 'react';
import Hamburger from 'hamburger-react';
import  Facebook from '../../assets/fb.svg'
import Insta from '../../assets/insta (3).png'
import Youtube from '../../assets/youtube.png'
import image from '../../assets/background-white.jpeg'
import {useNavigate} from "react-router-dom";
const Navbar = () => {
    const Navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`justify-center items-center`}>
            <div className={`shadow-md justify-center items-center`}>
                <div className='flex justify-between items-center p-4  bg-white'>
                    <div className='flex flex-col justify-center align-center max-h-[120px] ml-[20px]'>
                        <p className={`${styles.headerText} lg:font-bold sm:text-sm lg:text-lg  xl:text-2xl`}>Xpert View</p>
                        <p className='font-semibold sm:text-sm lg:text-[14px] xl:text-2xl'>Life Coach</p>
                    </div>
                    <div className='flex flex-col mr-[20px]'>
                        <div className={`flex justify-end mr-[2vw] ${styles.svg}`}>
                            <a href="https://www.facebook.com"><img className={'h-[30px] w-[30px]'} src={Facebook}
                                                                    alt='fb'/></a>
                            <a href="https://www.instagram.com"><img className={'h-[30px] w-[30px]'} src={Insta}
                                                                     alt="Ig"/></a>
                            <a href="https://www.youtube.com"><img className={'h-[30px] w-[30px]'} src={Youtube}
                                                                   alt="Yb"/></a>
                        </div>
                        <div className={'flex justify-end md:hidden'}>
                            <Hamburger toggle={setMenuOpen} toggled={menuOpen}
                                       onClick={() => setMenuOpen(!menuOpen)}/>
                        </div>
                        <div className='hidden md:flex space-x-6 text-lg'>
                            <li className='list-none hover:text-gray-600 cursor-pointer' onClick={()=>{Navigate('/home')}}>Home</li>
                            <li className='list-none hover:text-gray-600 cursor-pointer' onClick={()=>{Navigate('/training')}}>Training</li>
                            <li className='list-none hover:text-gray-600 cursor-pointer' onClick={()=>{Navigate('/coaching')}}>Coaching</li>
                            <li className='list-none hover:text-gray-600 cursor-pointer' onClick={()=>{Navigate('/blog')}}>Blog</li>
                            <li className='list-none hover:text-gray-600 cursor-pointer' onClick={()=>{Navigate('/contact')}}>Contact</li>
                        </div>
                    </div>
                    {menuOpen && (
                        <>
                            <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10' onClick={handleMenuToggle}></div>
                                <ul className='fixed top-1 left-0 w-40 bg-gray-200 shadow-md text-lg z-20'>
                                    <li className='list-none hover:bg-gray-600 hover:text-white cursor-pointer' onClick={()=>{Navigate('/home')}}>Home</li>
                                    <li className='list-none hover:bg-gray-600 hover:text-white cursor-pointer' onClick={()=>{Navigate('/training')}}>Training</li>
                                    <li className='list-none hover:bg-gray-600 hover:text-white cursor-pointer' onClick={()=>{Navigate('/coaching')}}>Coaching</li>
                                    <li className='list-none hover:bg-gray-600 hover:text-white cursor-pointer' onClick={()=>{Navigate('/blog')}}>Blog</li>
                                    <li className='list-none hover:bg-gray-600 hover:text-white cursor-pointer' onClick={()=>{Navigate('/contact')}}>Contact</li>
                                </ul>
                        </>
                    )}
                </div>
            </div>
            <div className={`relative inline-block h-[200px] sm:h-[260px] md:h-[350px] lg:h-[400px] overflow-hidden`}>
                <img src={image} alt="img"/>
                <div className={`absolute inset-0 flex flex-col items-center justify-center mt-[-60px]`}>
                    <p className={`${styles.headerText} font-bold`}>Xpert View</p>
                    <p className='font-semibold text-lg '>Life Coach</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;