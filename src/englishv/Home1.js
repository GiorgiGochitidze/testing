import '../Home.css'
import MiniPanel1 from './MiniPanel1';
import Projects1 from './Projects1';
import Courseend1 from './Courseend1';
import News1 from './News1';
import Footer1 from './Footer1';
import Content1 from './Content1';

const Home = () => {

    return (
        <div className='container1'>

        <Content1 />

        <MiniPanel1 />

        <Projects1 />

        <Courseend1 />

        <News1 />

        <Footer1 />
        </div>
     );
}
 
export default Home;