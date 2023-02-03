import { useState } from "react";



const ServiseContent = () => {

    const [buywindow, setBuywindow] = useState(true)

    const [blurback, setBlurback] = useState(false)
    const [blurback1, setBlurback1] = useState(false)
    const [blurback2, setBlurback2] = useState(false)
    const [blurback3, setBlurback3] = useState(false)
    const [blurback4, setBlurback4] = useState(false)
    const [blurback5, setBlurback5] = useState(false)

    return ( 
        <div className="service-container">
            {buywindow && <div className="buy-window-in-services">
                <div className="buy-window-container">
                    <h2 style={{textAlign: 'center'}}>პაკეტის დასახელება: კარიერული განვითარებისა და პროფესიული ორიენტაციის პროგრამა</h2>

                    <h4 style={{marginLeft: '20px'}}>ფასი: 80ლარი</h4>
                </div>
            </div>}
            <div className="service-listed-items" style={{background: '#3dbea6'}}>
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', gap: '20px'}}>
                    <h3 style={{textAlign: 'center'}}>ჩემი ანგარიში</h3>
                    <img alt="" style={{width: '30px', rotate: '-90deg'}} src="https://saorsa.my.canva.site/images/39545a0a4a99079c7527dbfc41ee4b46.svg"/>
                </div>

                <button className="service-button-register">Registration</button>
            </div>

            <div className="service-listed-items" onMouseEnter={() => setBlurback(true)} onMouseLeave={() => setBlurback(false)}>

                {blurback && <div className="buy-button-services">
                    <button className="buy-button-in-services">ყიდვა</button>
                </div>}

                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>

                <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>კარიერული განვითარებისა და პროფესიული ორიენტაციის პროგრამა</h3>

            </div>

            <div className="service-listed-items" onMouseEnter={() => setBlurback1(true)} onMouseLeave={() => setBlurback1(false)}>

            {blurback1 && <div className="buy-button-services">
                    <button className="buy-button-in-services">ყიდვა</button>
                </div>}

                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>როგორ ავირჩიოთ პროფესია</h3>
            </div>

            <div className="service-listed-items" style={{background: '#3dbea6'}} onMouseEnter={() => setBlurback2(true)} onMouseLeave={() => setBlurback2(false)}>

            {blurback2 && <div className="buy-button-services">
                    <button className="buy-button-in-services">ყიდვა</button>
                </div>}

                <div style={{display: 'flex', marginTop: '50px', textAlign: 'center', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>დაჯავშნე აქ და ახლა</h3>
                    <img alt="" style={{width: '30px', rotate: '-90deg'}} src="https://saorsa.my.canva.site/images/39545a0a4a99079c7527dbfc41ee4b46.svg"/>
                </div>
            </div>

            <div className="service-listed-items" onMouseEnter={() => setBlurback3(true)} onMouseLeave={() => setBlurback3(false)}>

            {blurback3 && <div className="buy-button-services">
                    <button className="buy-button-in-services">ყიდვა</button>
                </div>}

                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>კარიერული თერაპია</h3>
            </div>

            <div className="service-listed-items" onMouseEnter={() => setBlurback4(true)} onMouseLeave={() => setBlurback4(false)}>

            {blurback4 && <div className="buy-button-services">
                    <button className="buy-button-in-services">ყიდვა</button>
                </div>}

                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>კარიერული ინფორმაცია</h3>
            </div>

            <div className="service-listed-items" onMouseEnter={() => setBlurback5(true)} onMouseLeave={() => setBlurback5(false)}>

            {blurback5 && <div className="buy-button-services">
                    <button className="buy-button-in-services">ყიდვა</button>
                </div>}

                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>კარიერული კონსულტაცია</h3>
            </div>
        </div>
     );
}
 
export default ServiseContent;