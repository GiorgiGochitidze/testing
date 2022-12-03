import { useState } from "react";


const News = ({Link}) => {
    const [news, setNews] = useState(false)

    return ( 
        
        <div className="news">
            <h1 >გაეცანით სიახლეებს</h1>
            <div className="news-container">
            <div className="news-content">
                <img src="./img9.jpg" />

                <h3>მეწარმოებისა და <br /> ლიდერობის სკოლა</h3>
                <p>,,მეწარმოებისა და ლიდერობის სკოლის"<br /> ფარგლებში ხორციელდება ტრენინგები <br /> სოციალური მეწარმოების<br /> მიმართულებით. რაც გულისხმობს<br /> ლიდერობას გუნდში და გუნდის მართვას.</p>
                <button onClick={() => setNews(true)}>სრულად ნახვა →</button>
            </div>

            <div  className="news-content">
                <img src="./img9.jpg" />

                <h3>მეწარმოებისა და <br /> ლიდერობის სკოლა</h3>
                <p>,,მეწარმოებისა და ლიდერობის სკოლის"<br /> ფარგლებში ხორციელდება ტრენინგები <br /> სოციალური მეწარმოების<br /> მიმართულებით. რაც გულისხმობს<br /> ლიდერობას გუნდში და გუნდის მართვას.</p>
                <button onClick={() => setNews(true)}>სრულად ნახვა →</button>
            </div>

            <div  className="news-content">
                <img src="./img9.jpg" />

                <h3>მეწარმოებისა და <br /> ლიდერობის სკოლა</h3>
                <p>,,მეწარმოებისა და ლიდერობის სკოლის"<br /> ფარგლებში ხორციელდება ტრენინგები <br /> სოციალური მეწარმოების<br /> მიმართულებით. რაც გულისხმობს<br /> ლიდერობას გუნდში და გუნდის მართვას.</p>
                <button onClick={() => setNews(true)}>სრულად ნახვა →</button>
            </div>
            </div>
                {news && 
                <div className="news-window">
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