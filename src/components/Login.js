import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Login = ({Link}) => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="login-container">
            <div data-aos="fade-up" className="logins">
                <div className="login-form">

                    <h1  style={{textAlign: "center", color: "white"}}>შესვლა</h1>

                        <div className="animations-containers">

                    <div className="names-container">
                        <input className="name" type="text" title="სახელის გრაფა" placeholder="სახელი"/>
                    </div>

                    <div style={{color: "white"}} className="surname-container">
                        <input className="surname" type="text" title="გვარის გრაფა" placeholder="გვარი"/>
                    </div>

                    <div className="password-container">  
                        <input className="passwords" title="პაროლის გრაფა" type="password" placeholder="პაროლი"/>
                    </div>
                        </div>

                <div className="others">
                    <button style={{marginBottom: "5px"}} className="login-button">შესვლა</button>
                    <p style={{marginTop: "0"}}>არ გაქვს აკაუნტი?</p>
                    <Link style={{marginTop: "-30px", marginBottom: "-30px", textDecoration: "none", color: "white"}} to="/Proces"><p className="registration-link">რეგისტრაცია</p></Link>
                </div>

                </div>


            {/* <div className="registers">

            </div> */}


            </div>

        </div>
     );
}
 
export default Login;