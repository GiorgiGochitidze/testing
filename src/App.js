import Navbar from "./Navbar";
import './Home.css'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
//georgian page imports
import NewStories from './news/NewStories';
import Partners from './donorsandpartners/Partners';
import Home from './components/Home';
import Procces from './components/Procces';
import Contactus from './contactus/Contactus';
import Login from './components/Login';
import Gallery from './components/Gallery';
// english page imports
import Home1 from './englishv/Home1'
import Biblary from './components/Biblary';
import NewStories1 from './newsen/NewStories1';
import Partners1 from './donorsandpartnersen/Partners1';
import Biblary1 from './englishv/Biblary1';
import Procces1 from './englishv/Procces1'
import Contactus1 from './contactusen/Contactus1';
import Login1 from './englishv/Login1';
import Registration1 from './englishv/Registration1'
//german page imports
import Home2 from './germanv/Home2'
import NewStories2 from './newsgr/NewStories2';
import Partners2 from './donorsandpartnersgr/Partners2';
import Biblary2 from './germanv/Biblary2';
import Procces2 from './germanv/Procces2'
import Contactus2 from './contactusgr/Contactus2';
import Aboutus from './aboutus/Aboutus';
import Aboutus1 from './aboutusen/Aboutus1';
import Aboutus2 from './aboutusgr/Aboutus2';
import Login2 from './germanv/Login2';
import Registration from './components/Registration';
import Registration2 from './germanv/Registration2'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/News' element={<NewStories />} />
      <Route path='/Partners' element={<Partners />} />
      <Route path='/Library' element={<Biblary />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Contactus' element={<Contactus />} />
      <Route path='/Aboutus' element={<Aboutus />} />
      <Route path='/Login' element={<Login Link={Link} />} />
      <Route path='/Register' element={<Registration />} />
      <Route path='/Procces' element={<Procces />} />

      {/* english version */}
      <Route path='/HomeEnglish' element={<Home1 />} />
      <Route path='/Newsen' element={<NewStories1 />} />
      <Route path='/Partnersen' element={<Partners1 />} />
      <Route path='/Libraryen' element={<Biblary1 />} />
      <Route path='/Contactusen' element={<Contactus1 />} />
      <Route path='/Aboutusen' element={<Aboutus1 />} />
      <Route path='/Loginen' element={<Login1 />} />
      <Route path='/Registeren' element={<Registration1 />} />
      <Route path='/Proccesen' element={<Procces1 />} />

      {/* german version */}
      <Route path='/HomeGerman' element={<Home2 />} />
      <Route path='/Newsgr' element={<NewStories2 />} />
      <Route path='/Partnersgr' element={<Partners2 />} />
      <Route path='/Librarygr' element={<Biblary2 />} />
      <Route path='/Contactusgr' element={<Contactus2 />} />
      <Route path='/Aboutusgr' element={<Aboutus2 />} />
      <Route path='/Logingr' element={<Login2 />} />
      <Route path='/Registergr' element={<Registration2 />} />
      <Route path='/Proccesgr' element={<Procces2 />} />

    </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
