import './Home.css'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import { useState } from 'react';
//georgian page imports
import NewStories from './news/NewStories';
import Menu from './components/Menu';
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
//german page imports
import Home2 from './germanv/Home2'
import NewStories2 from './newsgr/NewStories2';
import Partners2 from './donorsandpartnersgr/Partners2';
import Biblary2 from './germanv/Biblary2';
import Procces2 from './germanv/Procces2'
import Contactus2 from './contactusgr/Contactus2';
import AboutUs from './aboutus/Aboutus';
import AboutUs1 from './aboutusen/Aboutus1';
import AboutUs2 from './aboutusgr/Aboutus2';
import Login2 from './germanv/Login2';
import Registration from './components/Registration';


function App() {
  {/* menu with sets usestate mobile nav bar */}
  const [menu, setMenu] = useState(false)
  //georgian list
  const [lists, setLists] = useState(false)
  //english list
  const [listsen, setListsen] = useState(false)
  //german list
  const [listsgr, setListsgr] = useState(false)
  //languages
  const [ge, setGe] = useState(true)
  const [en, setEn] = useState(false)
  const [gr, setGr] = useState(false)
  //servicelists
  const [listi, setListi] = useState(false)

  const english = () => {
    setGe(false)
    setGr(false)
    setEn(true)
  }

  const georgia = () => {
    setGr(false)
    setEn(false)
    setGe(true)
  }

  const german = () => {
    setGe(false)
    setEn(false)
    setGr(true)
  }

  return (
    <BrowserRouter>
    <div className="App">
      {menu && <Menu listi={listi} listsgr={listsgr} en={en} ge={ge} gr={gr} listsen={listsen} georgia={georgia} Route={Route} Routes={Routes} Link={Link} lists={lists} setLists={setLists} setListsen={setListsen} setListsgr={setListsgr} english={english}  german={german} />}

  {ge && <header>
        <nav>
          {/* main menu */}
            <Link to='/' style={{textDecoration: 'none', color: 'black'}}><p>მთავარი</p></Link>
              <Link to='/News' style={{textDecoration: 'none', color: 'black'}}><p>სიახლეები</p></Link>
              <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listi ? setListi(false) : setListi(true)} onMouseLeave={() => setListi(false)}>
                <p>სერვისი</p>
                  
                {listi && 
                <div className='servise-lists'>
                  <Link to="/Partners"><p>დონორები</p></Link>
                  <Link to="/Library"><p>ბიბლიოთეკა</p></Link>
                  <Link to="/Gallery"><p>გალერეა</p></Link>
                </div>
                }
                </div>
                <Link to="/Contactus" style={{textDecoration: 'none', color: 'black'}}><p>კონტაქტი</p></Link>
                <Link to="/Aboutus" style={{textDecoration: 'none', color: 'black'}}><p>ჩვენს შესახებ</p></Link>
                <Link to="/Login" style={{textDecoration: 'none', color: 'black'}}><p href='#'>შესვლა</p></Link>
                <Link to="/Register" style={{textDecoration: 'none', color: 'black'}}><p href='#'>რეგისტრაცია</p></Link>
            <div className='languages' onMouseEnter={() => lists ? setLists(false) : setLists(true)} onMouseLeave={() => setLists(false)}>
              <img src='../georgia-icon.png' alt='georgian icon'/>
              <p style={{marginTop: '-10px', marginLeft: '3px'}}>ქართული <img style={{top: '12px', position: 'relative'}} src='../down-arrow.png' /></p>
            {/* main menu end */}

            {/* languages list */}
              {lists && 
              <div className='lists'>
                <div className='usa' onClick={english}>
                  <img src='../usa-icon.png' />
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/HomeEnglish'><p style={{marginTop: '5px', marginLeft: '5px'}}>ინგლისური</p></Link>
                </div>

                <div className='usa' onClick={german}>
                  <img src='../german-icon.png' />
                  <Link style={{textDecoration: 'none', color: 'black'}} to="/HomeGerman"><p style={{marginTop: '5px', marginLeft: '5px'}}>გერმანული</p></Link>
                </div>

              {/* languages list end */}
              </div>}
            </div>
              <button className="menu-btn" onClick={() => {menu ? setMenu(false) : setMenu(true)}}>Menu</button>
        </nav>
      </header>}


      {en && <header>
        <nav>
            <Link to='/HomeEnglish' style={{textDecoration: 'none', color: 'black'}}><p>Main</p></Link>
            <Link to='/Newsen' style={{textDecoration: 'none', color: 'black'}}><p>News</p></Link>
            <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listi ? setListi(false) : setListi(true)} onMouseLeave={() => setListi(false)}>
                <p>Service</p>
                  
                {listi && 
                <div className='servise-lists'>
                  <Link to="/Partnersen"><p>Donors</p></Link>
                  <Link to="/Libraryen"><p>Library</p></Link>
                  <Link to="/Gallery"><p>Gallery</p></Link>
                </div>
                }
                </div>
             <Link to='/Contactusen' style={{textDecoration: 'none', color: 'black'}}><p>Contact</p></Link>
             <Link to="/Aboutusen" style={{textDecoration: 'none', color: 'black'}}><p>About US</p></Link>
             <Link to='/Loginen' style={{textDecoration: 'none', color: 'black'}}><p>Login</p></Link>
             <Link to='/Register' style={{textDecoration: 'none', color: 'black'}}><p>Register</p></Link>
            <div className='languages' onMouseEnter={() => listsen ? setListsen(false) : setListsen(true)} onMouseLeave={() => setListsen(false)}>
              <img src='../usa-icon.png' alt='georgian icon'/>
              <p style={{marginTop: '-10px', marginLeft: '3px'}}>English <img style={{top: '12px', position: 'relative'}} src='../down-arrow.png' /></p>
              {listsen && 
              <div className='lists'>
                <div className='usa' onClick={georgia}>
                  <img src='../georgia-icon.png' />
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/'><p style={{marginTop: '5px'}}>Georgian</p></Link>
                </div>

                <div className='usa' onClick={german}>
                  <img src='../german-icon.png' />
                  <Link style={{textDecoration: 'none', color: 'black'}} to="/HomeGerman"><p style={{marginTop: '5px'}}>German</p></Link>
                </div>
              </div>}
            </div>
              <button className="menu-btn" onClick={() => {menu ? setMenu(false) : setMenu(true)}}>Menu</button>
        </nav>
      </header>}

      {gr && <header>
        <nav>
            <Link to='/HomeGerman' style={{textDecoration: 'none', color: 'black'}}><p>hauptsächlich</p></Link>
            <Link to='/Newsgr' style={{textDecoration: 'none', color: 'black'}}><p>Nachrichten</p></Link>
            <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listi ? setListi(false) : setListi(true)} onMouseLeave={() => setListi(false)}>
                <p>Servise</p>
                  
                {listi && 
                <div className='servise-lists'>
                  <Link to="/Partnersgr"><p>Spender</p></Link>
                  <Link to="/Librarygr"><p>Bibliothek</p></Link>
                  <Link to="/Gallery"><p>Galerie</p></Link>
                </div>
                }
                </div>
            <Link to="/Contactusgr" style={{textDecoration: 'none', color: 'black'}}><p>Kontakt</p></Link>
            <Link to="/Aboutusgr" style={{textDecoration: 'none', color: 'black'}}><p>Über uns</p></Link>
            <Link to="/Logingr" style={{textDecoration: 'none', color: 'black'}}><p>Einloggen</p></Link>
            <Link to="/Register" style={{textDecoration: 'none', color: 'black'}}><p>Anmeldung</p></Link>
            <div className='languages' onMouseEnter={() => listsgr ? setListsgr(false) : setListsgr(true)} onMouseLeave={() => setListsgr(false)}>
              <img src='../german-icon.png' alt='georgian icon'/>
              <p style={{marginTop: '-10px', marginLeft: '3px'}}>German <img style={{top: '12px', position: 'relative'}} src='../down-arrow.png' /></p>
              {listsgr && 
              <div className='lists'>
                <div className='usa' onClick={georgia}>
                  <img src='../georgia-icon.png' />
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/'><p style={{marginTop: '5px', marginLeft: '5px'}}>Georgian</p></Link>
                </div>

                <div className='usa' onClick={english}>
                  <img src='../usa-icon.png' />
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/HomeEnglish'><p style={{marginTop: '5px', marginLeft: '5px'}}>English</p></Link>
                </div>
              </div>}
            </div>
              <button className="menu-btn" onClick={() => {menu ? setMenu(false) : setMenu(true)}}>Menu</button>
        </nav>
      </header>}

    <Routes>
      {/* georgian */}
      <Route path='/' element={<Home Link={Link} />} />
      <Route path='/News' element={<NewStories />}/>
      <Route path='/Partners' element={<Partners />}/>
      <Route path='/Library' element={<Biblary />} />
      <Route path='/Proces' element={<Procces />} />
      <Route path='/Contactus' element={<Contactus />} />
      <Route path='/Aboutus' element={<AboutUs />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Registration />} />
      {/* english */}
      <Route path='/HomeEnglish' element={<Home1 />} />
      <Route path='/Newsen' element={<NewStories1 />} />
      <Route path='/Partnersen' element={<Partners1 />} />
      <Route path='/Libraryen' element={<Biblary1 />} />
      <Route path='/Procesen' element={<Procces1 />} />
      <Route path='/Contactusen' element={<Contactus1 />} />
      <Route path='/Aboutusen' element={<AboutUs1 />} />
      <Route path='/Loginen' element={<Login1 />} />
      {/* german */}
      <Route path='/HomeGerman' element={<Home2 />} />
      <Route path='/NewsGr' element={<NewStories2 />}/>
      <Route path='/Partnersgr' element={<Partners2 />}/>
      <Route path='/Librarygr' element={<Biblary2 />}/>
      <Route path='/Procesgr' element={<Procces2 />} />
      <Route path='/Contactusgr' element={<Contactus2 />} />
      <Route path='/Aboutusgr' element={<AboutUs2 />} />
      <Route path='/Logingr' element={<Login2 />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
