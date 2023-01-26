import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react";


const Registration = ({Link}) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    function handleNameChange(e) {
        setName(e.target.value);
      }
    
      function handleSurnameChange(e) {
        setSurname(e.target.value);
      }
    
      function handlePasswordChange(e) {
        setPassword(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        // save the values to a database or API here
      }
    
      function handleGenderChange(e) {
        setGender(e.target.value);
      }

    return ( 
        <div className="registration-container">
            <div data-aos="fade-up" className="registers">
                <div className="register-form">

                    <h1 style={{textAlign: "center", color: "white"}}>რეგისტრაცია</h1>

                    <div className="names-container">
                        <input className="name" type="text" title="სახელი" value={name} placeholder="სახელი" onChange={handleNameChange} />
                    </div>

                    <div style={{color: "white"}} className="surname-container">
                        <input className="surname" type="text" title="გვარი" value={surname} placeholder="გვარი" onChange={handleSurnameChange} />
                    </div>

                    <div className="password-container">  
                        <input className="passwords" title="პაროლი" type="password" value={password} placeholder="პაროლი" onChange={handlePasswordChange} />
                    </div>

                    <div className="gender-container">
                        <div className="male">
                            <label style={{color: "white"}}>კაცი</label>
                            <input type="radio"
                                   name="gender"
                                   value="male"
                                   checked={gender === 'male'}
                                   onChange={handleGenderChange}/>
                        </div>

                        <div className="famale">
                        <label style={{color: "white"}}>ქალი</label>
                        <input type="radio"
                               name="gender"
                               value="female"
                               checked={gender === 'female'}
                               onChange={handleGenderChange} />
                        </div>
                    </div>


                <div className="others">
                    <button style={{marginBottom: "5px"}} className="login-button" onSubmit={handleSubmit}>რეგისტრაცია</button>
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