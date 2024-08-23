import Navbar from "../layouts/Navbar";
import Consultation from "./Consulation";
import BenefitCoaching from "./BenefitCoaching";
import DateChoosing from "./DateChoosing";
import Footer from "../layouts/Footer";

export default function Coaching(){
    return (
        <div>
            <Navbar/>
            <Consultation/>
            <BenefitCoaching/>
            <DateChoosing/>
            <Footer/>
        </div>
    )
}