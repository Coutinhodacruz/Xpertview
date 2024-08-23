import Navbar from "../layouts/Navbar"
import faces from '../../assets/maind-training.webp'
import Footer from '../layouts/Footer'
import styles from '../../App.module.css'
import hands from '../../assets/How-to-get-rid-of-toxic-people.webp'
import TrainingText from "./TrainingText";
import FormText from "./FormText";

export default function Training(){
    const HeaderText= ()=>{
        return (
            <div className={`my-[5%]`}>
                <p className={`text-2xl ${styles.header} md:text-7xl md:my-[10px] text-center my-[20px]`}>
                    Sign up for Training
                </p>
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <div className="mt-[80px]">
                <p className={`${styles.header} font-semibold text-5xl mb-[30px]
                text-center lg:text-left lg:ml-[5vw]`}>assertiveness training</p>
                <p className={`px-[10px] sm:px-[50px] mb-[30px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className={`px-[10px] sm:px-[50px] mb-[40px]`}>
                    Here are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form,
                    by injected humour, or randomised words which don't 
                    look even slightly believable. If you are going to use a passage
                    of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary, making this
                    the first true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence structures,
                    to generate Lorem Ipsum which looks reasonable.
                </p>
                <p className='px-[10px] sm:p-[50px]'>
                    The generated Lorem Ipsum is therefore always free from repetition,
                    injected humour, or non-characteristic words etc.
                </p>
            </div>
            <div>
                <div className={`grid grid-rows-1 grid-cols-2 bg-[#756961] lg:h-[350px] h-[250px]`}>
                    <img src={hands} className={`order-2 h-[250px] w-[1fr] hidden
                     lg:flex lg:h-[350px] lg:w-[350px] lg:ml-[10px] overflow-hidden`} alt="" />
                    <p className={`text-white ${styles.header} lg:order-2 order-1 w-[1fr]
                     lg:w-[700px] lg:ml-[-200px] pt-[40px] sm:pt-[0]
                    lg:pt-[100px] sm:text-3xl  mt-[10%] lg:mt-0
                    text-xl lg:text-5xl p-[25px] text-center`}>
                        Feel new Energy, new Idea are a matter of time!</p>
                </div>
                <div className={`grid grid-cols-2 grid-rows-1 bg-[#A89A91] lg:h-[350px] h-[250px]`}>
                    <img src={faces} className={`order-1 lg:w-[900px] lg:order-2 lg:h-[350px]  hidden
                     lg:flex 
                         h-[250px] overflow-hidden`} alt="img" />
                    <p className={`order-2 text-white ${styles.header} lg:order-1  w-[300px] ml-[80%]
                        lg:w-3/4 lg:pt-[100px] sm:text-3xl text-xl lg:text-5xl lg:ml-[0] mt-[10%] lg:mt-0
                        p-[25px] text-center pt-[10vw] sm:pt-[0]`}>Overcome the obstacles Beat Yourself!</p>
                </div>
            </div>

            <div className="grid grid-cols-1 justify-center items-center
                 md:grid-cols-2 md:grid-rows-2 md:block lg:grid-rows-[50px-auto]">
                <div className='order-1 md:row-span-1 md:col-span-1 lg:order-2 col-span-1 '>
                    <HeaderText/>
                </div>
                <div className="order-2 sm:order-3 md:order-2 md:col-span-1 lg:order-3 lg:col-span-1">
                    <TrainingText/>
                </div>

                <div className={`order-3 sm:order-2 md:order-3 lg:order-1 lg:col-span-2 lg:row-span-1`}>
                    <FormText/>
                </div>
            </div>

            <div >
                <Footer/>
            </div>
        </div>
    )
}