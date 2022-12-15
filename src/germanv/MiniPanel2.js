import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const MiniPanel1 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="awards">
            <p data-aos="fade-right"><span>Saorsa-Werte</span></p>
            <p data-aos="fade-right"><span>Eine Erfolgsgeschichte</span></p>
            <p data-aos="fade-right"><span>Damen</span></p>
            <p data-aos="flip-right"><span>Jugend</span></p>
            <p data-aos="fade-left"><span>Bloggen</span></p>
            <p data-aos="fade-left"><span>Werden Sie Freiwilliger</span></p>
            <p data-aos="fade-left"><span>Spende</span></p>
        </div>
     );
}
 
export default MiniPanel1;