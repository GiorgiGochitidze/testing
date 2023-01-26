import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Content1 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div data-aos="fade-up" className="content-container">
             <img alt="" src='./img1.jpg' />
            <div className="list1">
                <div data-aos="fade-down" className="first" style={{textAlign: 'center'}}><p>Saorsa</p></div>
                <div data-aos="fade-down" className="second" style={{textAlign: 'center'}}><p>Saorsa<br /> Consulting</p></div>
                <div data-aos="fade-down" className="third" style={{textAlign: 'center'}}><p>Saorsa Alumni</p></div>
                <div data-aos="fade-down" className="fourth" style={{textAlign: 'center'}}><p>Saorsas <br /> Regional association</p></div>
                <div data-aos="fade-down" className="fifth" style={{textAlign: 'center'}}><p>Saorsas  Poland<br /> Association</p></div>
                <div data-aos="fade-up" className="sixth" style={{textAlign: 'center'}}><p>Saorsas<br /> Shuakhevi</p></div>
                <div data-aos="fade-up" className="seventh" style={{textAlign: 'center'}}><p>Saorsa<br /> Tsalenjikha</p></div>
                <div data-aos="fade-up" className="eighth" style={{textAlign: 'center'}}><p>Saorsas<br /> Charitable Foundation</p></div>
                <div data-aos="fade-up" className="nineth" style={{textAlign: 'center'}}><p>Georgian<br /> Union of working women</p></div>
                <div data-aos="fade-up" className="tenth" style={{textAlign: 'center'}}><p>Services/<br /> Trainings/<br /> Programs </p></div>
            </div>
        </div>
     );
}
 
export default Content1;