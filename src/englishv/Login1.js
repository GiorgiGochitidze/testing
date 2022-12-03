import { Link } from "react-router-dom";

const Login1 = () => {
    return ( 
        <div className="login-container">
        <div className="logins">
            <div className="login-form">

                <h1 style={{textAlign: "center", color: "white"}}>LogIn Form</h1>

                    <div className="animations-containers">

                <div className="names-container">
                    <input className="name" type="text" title="სახელის გრაფა" placeholder="Name"/>
                </div>

                <div style={{color: "white"}} className="surname-container">
                    <input className="surname" type="text" title="გვარის გრაფა" placeholder="Last Name"/>
                </div>

                <div className="password-container">  
                    <input className="passwords" title="პაროლის გრაფა" type="password" placeholder="Password"/>
                </div>
                    </div>

            <div className="others">
                <button style={{marginBottom: "5px"}} className="login-button">LogIn</button>
                <p style={{marginTop: "0"}}>Dont Have Account?</p>
                <Link style={{marginTop: "-30px", marginBottom: "-30px", textDecoration: "none", color: "white"}} to="/Proces"><p className="registration-link">Register</p></Link>
            </div>

            </div>


        {/* <div className="registers">

        </div> */}


        </div>

    </div>
     );
}
 
export default Login1;