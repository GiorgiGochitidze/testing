


const Footer = () => {

    return ( 
        <footer>
            <div className="footer-head">
                <p>გამოგვყევით სოციალურ ქსელებში</p>
                <div className="iconss">
                    <a href="https://www.facebook.com/SAORSAGEORGIA.GE" rel="noreferrer"><img className="facebook-icons s-30" src="../facebook-icon.png" alt="facebook icon"/></a>
                    <a href="https://twitter.com/prsaorsa" rel="noreferrer"><img className="s-30" src="../twitter-icon.png" alt="twitter icon"/></a>
                    <a href="https://mail.google.com/mail/u/0/#search/saorsageorgia%40gmail.com?compose=new" rel="noreferrer"><img className="s-30" src="../gmail-icon.png" alt="gmail icon"/></a>
                    <a href="https://www.instagram.com/saorsageorgia/" rel="noreferrer"><img className="s-30" src="../instagram-icon.png" alt="instagram icon"/></a>
                    <a href="https://bit.ly/3EOWdzc" rel="noreferrer"><img className="s-30" src="../linkedin-icon.png" alt="linkedin icon"/></a>
                    <a href="https://www.pinterest.com/saorsageorgia/" rel="noreferrer"><img className="s-30" src="../pinterest-icon.png" alt="pinterest icon"/></a>
                    <a href="https://www.youtube.com/channel/UCektUpRzlb6sqodzGN9bxWA/videos?view=0&sort=p" rel="noreferrer"><img className="s-30" src="../youtube-icon.png" alt="youtube icon"/></a>
                </div>
            </div>

            <div className="footer-body">
                <img alt="" style={{width: "200px", height: "200px"}} className="logosi" src="favicon.ico"/>

                <div>
                    <h4>კონტაქტი</h4>
                    <p><img alt="" className="icons" src="home-icon.png" />მისამართი</p>
                    <p><img alt="" className="icons" src="mail-icon.png" />info@saorsa.ge</p>
                    <p><img alt="" className="icons" src="telephone-icon.png" />+ 01 234 567 88</p>
                    <p><img alt="" className="icons" src="pdf-icon.png" />+ 01 234 567 89</p>
                </div>
            </div>
            <a href="https://giorgig.netlify.app/" rel="noreferrer" style={{textDecoration: 'none'}}><div className="developed">Developed by: Giorgi Gochitidze</div></a>
        </footer>
     );
}
 
export default Footer;