import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Partners1 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="partners-container">
            <div className="donors-container">
            <h1 data-aos="fade-down">Our Donors & Partners</h1>
            <div className="grids">
                <div data-aos="fade-right" className="donors">
                    <img src="../img15.webp"/>
                    <p>Google is one of our sponsors</p>
                </div>

                <div data-aos="fade-left" className="donors">
                    <img src="../img15.webp"/>
                    <p>Google is one of our sponsors</p>
                </div>

                <div data-aos="fade-right" className="donors">
                    <img src="../img15.webp"/>
                    <p>Google is one of our sponsors</p>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Partners1;