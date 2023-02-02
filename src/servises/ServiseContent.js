const ServiseContent = () => {
    return ( 
        <div className="service-container">
            <div className="service-listed-items" style={{background: '#3dbea6'}}>
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', gap: '20px'}}>
                    <h3 style={{textAlign: 'center'}}>ჩემი ანგარიში</h3>
                    <img alt="" style={{width: '30px', rotate: '-90deg'}} src="https://saorsa.my.canva.site/images/39545a0a4a99079c7527dbfc41ee4b46.svg"/>
                </div>

                <button className="service-button-register">Registration</button>
            </div>

            <div className="service-listed-items">
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>

                <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>კარიერული განვითარებისა და პროფესიული ორიენტაციის პროგრამა</h3>
            </div>

            <div className="service-listed-items">
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>როგორ ავირჩიოთ პროფესია</h3>
            </div>

            <div className="service-listed-items" style={{background: '#3dbea6'}}>
                <div style={{display: 'flex', marginTop: '50px', textAlign: 'center', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>დაჯავშნე აქ და ახლა</h3>
                    <img alt="" style={{width: '30px', rotate: '-90deg'}} src="https://saorsa.my.canva.site/images/39545a0a4a99079c7527dbfc41ee4b46.svg"/>
                </div>
            </div>

            <div className="service-listed-items">
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>კარიერული თერაპია</h3>
            </div>

            <div className="service-listed-items">
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'flex-end', gap: '10px', paddingBlock: '5px', paddingInline: '5px'}}>
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/7b6d7fd3042c57637b17ca0482b5f9d0.svg" />
                    <img style={{width: '30px'}} alt="" src="https://saorsa.my.canva.site/images/f092bfb97b20969347ee549752ce6b42.svg" />
                </div>
                    <h3 style={{margin: '80px auto', textAlign: 'center', wordBreak: 'break-word'}}>კარიერული ინფორმაცია</h3>
            </div>

            <div className="service-listed-items">
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