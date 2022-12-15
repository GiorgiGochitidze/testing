import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Content = ({Link}) => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div data-aos="fade-up" className="content-container">
            <img src='./img1.jpg' />

            <div className="list1" >
                <div data-aos="fade-down" className="first" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა</p></Link></div>
                <div data-aos="fade-down" className="second" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა<br /> კონსლტინგი</p></Link></div>
                <div data-aos="fade-down" className="third" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა ალუმნი</p></Link></div>
                <div data-aos="fade-down" className="fourth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა <br /> რეგიონალური ასოციაცია</p></Link></div>
                <div data-aos="fade-down" className="fifth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა  პოლონეთის<br /> ასოციაცია</p></Link></div>
                <div data-aos="fade-up" className="sixth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა<br /> შუახევი</p></Link></div>
                <div data-aos="fade-up" className="seventh" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა<br /> წალენჯიხა</p></Link></div>
                <div data-aos="fade-up" className="eighth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსას<br /> საქველმოქმედო ფონდი</p></Link></div>
                <div data-aos="fade-up" className="nineth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საქართველოს<br /> მშრომელ ქალთა გაერთიანება</p></Link></div>
                <div data-aos="fade-up" className="tenth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>სერვისები/<br /> ტრენინგები/<br /> პროგრამები </p></Link></div>
            </div>
        </div>
     );
}
 
export default Content;