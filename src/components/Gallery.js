import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Gallery = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="gallery-container">
            <div className="gallery-content">
                <img data-aos="fade-up" className="hundred-to-ten" src="../img3.jpg"/>
                    <img data-aos="fade-up" className="twohundred-to-thirty" src="../img4.jpg"/>
                    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        <img data-aos="fade-up" className="cubes" src="../img5.jpg"/>
                        <img data-aos="fade-up" className="cubes" src="../img6.jpg"/>
                    </div>
                <img data-aos="fade-up" className="threehundred" src="../img7.jpg"/>
                <img data-aos="fade-up" className="looks-like-first" src="../img8.jpg"/>
            </div>
        </div>
     );
}
 
export default Gallery;