import { useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";



const News = () => {
    const [news, setNews] = useState(false)

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        
        <div className="news">
            <h1 data-aos="fade-down">Check out the news</h1>
            <div className="news-container">
            <div  data-aos="fade-right" className="news-content">
                <img src="./img9.jpg" />

                <h3>School of Entrepreneurship <br />and Leadership.</h3>
                <p>"School of entrepreneurs and leadership". Trainings are carried out within the framework of a social entrepreneur in the direction that implies Team leadership and team management.</p>
                <button onClick={() => setNews(true)}>see all →</button>
            </div>

            <div data-aos="flip-right" className="news-content">
                <img src="./img9.jpg" />

                <h3>School of Entrepreneurship  <br />and Leadership</h3>
                <p>"School of entrepreneurs and leadership". Trainings are carried out within the framework of a social entrepreneur in the direction that implies Team leadership and team management.</p>
                <button onClick={() => setNews(true)}>see all →</button>
            </div>

            <div data-aos="fade-left" className="news-content">
                <img src="./img9.jpg" />

                <h3>School of Entrepreneurship <br />and Leadership</h3>
                <p>"School of entrepreneurs and leadership". Trainings are carried out within the framework of a social entrepreneur in the direction that implies Team leadership and team management.</p>
                <button onClick={() => setNews(true)}>see all →</button>
            </div>
            </div>
            {news && 
                <div className="news-window">
                    <div  data-aos="fade-up" className="news-window-content">
                        <h3 style={{textAlign: "center"}}>School of Entrepreneurship and Leadership</h3>
                        <h4 style={{textAlign: "center"}}>Technical works are in progress...</h4>

                        <div className="circles">

                        </div>
                        <button onClick={() => setNews(false)} className="close-button">Close</button>
                    </div>
                </div>}
        </div>
     );
}
 
export default News;