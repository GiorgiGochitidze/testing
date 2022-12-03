import Content from './Content';
import '../Home.css'
import MiniPanel from './MiniPanel';
import Projects from './Projects';
import Courseend from './Courseend';
import News from './News';
import Footer from './Footer';
import Login from './Login';

const Home = ({Link}) => {

    return (
        <div className='container1'>

        <Content Link={Link} />

        <MiniPanel />

        <Projects />

        <Courseend />

        <News Link={Link} />

        <Footer />
        </div>
     );
}
 
export default Home;