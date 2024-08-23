import  Facebook from '../../assets/fb.svg';
import Insta from '../../assets/insta (3).png';
import Youtube from '../../assets/youtube.png';
import styles from '../../App.module.css';
export default function Footer(){
    return (
    <div className='text-center bg-gray-400 text-[#2C2B2E]  mt-[50px] lg:w-[100%]'>
        <div className='flex justify-between items-center'>
            <div>
                <p className='font-semibold'>Xpert View</p>
                <p className='font-semibold'>📞 +1234656780</p>
            </div>
            <div className='hidden md:flex'>
                <p className='font-semibold'>Coaching, support, training, development</p>
            </div>
            <div className={`flex mr-[2vw] ${styles.svg}`}>
                <a href="https://www.facebook.com">
                    <img className={'h-[30px] w-[30px]'} src={Facebook}
                                                        alt='fb'/></a>
                <a href="https://www.instagram.com">
                    <img className={'h-[30px] w-[30px]'} src={Insta}
                                                            alt="Ig"/></a>
                <a href="https://www.youtube.com">
                    <img className={'h-[30px] w-[30px]'} src={Youtube}
                                                        alt="Yb"/></a>
            </div>           
        </div>
        <div className='md:hidden font-semibold'>
            <p>Coaching, support, training, development</p>
        </div>
    </div>
    )
}