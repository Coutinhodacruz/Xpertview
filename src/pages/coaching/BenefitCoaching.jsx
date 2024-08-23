import styles from '../../App.module.css'
import {Icon} from "@iconify/react";
export default function BenefitCoaching(){
    return (
        <div className={`bg-[#DDD5CE] flex flex-col py-[30px] justify-center items-center ${styles.lists}`}>
            <p>Benefit of Coaching</p>
            <ul className={"lg:grid flex flex-col lg:grid-rows-3 lg:grid-cols-2 mx-[10%] lg:mx-[3%]"}>
                <li className={'lg:order-1'} >
                    <Icon icon="fluent-mdl2:chevron-down-small" width="60px" height="60px" />
                    <p>Building better relationships with the environment.
                        <br/>Building self-awareness</p>
                </li>
                <li className={'lg:order-2'}>
                    <Icon icon="fluent-mdl2:chevron-down-small" width="60px" height="60px" />
                    <p>
                        Formulating your goals and plans
                       <br/> Goal achievement plan
                    </p>
                </li >
                <li className={'lg:order-3'}>
                    <Icon icon="fluent-mdl2:chevron-down-small" width="60px" height="60px" />
                    <p>
                        Coping with problems
                        Overcoming fear, aversion, weakness
                    </p>
                </li>
                <li className={'lg:order-4'}>
                    <Icon icon="fluent-mdl2:chevron-down-small" width="60px" height="60px" />
                    <p>
                        Change of habits and habits
                        More time for you
                    </p>
                </li>
                <li className={'lg:order-5'}>
                    <Icon icon="fluent-mdl2:chevron-down-small" width="60px" height="60px" />
                    <p>
                        Raising your own self-esteem
                        Self-confidence
                    </p>
                </li>
                <li className={'lg:order-6'}>
                    <Icon icon="fluent-mdl2:chevron-down-small" width="60px" height="60px" />
                    <p>
                        Analysis of your skills and character <br/>
                        Finding your dream job
                    </p>
                </li>
            </ul>
        </div>
    )
}