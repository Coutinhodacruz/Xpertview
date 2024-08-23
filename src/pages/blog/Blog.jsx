import image1 from '../../assets/coach-london-lu2e1ji6.webp'
import image2 from '../../assets/comfort-zone-lu2e1jy2.webp'
import image3 from '../../assets/dont-want-more-lu2e1jp8.webp'
import Navbar from "../layouts/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../layouts/Footer";
import {Icon} from "@iconify/react";




export default function Blog(){
    const imagesArray=[image1, image2, image3]
    const textArray = [
        'Life is very Short',
        'If you are limited by your comfort Zone',
        `How to deal "I dont feel like it"`
    ]
    const Date = [
        '16 August 2021','10 July 2024','16 August 2021'
    ]
    const Directions = [
        '/short','/comfort','/deal'
    ]
    const Navigate = useNavigate()
    const Content=()=>{
        return  imagesArray.map((image,index)=>(
                <div className={'flex flex-col justify-center items-center' +
                    ' lg:flex-row my-[20px] mx-[30px] lg:w-[95%]'}>
                    <img src={image}
                         className="object-contain w-[300px] h-[200px]
                         md:w-[400px] md:h-[300px] __zoom-enter"
                         alt="Blog"
                    />
                    <div className={'mx-[10%] justify-center items-start flex flex-col'}>
                        <p className={`text-xl text-neutral-950 font-bold`}>{textArray[index]}</p>
                        <p className={'font-thin text-sm text-neutral-700'}>{Date[index]}</p>
                        <p className={'mt-[10px]'}>
                            What is Lorem Ipsum?
                            <br/>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when
                        </p>
                        <button onClick={()=>Navigate(Directions[index])}
                                className={'hover:pointer flex mt-[5%]'}>
                            Read More
                            <Icon icon="ph:arrow-right-thin" width="1.2rem"
                                  height="1.2rem" className={'mt-1'} />
                        </button>
                    </div>
                </div>
                )
        );
    };

    return (
        <div>
            <Navbar/>
            {Content()}
            <Footer/>

        </div>
    )
}