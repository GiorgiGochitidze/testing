import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Content1 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="content-container">
             <img src='./img1.jpg' alt="" />
            <div className="list1">
                <div data-aos="fade-down" className="first" style={{textAlign: 'center'}}><p>Saorsa</p></div>
                <div data-aos="fade-down" className="second" style={{textAlign: 'center'}}><p>Saorsa<br /> Beratung</p></div>
                <div data-aos="fade-down" className="third" style={{textAlign: 'center'}}><p>Saorsa Ehemalige</p></div>
                <div data-aos="fade-down" className="fourth" style={{textAlign: 'center'}}><p>Saorsas <br /> Regionalverband</p></div>
                <div data-aos="fade-down" className="fifth" style={{textAlign: 'center'}}><p>Saorsas Polen<br /> Verband</p></div>
                <div data-aos="fade-up" className="sixth" style={{textAlign: 'center'}}><p>Saorsas<br /> Shuakhevi</p></div>
                <div data-aos="fade-up" className="seventh" style={{textAlign: 'center'}}><p>Saorsa<br /> Tsalenjikha</p></div>
                <div data-aos="fade-up" className="eighth" style={{textAlign: 'center'}}><p>Saorsas<br /> Gemeinnützige Stiftung</p></div>
                <div data-aos="fade-up" className="nineth" style={{textAlign: 'center'}}><p>Georgisch<br /> Gewerkschaft der berufstätigen Frauen</p></div>
                <div data-aos="fade-up" className="tenth" style={{textAlign: 'center'}}><p>Dienstleistungen/<br /> Schulungen/<br /> Programme</p></div>
            </div>
        </div>
     );
}
 
export default Content1;