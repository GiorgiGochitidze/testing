import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Biblary1 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="library-container">
           <video data-aos="fade-right" className="videos zeda" src="../videobib.mp4" autoPlay loop muted/>
           <video data-aos="fade-right" className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
           <video className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
           <video className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
           <video className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
        </div>
    );

}

export default Biblary1;