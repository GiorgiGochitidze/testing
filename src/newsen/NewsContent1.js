import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const NewsContent = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="news-contents">
            <h1 data-aos="fade-down" style={{textAlign: 'center'}}>Saorsa News</h1>

        <div className="news-dayofa">
            <div data-aos="flip-right" className="addnews">
                <img src="../img15.webp" alt="arvici raaris"/>
                <p>dshfdsghfioihdsiupdufudijohgvtyftvgyhujiko0iugfcdrftgyuhjiko</p>
            </div>

            <div data-aos="flip-right" className="addnews">
                <img src="../img15.webp" alt="arvici raaris"/>
                <p>dshfdsghfioihdsiupdufudijohgvtyftvgyhujiko0iugfcdrftgyuhjiko</p>
            </div>

            <div data-aos="flip-right" className="addnews">
                <img src="../img15.webp" alt="arvici raaris"/>
                <p>dshfdsghfioihdsiupdufudijohgvtyftvgyhujiko0iugfcdrftgyuhjiko</p>
            </div>
        </div>
        </div>
     );
}
 
export default NewsContent;