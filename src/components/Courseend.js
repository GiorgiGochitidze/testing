import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Courseend = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="projects">
            <h1 data-aos="fade-down">საორსას კურსდამთავრებული</h1>

            <div className="sourses-projects">
                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img3.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>რამე ტექსტი. ალბათ მონაწილის მოკლე<br /> 
                    სიტყვა პროექტის შესახებ. რამდენად<br /> კმაყოფილია და ასე შემდეგ.
                     <br /> <br /> <span style={{color: '#00afaf'}}>სახელი გვარი</span><br /><br /> პროექტის დასახელება ლოკაცია.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img4.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>რამე ტექსტი. ალბათ მონაწილის მოკლე<br />
                     სიტყვა პროექტის შესახებ. რამდენად<br /> კმაყოფილია და ასე შემდეგ.
                      <br /> <br /> <span style={{color: '#00afaf'}}>სახელი გვარი</span><br /><br /> პროექტის დასახელება ლოკაცია.</p>
                    </div>
                </div>

                <div data-aos="fade-right" className="inside-projects">
                    <img src="./img5.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>რამე ტექსტი. ალბათ მონაწილის მოკლე<br />
                     სიტყვა პროექტის შესახებ. რამდენად<br /> კმაყოფილია და ასე შემდეგ.
                      <br /> <br /> <span style={{color: '#00afaf'}}>სახელი გვარი</span><br /><br />
                       პროექტის დასახელება ლოკაცია.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img6.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>რამე ტექსტი. ალბათ მონაწილის მოკლე<br /> სიტყვა პროექტის შესახებ.
                     რამდენად<br /> კმაყოფილია და ასე შემდეგ. <br /> <br /> <span style={{color: '#00afaf'}}>სახელი გვარი</span><br /><br />
                      პროექტის დასახელება ლოკაცია.</p>
                    </div>
                </div>

                <div data-aos="fade-right" className="inside-projects">
                    <img alt="" src="./img7.jpg" />
                    <div>
                    <p style={{marginLeft: '20px'}}>რამე ტექსტი. ალბათ მონაწილის მოკლე<br /> სიტყვა პროექტის შესახებ. რამდენად<br />
                     კმაყოფილია და ასე შემდეგ. <br /> <br /> <span style={{color: '#00afaf'}}>სახელი გვარი</span><br /><br />
                     პროექტის დასახელება ლოკაცია.</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="inside-projects">
                    <img src="./img8.jpg" alt="" />
                    <div>
                    <p style={{marginLeft: '20px'}}>რამე ტექსტი. ალბათ მონაწილის მოკლე<br /> სიტყვა პროექტის შესახებ. რამდენად<br />
                     კმაყოფილია და ასე შემდეგ. <br /> <br /> <span style={{color: '#00afaf'}}>სახელი გვარი</span> <br /> <br />
                      პროექტის დასახელება ლოკაცია.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Courseend;