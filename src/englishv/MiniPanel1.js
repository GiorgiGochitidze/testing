import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";




const MiniPanel1 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="awards">
            <p data-aos="fade-right"><span>Saorsa values</span></p>
            <p data-aos="fade-right"><span>A success story</span></p>
            <p data-aos="fade-right"><span>Womens</span></p>
            <p data-aos="flip-right"><span>Youth</span></p>
            <p data-aos="fade-left"><span>Blog</span></p>
            <p data-aos="fade-left"><span>Become a volunteer</span></p>
            <p data-aos="fade-left"><span>Donation</span></p>
        </div>
     );
}
 
export default MiniPanel1;