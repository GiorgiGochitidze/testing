import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const News = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        
        <div className="news">
            <h1 data-aos="fade-down">Sehen Sie sich die Nachrichten an</h1>
            <div className="news-container">
            <div data-aos="fade-right" className="news-content">
                <img src="./img9.jpg" />

                <h3>Schule für Unternehmertum <br /> und Führung.</h3>
                <p>"Schule der Unternehmer und Führung". Im Rahmen eines Social Entrepreneurs werden Trainings in Richtung Teamführung und Teammanagement durchgeführt.</p>
                <button>see all →</button>
            </div>

            <div data-aos="flip-right" className="news-content">
                <img src="./img9.jpg" />

                <h3>Schule für Unternehmertum <br /> und Führung.</h3>
                <p>"Schule der Unternehmer und Führung". Im Rahmen eines Social Entrepreneurs werden Trainings in Richtung Teamführung und Teammanagement durchgeführt.</p>
                <button>see all →</button>
            </div>

            <div data-aos="fade-left" className="news-content">
                <img src="./img9.jpg" />

                <h3>Schule für Unternehmertum <br /> und Führung.</h3>
                <p>"Schule der Unternehmer und Führung". Im Rahmen eines Social Entrepreneurs werden Trainings in Richtung Teamführung und Teammanagement durchgeführt.</p>
                <button>see all →</button>
            </div>
            </div>
        </div>
     );
}
 
export default News;