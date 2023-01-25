import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import MiniPannelCompo from "./MiniPannelCompo";

const MiniPanel = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    })

    return ( 
        <div className="mini-info-container">
            <MiniPannelCompo />
        </div>
        );
}
 
export default MiniPanel;