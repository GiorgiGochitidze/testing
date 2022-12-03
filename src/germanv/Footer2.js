const Footer1 = () => {
    return ( 
        <footer>
            <div className="footer-head">
                <p>Folgen Sie uns in den sozialen Medien</p>
                <div className="iconss">
                    <a href="https://www.facebook.com/SAORSAGEORGIA.GE" target="_blank"><img className="facebook-icons s-30" src="../facebook-icon.png" alt="facebook icon"/></a>
                    <a href="https://twitter.com/prsaorsa" target="_blank"><img className="s-30" src="../twitter-icon.png" alt="twitter icon"/></a>
                    <a href="https://mail.google.com/mail/u/0/#search/saorsageorgia%40gmail.com?compose=new" target="_blank"><img className="s-30" src="../gmail-icon.png" alt="gmail icon"/></a>
                    <a href="https://www.instagram.com/saorsageorgia/" target="_blank"><img className="s-30" src="../instagram-icon.png" alt="instagram icon"/></a>
                    <a href="https://bit.ly/3EOWdzc" target="_blank"><img className="s-30" src="../linkedin-icon.png" alt="linkedin icon"/></a>
                    <a href="https://www.pinterest.com/saorsageorgia/" target="_blank"><img className="s-30" src="../pinterest-icon.png" alt="pinterest icon"/></a>
                    <a href="https://www.youtube.com/channel/UCektUpRzlb6sqodzGN9bxWA/videos?view=0&sort=p" target="_blank"><img className="s-30" src="../youtube-icon.png" alt="youtube icon"/></a>
                </div>
            </div>

            <div className="footer-body">
                <img style={{width: "200px", height: "200px"}} className="logosi" src="favicon.ico"/>

                <div>
                    <h4>Kontakt</h4>
                    <p><img className="icons" src="home-icon.png" />Adresse</p>
                    <p><img className="icons" src="mail-icon.png" />info@saorsa.ge</p>
                    <p><img className="icons" src="telephone-icon.png" />+ 01 234 567 88</p>
                    <p><img className="icons" src="pdf-icon.png" />+ 01 234 567 89</p>
                </div>
            </div>
            <div className="developed">Developed by: Giorgi Gochitidze</div>
        </footer>
     );
}
 
export default Footer1;