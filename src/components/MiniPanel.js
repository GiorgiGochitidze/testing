import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const MiniPanel = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="awards">
            <p data-aos="fade-right"><span>საორსას ღირებულებები</span></p>
            <p data-aos="fade-right"><span>წარმატების ისტორია</span></p>
            <p data-aos="fade-right"><span>ქალები</span></p>
            <p data-aos="flip-right"><span>ახალგაზრდები</span></p>
            <p data-aos="fade-left"><span>ბლოგი</span></p>
            <p data-aos="fade-left"><span>გახდი მოხალისე</span></p>
            <p data-aos="fade-left"><span>დონაცია</span></p>
        </div>
        );
}
 
export default MiniPanel;