import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";



const Biblary2 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="library-container">
           <video className="videos zeda" src="../videobib.mp4" autoPlay loop muted/>
           <video className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
           <video className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
           <video className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
           <video className="videos sashualo" src="../videobib.mp4" autoPlay loop muted/>
        </div>
    );

}

export default Biblary2;