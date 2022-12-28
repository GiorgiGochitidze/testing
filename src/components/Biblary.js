import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';


const Biblary = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

     return ( 
         <div className="library-container">
            <video data-aos="fade-right" className="videos zeda" src="../videobib.mp4" autoPlay loop controls/>
            <video data-aos="fade-left" className="videos sashualo" src="../videobib.mp4" autoPlay loop controls/>
            <video data-aos="fade-right" className="videos sashualo" src="../videobib.mp4" autoPlay loop controls/>
            <video data-aos="fade-left"className="videos sashualo" src="../videobib.mp4" autoPlay loop controls/>
            <video data-aos="fade-right" className="videos sashualo" src="../videobib.mp4" autoPlay loop controls/>
         </div>
     );

}
 
export default Biblary;