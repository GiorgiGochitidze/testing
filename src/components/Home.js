import Content from './Content';
import '../Home.css'
import MiniPanel from './MiniPanel';
import MadAbout from './MadAbout';
import Courseend from './Courseend';
import News from './News';
import Footer from './Footer';
import Assistant from '../assistant/Assistant';




const Home = ({Link}) => {

    return (
        <div className='container1'>
            
        <Assistant />

        <Content Link={Link} />

        <MiniPanel />

        <MadAbout />

        <Courseend />

        <News Link={Link} />

        <Footer />

        </div>
     );
}
 
export default Home;