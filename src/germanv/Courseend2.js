import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Courseend = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="projects">
            <h1 data-aos="fade-down">Ein Absolvent von Saorsa</h1>

            <div className="sourses-projects">
                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img3.jpg" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> 
                    Ein Wort zum Projekt. wie viel<br /> zufrieden ist und so weiter.
                     <br /> <br /> <span style={{color: '#00afaf'}}>Vorname Nachname</span><br /><br /> Projektname Ort.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img4.jpg" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br />
                     Ein Wort zum Projekt. wie viel<br /> zufrieden ist und so weiter.
                      <br /> <br /> <span style={{color: '#00afaf'}}>Vorname Nachname</span><br /><br /> Projektname Ort.</p>
                    </div>
                </div>

                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img5.jpg" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br />
                     Ein Wort zum Projekt. wie viel<br /> zufrieden ist und so weiter.
                      <br /> <br /> <span style={{color: '#00afaf'}}>Vorname Nachname</span><br /><br />
                       Projektname Ort.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img6.jpg" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> 
                    Ein Wort zum Projekt. wie viel<br /> zufrieden ist und so weiter. <br /> <br /> <span style={{color: '#00afaf'}}>Vorname Nachname</span><br /><br />
                      Projektname Ort.</p>
                    </div>
                </div>

                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img7.jpg" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> Ein Wort zum Projekt. wie viel<br />
                     zufrieden ist und so weiter. <br /> <br /> <span style={{color: '#00afaf'}}>Vorname Nachname</span><br /><br />
                     Projektname Ort.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img8.jpg" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> Ein Wort zum Projekt. wie viel<br />
                     zufrieden ist und so weiter. <br /> <br /> <span style={{color: '#00afaf'}}>Vorname Nachname</span> <br /> <br />
                      Projektname Ort.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Courseend;