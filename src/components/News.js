import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"


const News = ({Link}) => {
    const [news, setNews] = useState(false)

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        
        <div className="news">
            <h1 data-aos="fade-down">გაეცანით სიახლეებს</h1>
            <div className="news-container">
            <div data-aos="fade-right" className="news-content">
                <img src="./img9.jpg" />

                <h3>მეწარმოებისა და <br /> ლიდერობის სკოლა</h3>
                <p>,,მეწარმოებისა და ლიდერობის სკოლის"<br /> ფარგლებში ხორციელდება ტრენინგები <br /> სოციალური მეწარმოების<br /> მიმართულებით. რაც გულისხმობს<br /> ლიდერობას გუნდში და გუნდის მართვას.</p>
                <button onClick={() => setNews(true)}>სრულად ნახვა →</button>
            </div>

            <div data-aos="flip-right" className="news-content">
                <img src="./img9.jpg" />

                <h3>მეწარმოებისა და <br /> ლიდერობის სკოლა</h3>
                <p>,,მეწარმოებისა და ლიდერობის სკოლის"<br /> ფარგლებში ხორციელდება ტრენინგები <br /> სოციალური მეწარმოების<br /> მიმართულებით. რაც გულისხმობს<br /> ლიდერობას გუნდში და გუნდის მართვას.</p>
                <button onClick={() => setNews(true)}>სრულად ნახვა →</button>
            </div>

            <div data-aos="fade-left" className="news-content">
                <img src="./img9.jpg" />

                <h3>მეწარმოებისა და <br /> ლიდერობის სკოლა</h3>
                <p>,,მეწარმოებისა და ლიდერობის სკოლის"<br /> ფარგლებში ხორციელდება ტრენინგები <br /> სოციალური მეწარმოების<br /> მიმართულებით. რაც გულისხმობს<br /> ლიდერობას გუნდში და გუნდის მართვას.</p>
                <button onClick={() => setNews(true)}>სრულად ნახვა →</button>
            </div>
            </div>
                {news && 
                <div data-aos="fade-up" className="news-window">
                    <div className="news-window-content">
                        <h3 style={{textAlign: "center"}}>მეწარმოებისა და ლიდერობის სკოლა</h3>
                        <h4 style={{textAlign: "center"}}>მიმდინარეობს ტექნიკური სამუშაოები...</h4>

                        <div className="circles">

                        </div>
                        <button onClick={() => setNews(false)} className="close-button">გათიშვა</button>
                    </div>
                </div>}
        </div>
     );
}
 
export default News;