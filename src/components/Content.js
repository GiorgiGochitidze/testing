

const Content = ({Link}) => {

    return ( 
        <div className="content-container">
            <img src='./img1.jpg' />

            <div className="list1" >
                <div className="first" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა</p></Link></div>
                <div className="second" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა<br /> კონსლტინგი</p></Link></div>
                <div className="third" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა ალუმნი</p></Link></div>
                <div className="fourth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა <br /> რეგიონალური ასოციაცია</p></Link></div>
                <div className="fifth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა  პოლონეთის<br /> ასოციაცია</p></Link></div>
                <div className="sixth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა<br /> შუახევი</p></Link></div>
                <div className="seventh" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსა<br /> წალენჯიხა</p></Link></div>
                <div className="eighth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საორსას<br /> საქველმოქმედო ფონდი</p></Link></div>
                <div className="nineth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>საქართველოს<br /> მშრომელ ქალთა გაერთიანება</p></Link></div>
                <div className="tenth" style={{textAlign: 'center'}}><Link style={{textDecoration: "none", color: "white"}} to="/Proces"><p>სერვისები/<br /> ტრენინგები/<br /> პროგრამები </p></Link></div>
            </div>
        </div>
     );
}
 
export default Content;