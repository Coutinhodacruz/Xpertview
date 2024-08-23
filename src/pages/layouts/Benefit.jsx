import pics from '../../assets/coach-london.jpeg'
import styles from '../../App.module.css'
export default function Benefit(){
    return (
        <div className={`bg-[#DDD5CE] flex flex-col justify-center items-center mt-[10px]`}>
            <p className={`${styles.benefit} text-2xl md:text-5xl font-bold text-center 
            py-[40px]`}>Benefit of Coaching</p>
            <div className={`flex flex-col justify-center items-center lg:flex lg:flex-row`}>
                <div  className={` flex flex-col justify-center items-cemter
                     px-[10px] font-thin text-sm lg:text-2xl mx-[15px]`}>
                    <p className={`text-[20px]`}>
                            Coaching offers transformative benefits by helping
                        individuals understand their strengths and areas for
                        improvement. It assists in setting and achieving clear goals,
                        boosting performance, and maintaining motivation. Coaching also 
                        supports skill development, problem-solving, and career advancement.
                    </p>    
                    <ul className={` list-disc px-[30px] ml-[10px] md:my-[5px] ${styles.listInner}`}>
                            <li>  
                                Coaching helps identify strengths
                                and weaknesses.
                            </li>
                            <li>  
                                Provides clarity and actionable plans.
                            </li>
                            <li>  
                                Offers support and accountability.
                            </li>
                            <li>  
                                Facilitates development of new skills.
                            </li>
                            <li>  
                                Assists in finding a harmonious work-life balance.
                            </li>
                    </ul>
                </div>
                <img src={pics} className={`w-[400px] h-[200px] lg:w-[800px] lg:h-[400px] rounded-[5px]`}alt="pics " />
            </div>
          
        </div>
    )
}