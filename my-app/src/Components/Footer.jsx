
function Footer(){
    return(
        <div style={{ display: 'flex',alignItems: 'center' ,justifyContent:'space-evenly', height: '400px',backgroundImage: 'url(https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6edcb60f8bc32556bae915_footer-bg.png)'}}>
            <div style={{ width:'30%',height: '150px',display: "flex", flexDirection: 'column', alignItems: 'flexStart'}}>
                <div style={{width: '150px', height: '30px'}}>
                    <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6edda6e64d7d84dcdae233_logo-white.png" alt="whitelogo" />
                </div>
                <p style={{textAlign: 'left', color: 'white',}}>Medical coding automation Technology</p>
                <div style={{display: 'flex', width: '25%', justifyContent: 'space-between'}}>
                    <div style = {{width: '30px',padding:'5px', height: '30px', borderRadius: '50%', display: 'flex', alignItems:'center',justifyContent: 'center'}}>
                        <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7762ed7d8e63_twitter.svg" alt="logo-1" />
                    </div>
                    <div style = {{width: '30px',padding:'5px', height: '30px', borderRadius: '50%', display: 'flex', alignItems:'center',justifyContent: 'center'}}>
                        <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7768627d8e5d_linkedin.svg" alt="logo-2" />
                    </div>
                </div>

            </div>
            <div style={{ width: '60%',height:'200px',fontFamily: 'IBM Plex Sans,sans Serif', display: 'flex',color: '#fff', justifyContent: 'space-evenly'}}>
                <div style={{ fontSize: '18px' ,letterSpacing:'0.5px' }}>
                    <h6 style={{color: '#6f8093', fontSize: '20px',margin: '18px 0px 5px 0px'}}>Technology</h6>
                    <h6>Solutions</h6>
                    <h6>Security</h6>
                </div>
                <div style={{ fontSize: '18px',letterSpacing:'0.5px' }}>
                    <h6 style={{color: '#6f8093', fontSize: '20px',margin: '18px 0px 5px 0px'}}>Company</h6>
                    <h6>Team</h6>
                    <h6>Contact</h6>
                    <h6>Careers</h6>
                </div>
                <div style={{ fontSize: '18px' ,letterSpacing:'0.5px' }}>
                    <h6 style={{color: '#6f8093', fontSize: '20px',margin: '18px 0px 5px 0px'}}>Legal</h6>
                    <h6>Privacy policy</h6>
                    <h6>Cookies</h6>
                </div>
                <div style={{ fontSize: '18px',letterSpacing:'0.5px' }}>
                    <h6 style={{color: '#6f8093', fontSize: '20px',margin: '18px 0px 5px 0px'}}>Resources</h6>
                    <h6>Articles</h6>
                    <h6>RFP guide for medical coding</h6>
                    <h6>Medical coding automation checklist</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;