import './Home.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Totop from './components/Totop';



const Navbar = () => {

  //menu with sets usestate mobile nav bar
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
  const [listiabout, setListiabout] = useState(false)
  const [listiproject, setListiproject] = useState(false)

  const english = () => {
    setGr(false)
    setGe(false)
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

  const [totop, setTotop] = useState(false)

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if(window.scrollY > 200){
              setTotop(true)
          } else{
              setTotop(false)
          }
      })
  })

    return ( 
        <>
        {menu && <Menu listi={listi} listsgr={listsgr} en={en} ge={ge} gr={gr} listsen={listsen} georgia={georgia} Link={Link} lists={lists} setLists={setLists} setListsen={setListsen} setListsgr={setListsgr}  german={german} />}

        {ge && <header>
            <nav>
                <Link to='/' style={{textDecoration: 'none', color: 'black'}}><p>მთავარი</p></Link>
                <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listiabout ? setListiabout(false) : setListiabout(true)} onMouseLeave={() => setListiabout(false)}>
                    <p>ჩვენ შესახებ</p>
                      
                    {listiabout && 
                    <div className='servise-listsabout'>
                      <Link to="/Proces"><p>ორგანიზაციის შესახებ</p></Link>
                      <Link to="/Proces"><p>ჩვენი გუნდი</p></Link>
                      <Link to="/Proces"><p>ღირებულებები</p></Link>
                    </div>
                    }
                    </div>
                  <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listi ? setListi(false) : setListi(true)} onMouseLeave={() => setListi(false)}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/Service"><p>სერვისები</p></Link>
                       
                    {listi && 
                    <div className='servise-lists'>
                      <Link to="/Proces"><p>ინდივიდუალური</p></Link>
                      <Link to="/Proces"><p>კორპორატიული</p></Link>
                      <Link to="/Proces"><p>პარტნიორები</p></Link>
                    </div>
                    }
                    </div>
                    <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listiproject ? setListiproject(false) : setListiproject(true)} onMouseLeave={() => setListiproject(false)}>
                    <p>პროექტები</p>
                      
                    {listiproject && 
                    <div className='servise-listsabout'>
                      <Link to="/Proces"><p>მიმდინარე</p></Link>
                      <Link to="/Proces"><p>დასრულებული</p></Link>
                      <Link to="/Proces"><p>ანგარიშები</p></Link>
                      <Link to="/Proces"><p>დონორები</p></Link>
                    </div>
                    }
                    </div>
                    <Link to="/Library" style={{textDecoration: 'none', color: 'black'}}><p>ბიბლიოთეკა</p></Link>
                    <Link to="/Login" style={{textDecoration: 'none', color: 'black'}}><p>შესვლა</p></Link>
                    <Link to="/Proces" style={{textDecoration: 'none', color: 'black'}}><p>დონაცია</p></Link>
                  <Link style={{textDecoration: 'none', color: 'black'}} to="/HomeEnglish"><div className='languages' onClick={english}>
                    <p style={{marginBottom: '16px'}}>GE</p>
                  </div></Link>
                  <button className="menu-btn" onClick={() => {menu ? setMenu(false) : setMenu(true)}}>Menu</button>
            </nav>
          </header>}

          {/* english version of website */}
    
          {en && <header>
            <nav>
                <Link to='/HomeEnglish' style={{textDecoration: 'none', color: 'black'}}><p>Main</p></Link>
                <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listiabout ? setListiabout(false) : setListiabout(true)} onMouseLeave={() => setListiabout(false)}>
                    <p>About US</p>
                      
                    {listiabout && 
                    <div className='servise-listsabout'>
                      <Link to="/Procesen"><p>About the organization</p></Link>
                      <Link to="/Procesen"><p>Our team</p></Link>
                      <Link to="/Procesen"><p>Values</p></Link>
                    </div>
                    }
                    </div>
                  <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listi ? setListi(false) : setListi(true)} onMouseLeave={() => setListi(false)}>
                    <p>Services</p>
                      
                    {listi && 
                    <div className='servise-lists'>
                      <Link to="/Procesen"><p>Individual</p></Link>
                      <Link to="/Procesen"><p>Corporate</p></Link>
                      <Link to="/Procesen"><p>Partners</p></Link>
                    </div>
                    }
                    </div>
                    <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listiproject ? setListiproject(false) : setListiproject(true)} onMouseLeave={() => setListiproject(false)}>
                    <p>Projects</p>
                      
                    {listiproject && 
                    <div className='servise-listsabout'>
                      <Link to="/Procesen"><p>Current</p></Link>
                      <Link to="/Procesen"><p>Finished</p></Link>
                      <Link to="/Procesen"><p>Accounts</p></Link>
                      <Link to="/Procesen"><p>Donors</p></Link>
                    </div>
                    }
                    </div>
                    <Link to="/Library" style={{textDecoration: 'none', color: 'black'}}><p>Library</p></Link>
                    <Link to="/Login" style={{textDecoration: 'none', color: 'black'}}><p>Log in</p></Link>
                    <Link to="/Procesen" style={{textDecoration: 'none', color: 'black'}}><p>Donation</p></Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/HomeGerman"><div className='languages' onClick={german}>
                  <p style={{marginBottom: '16px'}}>EN</p>
                </div></Link>
                  <button className="menu-btn" onClick={() => {menu ? setMenu(false) : setMenu(true)}}>Menu</button>
            </nav>
          </header>}

          {/* german version of website */}

          {gr && <header>
            <nav>
                <Link to='/HomeGerman' style={{textDecoration: 'none', color: 'black'}}><p>hauptsächlich</p></Link>
                <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listiabout ? setListiabout(false) : setListiabout(true)} onMouseLeave={() => setListiabout(false)}>
                    <p>über uns</p>
                      
                    {listiabout && 
                    <div className='servise-listsabout'>
                      <Link to="/Procesgr"><p>Über die Organisation</p></Link>
                      <Link to="/Procesgr"><p>unser Team</p></Link>
                      <Link to="/Procesgr"><p>Werte</p></Link>
                    </div>
                    }
                    </div>
                  <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listi ? setListi(false) : setListi(true)} onMouseLeave={() => setListi(false)}>
                    <p>Dienstleistungen</p>
                      
                    {listi && 
                    <div className='servise-lists'>
                      <Link to="/Procesgr"><p>Individuell</p></Link>
                      <Link to="/Procesgr"><p>Unternehmen</p></Link>
                      <Link to="/Procesgr"><p>Partner</p></Link>
                    </div>
                    }
                    </div>
                    <div style={{cursor: "pointer"}} className='servise-container' onMouseEnter={() => listiproject ? setListiproject(false) : setListiproject(true)} onMouseLeave={() => setListiproject(false)}>
                    <p>Projekte</p>
                      
                    {listiproject && 
                    <div className='servise-listsabout'>
                      <Link to="/Procesgr"><p>Strom</p></Link>
                      <Link to="/Procesgr"><p>fertig bearbeitet</p></Link>
                      <Link to="/Procesgr"><p>Konten</p></Link>
                      <Link to="/Procesgr"><p>Spender</p></Link>
                    </div>
                    }
                    </div>
                    <Link to="/Library" style={{textDecoration: 'none', color: 'black'}}><p>Bibliothek</p></Link>
                    <Link to="/Login" style={{textDecoration: 'none', color: 'black'}}><p>Einloggen</p></Link>
                    <Link to="/Procesgr" style={{textDecoration: 'none', color: 'black'}}><p>Spende</p></Link>
                
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/"><div className='languages' onClick={georgia}>
                      <p style={{marginBottom: '16px'}}>GR</p>
                    </div></Link>
                  <button className="menu-btn" onClick={() => {menu ? setMenu(false) : setMenu(true)}}>Menu</button>
            </nav>
          </header>}
    
          {totop && <Totop />}
          </>
     );
}
 
export default Navbar;