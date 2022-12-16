import "../Home.css"
import Home1 from '../englishv/Home1'
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const Menu = ({Link, german, english, lists, setLists, setListsen, setListsgr, listsen, listsgr, georgia, en , ge ,gr}) => {
  const [listis, setListis] = useState(false)


    return ( 
        <>
            {ge && <div data-aos="fade-up" className="menu-container">
             <Link to="/" style={{textDecoration: 'none', color: 'black'}}><p className="nav-links1">მთავარი</p></Link>
             <Link to='/News' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links2">სიახლეები</p></Link>
                <div className="servise-container" style={{cursor: "pointer"}} onMouseEnter={() => listis ? setListis(false) : setListis(true)} onMouseLeave={() => setListis(false)}>

                <p className="menu-lististvis">სერვისი</p>
                  

                {listis && 
                <div className='servise-listses firstes'>
                  <Link to="/Partners"><p>დონორები</p></Link>
                  <Link to="/Library"><p>ბიბლიოთეკა</p></Link>
                  <Link to="/Gallery"><p>გალერეა</p></Link>
                </div>
                }
                </div>
             <Link to='/Contactus' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links7">კონტაქტი</p></Link>
             <Link to="/Aboutus" style={{textDecoration: 'none', color: 'black'}}><p className="nav-links8">ჩვენს შესახებ</p></Link>
             <Link to='/Login' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links9">შესვლა</p></Link>
             <Link to='/Register' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links10">რეგისტრაცია</p></Link>
             <div style={{display: "flex"}} className='language' onMouseEnter={() => lists ? setLists(false) : setLists(true)} onMouseLeave={() => setLists(false)}>
              <img src='../georgia-icon.png' alt='georgian icon'/>
              <p style={{marginTop: '-10px', marginLeft: '3px'}}>ქართული <img style={{top: '12px', position: 'relative'}} src='../down-arrow.png' /></p>
            {/* main menu end */}

            {/* languages list */}
              {lists && 
              <div style={{marginTop: '-4px'}} className='listes'>
                <div className='usa' onClick={english}>
                  <img src='../usa-icon.png' />
                  <p style={{marginTop: '5px', marginLeft: '5px'}}><Link style={{textDecoration: 'none', color: 'black'}} to='/HomeEnglish'  >ინგლისური</Link></p>
                </div>

                <div className='usa' onClick={german}>
                  <img src='../german-icon.png' />
                  <p style={{marginTop: '5px', marginLeft: '5px'}}><Link style={{textDecoration: 'none', color: 'black'}} to="/HomeGerman">გერმანული</Link></p>
                </div>

              {/* languages list end */}


              </div>}
            </div>
        </div>} 
            {en && 
            <div data-aos="fade-up" className="menu-container">
             <Link to="/HomeEnglish" style={{textDecoration: 'none', color: 'black'}}><p className="nav-links1">Main</p></Link>
             <Link to='/NewsEn' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links2">News</p></Link>
             <div classNam="servise-containeres" style={{cursor: "pointer"}} onMouseEnter={() => listis ? setListis(false) : setListis(true)} onMouseLeave={() => setListis(false)}>

                <p className="menu-lististvis">Service</p>
                  

                {listis && 
                <div className='servise-listses firstes'>
                  <Link to="/Partnersen"><p>Donors</p></Link>
                  <Link to="/Libraryen"><p>Library</p></Link>
                  <Link to="/Galleryen"><p>Gallery</p></Link>
                </div>
                }
                </div>
             <Link to='/Contactusen' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links7">Contact</p></Link>
             <Link to="/Aboutusen" style={{textDecoration: 'none', color: 'black'}}><p className="nav-links8">About US</p></Link>
             <Link to='/Loginen' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links9">LogIn</p></Link>
             <Link to='/Register' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links10">Register</p></Link>
             <div style={{display: "flex"}} className='language' onMouseEnter={() => listsen ? setListsen(false) : setListsen(true)} onMouseLeave={() => setListsen(false)}>
              <img src='../usa-icon.png' alt='usa icon'/>
              <p style={{marginTop: '-10px', marginLeft: '3px'}}>English <img style={{top: '12px', position: 'relative'}} src='../down-arrow.png' /></p>
            {/* main menu end */}

            {/* languages list */}
              {listsen && 
              <div style={{marginTop: '-4px'}} className='listes'>
                <div className='usa' onClick={georgia}>
                  <img src='../georgia-icon.png' />
                  <p style={{marginTop: '5px', marginLeft: '5px'}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Georgian</Link></p>
                </div>

                <div className='usa' onClick={german}>
                  <img src='../german-icon.png' />
                  <p style={{marginTop: '5px', marginLeft: '5px'}}><Link style={{textDecoration: 'none', color: 'black'}} to="/HomeGerman">German</Link></p>
                </div>

              {/* languages list end */}


              </div>}
            </div>
        </div>}

        {gr && <div data-aos="fade-up" className="menu-container">
             <Link to="/HomeGerman" style={{textDecoration: 'none', color: 'black'}}><p className="nav-links1">hauptsächlich</p></Link>
             <Link to='/Newsgr' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links2">Nachrichten</p></Link>
             <div classNam="servise-containeres" style={{cursor: "pointer"}} onMouseEnter={() => listis ? setListis(false) : setListis(true)} onMouseLeave={() => setListis(false)}>

                <p className="menu-lististvis">Servise</p>
                  

                {listis && 
                <div className='servise-listses firstes'>
                  <Link to="/Partnersgr"><p>Spender</p></Link>
                  <Link to="/Librarygr"><p>Bibliothek</p></Link>
                  <Link to="/Gallerygr"><p>Galerie</p></Link>
                </div>
                }
                </div>
             <Link to='/Contactusgr' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links7">Kontakt</p></Link>
              <Link to="/Aboutusgr" style={{textDecoration: 'none', color: 'black'}}><p className="nav-links8">Über uns</p></Link>
             <Link to='/Logingr' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links9" href='#'>Einloggen</p></Link>
             <Link to='/Register' style={{textDecoration: 'none', color: 'black'}}><p className="nav-links10" href='#'>Anmeldung</p></Link>
             <div style={{display: "flex"}} className='language' onMouseEnter={() => listsgr ? setListsgr(false) : setListsgr(true)} onMouseLeave={() => setListsgr(false)}>
              <img src='../german-icon.png' alt='german icon'/>
              <p style={{marginTop: '-10px', marginLeft: '3px'}}>German <img style={{top: '12px', position: 'relative'}} src='../down-arrow.png' /></p>
            {/* main menu end */}

            {/* languages list */}
              {listsgr && 
              <div style={{marginTop: '-4px'}} className='listes'>
                <div className='usa' onClick={georgia}>
                  <img src='../georgia-icon.png' />
                  <p style={{marginTop: '5px', marginLeft: '5px'}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Georgian</Link></p>
                </div>

                <div className='usa' onClick={german}>
                  <img src='../usa-icon.png' />
                  <p style={{marginTop: '5px', marginLeft: '5px'}}><Link style={{textDecoration: 'none', color: 'black'}} to="/HomeEnglish">English</Link></p>
                </div>

              {/* languages list end */}


              </div>}
            </div>
        </div>}
        </>
     );
}
 
export default Menu;