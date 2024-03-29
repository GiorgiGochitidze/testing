import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";



const Contactus1 = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="contact-us">
            <div data-aos="fade-up" className="contact-content">
                <h2 style={{textAlign: "center", wordBreak: "break-all"}}>Contact Us Here:</h2>
                <div className="contact-links">
                    <a href="https://mail.google.com/mail/u/0/#search/saorsageorgia%40gmail.com?compose=new" rel="noreferrer"><img src="../gmail-icon.png" alt="gmail icon" /></a>
                        <a href="https://www.facebook.com/SAORSAGEORGIA.GE" rel="noreferrer"><img src="../facebook-icon.png" alt="facebook icon" /></a>
                            <a href="https://bit.ly/3EOWdzc" rel="noreferrer"><img src="../linkedin-icon.png" alt="linkedin icon" /></a>
                        <a href="https://www.instagram.com/saorsageorgia/"><img src="../instagram-icon.png" alt="instagram icon" /></a>
                    <a href="https://twitter.com/prsaorsa" rel="noreferrer"><img src="../twitter-icon.png" alt="twitter icon" /></a>
                </div>
            </div>
        </div>
     );
}
 
export default Contactus1;