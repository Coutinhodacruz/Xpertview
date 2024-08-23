import  styles from '../../App.module.css'
import coach from '../../assets/coach.jpeg'
import {useNavigate} from "react-router-dom";
export default function Consultation(){
    const Navigate=useNavigate()
    const Paragraph=()=>{
        return <p className={'sm:mx-[20px] md:mx-0 md:font-thin md:text-md ' +
            ' lg:font-thin lg:text-2xl md:my-auto'}>
            Our consultation process is designed to be straightforward
            and user-friendly. Once you initiate a consultation request,
            you’ll be guided through a series of steps to provide necessary details.
            You'll then be matched with a consultant who specializes
            in your area of interest. <br/> The consultation can take place
            via video call, phone, or chat, depending on your preference.
            Throughout the consultation, you’ll have the opportunity
            to discuss your needs, ask questions,
            and receive personalized advice.
        </p>
    }
    const Display =()=>{
        return (
            <div className={'flex flex-col justify-center items-center h-full my-5'}>
                <p className={`text-center text-2xl ${styles.benefit} font-thin my-3`}>
                    What Does Consultation look like?</p>
                <button  onClick={()=>{Navigate('/contact')}}
                    className={'px-5 font-thin my-3 border-neutral-950 border'} >Sign up for a consultation</button>
                <img src={coach} className={'order-3 overflow-hidden w-[80vw] sm:w-[70vw] ' +
                    'sm:my-auto h-[100vw] sm:h-[300px] mx-auto '} alt="coach"/>
                <div className={'font-thin text-sm my-5 md:justify-center items-center'}><Paragraph/></div>
            </div>
        )
    }
    const Large=()=>{
        return (
            <div className={`grid grid-rows-2 grid-cols-2 lg:max-w-[1915px] mt-[60px] ${styles.large}`}>
                <p className={`text-center text-5xl ${styles.benefit} pt-[5%] 
                 mx-[15%] order-1 lg:text-4xl col-span-2 row-span-1 lg:order-2
                  lg:col-span-1`}>
                    What Does Consultation look like?</p>
                <img src={coach}
                     className={`order-2 lg:order-1 lg:col-span-1 lg:row-span-2 overflow-hidden w-[85%] h-[80%]
                     my-auto`} alt="coach"/>
                <div className={'order-3 justify-center items-center md:mx-[20px] md:my-auto'}>
                    <div className={' mt-3'}>
                        <Paragraph/>
                    </div>
                    <button onClick={()=>{Navigate('/contact')}}
                        className={'px-5 py-[4px] lg:my-[5%] text-thin border-neutral-950 border hover:animate-pulse'}>
                        Sign up for a consultation</button>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className={'md:hidden'}>
                <Display/>
            </div>
            <div className={'hidden md:flex'}>
                <Large/>
            </div>
        </div>
    )
}