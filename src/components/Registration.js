import { Link } from "react-router-dom";



const Registration = () => {
    return ( 
        <div className="registration-container">
            <div className="registers">
                <div className="register-form">

                    <h1 style={{textAlign: "center", color: "white"}}>Registration Form</h1>

                    <div className="names-container">
                        <input className="name" type="text" title="Name" placeholder="Name"/>
                    </div>

                    <div style={{color: "white"}} className="surname-container">
                        <input className="surname" type="text" title="Last Name" placeholder="Last Name"/>
                    </div>

                    <div className="password-container">  
                        <input className="passwords" title="Password" type="password" placeholder="Password"/>
                    </div>

                    <div className="gender-container">
                        <div className="male">
                            <label style={{color: "white"}}>Male</label>
                            <input type={"radio"}  name="shipping"/>
                        </div>

                        <div className="famale">
                        <label style={{color: "white"}}>FaMale</label>
                        <input type="radio" name="shipping" />
                        </div>
                    </div>


                <div className="others">
                    <button style={{marginBottom: "5px"}} className="login-button">Register</button>
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
 
export default Registration;