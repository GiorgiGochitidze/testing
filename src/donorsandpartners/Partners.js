import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";



const Partners = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="partners-container">
            <div className="donors-container">
            <h1 data-aos="fade-down">ჩვენი პარტნიორები & დონორები</h1>
                <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                    <img style={{width: '60px', height: '60px'}} src="../github-icon.png" alt="github partner" title="github is our partner" />
                    <img style={{width: '60px', height: '60px'}} src="../linkedin-icon.png" alt="github partner" title="linkedin is our partner" />
                    <img style={{width: '60px', height: '60px'}} src="../linkedin-icon.png" alt="github partner" title="linkedin is our partner" />
                    <img style={{width: '60px', height: '60px'}} src="../linkedin-icon.png" alt="github partner" title="linkedin is our partner" />
                </div>
            </div>
        </div>
     );
}
 
export default Partners;