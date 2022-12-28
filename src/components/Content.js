import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Content = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div data-aos="fade-up" className="content-container">
            <img src='./img1.jpg' />

            <div className="about-usin-main">
                <video style={{width: '900px', margin: '0 auto'}} src="../saorsashort.mp4" autoPlay loop controls />
                <div className="text-container-forabout">
                    <h1 style={{color: "#4a8b71", textAlign: "center"}}>ვინ ვართ ჩვენ?</h1>
                    <img style={{width: '200px', height: '200px', marginLeft: '-215px'}} src="../favicon.ico" />
                    <p style={{marginLeft: '20px', marginTop: '100px'}}></p>
                </div>

            </div>
        </div>
     );
}
 
export default Content;