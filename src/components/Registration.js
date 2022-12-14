import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Registration = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="registration-container">
            <div data-aos="fade-up" className="registers">
                <div className="register-form">

                    <h1 style={{textAlign: "center", color: "white"}}>რეგისტრაცია</h1>

                    <div className="names-container">
                        <input className="name" type="text" title="სახელი" placeholder="სახელი"/>
                    </div>

                    <div style={{color: "white"}} className="surname-container">
                        <input className="surname" type="text" title="გვარი" placeholder="გვარი"/>
                    </div>

                    <div className="password-container">  
                        <input className="passwords" title="პაროლი" type="password" placeholder="პაროლი"/>
                    </div>

                    <div className="gender-container">
                        <div className="male">
                            <label style={{color: "white"}}>კაცი</label>
                            <input type={"radio"}  name="shipping"/>
                        </div>

                        <div className="famale">
                        <label style={{color: "white"}}>ქალი</label>
                        <input type="radio" name="shipping" />
                        </div>
                    </div>


                <div className="others">
                    <button style={{marginBottom: "5px"}} className="login-button">რეგისტრაცია</button>
                    <p style={{marginTop: "0"}}>გაქვს უკვე აკაუნტი?</p>
                    <Link style={{marginTop: "-30px", marginBottom: "-30px", textDecoration: "none", color: "white"}} to="/Login"><p className="registration-link">შესვლა</p></Link>
                </div>

                </div>


            {/* <div className="registers">

            </div> */}


            </div>

        </div>
     );
}
 
export default Registration;