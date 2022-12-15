import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'


const Totop = () => {

    useEffect(() => {
        AOS.init({duration: 500})
    })

    const up = () => {
        window.scrollTo(0, 0)
    }

    return ( 
        <div className="button-container">
            <button data-aos="fade-up" onClick={up} className="totop-button"><span>^</span></button>
        </div>
     );
}
 
export default Totop;