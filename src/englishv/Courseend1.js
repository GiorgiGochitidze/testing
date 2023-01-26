import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Courseend = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="projects">
            <h1 data-aos="fade-down">A graduate of Saorsa</h1>

            <div className="sourses-projects">
                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img3.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> 
                    A word about the project. how much<br /> is satisfied and so on.
                     <br /> <br /> <span style={{color: '#00afaf'}}>Name Surname</span><br /><br /> Project Name Location.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img4.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br />
                     A word about the project. how much<br /> is satisfied and so on.
                      <br /> <br /> <span style={{color: '#00afaf'}}>Name Surname</span><br /><br /> Project Name Location.</p>
                    </div>
                </div>

                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img5.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br />
                     A word about the project. how much<br /> is satisfied and so on.
                      <br /> <br /> <span style={{color: '#00afaf'}}>Name Surname</span><br /><br />
                       Project Name Location.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img6.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> 
                    A word about the project. how much<br /> is satisfied and so on. <br /> <br /> <span style={{color: '#00afaf'}}>Name Surname</span><br /><br />
                      Project Name Location.</p>
                    </div>
                </div>

                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img7.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> A word about the project. how much<br />
                     is satisfied and so on. <br /> <br /> <span style={{color: '#00afaf'}}>Name Surname</span><br /><br />
                     Project Name Location.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img8.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>some text Perhaps the participant's short<br /> A word about the project. how much<br />
                     is satisfied and so on. <br /> <br /> <span style={{color: '#00afaf'}}>Name Surname</span> <br /> <br />
                      Project Name Location.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Courseend;