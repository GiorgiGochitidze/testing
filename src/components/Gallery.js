const Gallery = () => {
    return ( 
        <div className="gallery-container">
            <div className="gallery-content">
                <img className="hundred-to-ten" src="../img3.jpg"/>
                    <img className="twohundred-to-thirty" src="../img4.jpg"/>
                    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        <img className="cubes" src="../img5.jpg"/>
                        <img className="cubes" src="../img6.jpg"/>
                    </div>
                <img className="threehundred" src="../img7.jpg"/>
                <img className="looks-like-first" src="../img8.jpg"/>
            </div>
        </div>
     );
}
 
export default Gallery;