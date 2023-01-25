import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Content = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div data-aos="fade-up" className="content-container">
            <img src='./img1.jpg' alt="Saorsas Banner"/>

            <div className="about-usin-main" data-aos="fade-up">
                <div className="text-container-for-text">
                    <div className="text-container-forabout">

                        <h1 style={{color: "#4a8b71", textAlign: "center", marginTop: "-180px"}}>ვინ ვართ ჩვენ?</h1>
                        <img style={{width: '200px', height: '200px', marginLeft: '-240px'}} src="../favicon.ico" alt="Soarsas Logo"/>

                    </div>
                    <div className="about-text">

                        <p>საორსა არის წევრობაზე დაფუძნებული<br /> არასამეწარმეო(არაკომერციული)<br /> იურიდიული პირი, რომელიც დაარსდა<br /> 2018 წლის 15 მარტს.
                        "საორსა" წევრობაზე<br /> დაფუძნებული სამოქალაქო საზოგადოების<br /> ორგანიზაციაა CSO და იმართება შემდეგი<br /> სტრუქტურების მეშვეობით:
                        საერთო კრება,<br /> სამეთვალყურეო საბჭო და<br /> აღმასრულებელი დირექტორი
                        </p>
                        
                        <Link to="/Proces"><button className="more-about-btn">ვრცლად</button></Link>
                    </div>
                </div>
                <video className="video-about-saorsa" src="../saorsashort.mp4" autoPlay loop controls />

            </div>
        </div>
     );
}
 
export default Content;