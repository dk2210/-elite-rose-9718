import Footer from './Footer'

function Home() {

    return (

        <div style={{ height: 'auto'}}>
            {/* poster */}
            <div style={{color: 'whitesmoke',margin:'auto auto 10px auto',padding:'5%',display: 'felx', flexDirection: 'column',justifyContent: 'center', alignContent: 'center',height: 'auto', backgroundImage: 'url(https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8115255836db2cd3bfd6b2_background.jpg)'}}>
                <h1 style={{fontSize:'80px'}}>AI built for medical coding</h1>
                <h3 style={{fontSize:'30px',margin: 'auto',width: '60%'}}>What if you had a coder who could code millions of charts per day at unparalleled accuracy and cost?</h3>
                <button style={{letterSpacing: '2px', color: 'purple', margin: '4% auto auto auto', padding: '15px 25px', borderRadius: '20px', border: 'none'}}>GET STARTED</button>
            </div>
            {/* patto */}
            <div style={{textAlign: 'center',height: 'auto',padding: '1%',margin:'auto auto 10px auto',backgroundColor: '#f3f5fb'}}>
                <h2 style={{textAlign: 'center',fontFamily: 'Barlow,sans-serif', color: '#6f8093'}}>Read <span style={{color:"purple"}}>NVIDIA</span>'s spotlight on Fathom: <span 
                style={{color:"purple"}}>The Cure for the Common Code</span> </h2>
            </div>
            {/* servies */}
            <div style={{hight: '450px'}}>
                <p>SERVICES</p>
                <h1>Coding services tailored to your workflow</h1>
                <div style={{display : 'flex',justifyContent: 'space-evenly',width: '80%', margin: '2% auto 6% auto'}}>

                    <div style={{ padding: '10px',width: '32%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc79d75515e2ecd54be_automation.svg" alt="1" />
                        </div>
                        <div>
                            <h2 style={{fontFamily: 'Barlow,sans-serif',color: '#293240', fontSize:'24px',}}>Coding automation</h2>
                            <div style={{lineHeight: '50px'}}>
                            <h4 style={{color: '#6f8093', fontSize: '18px'}}>Our AI takes a first pass, automating what it can and flagging the remainder for your existing coding operations.</h4>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '10px',width: '32%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7d802d608218cac51_full-service.svg" alt="2" />
                        </div>
                        <div>
                            <h2 style={{fontFamily: 'Barlow,sans-serif',color: '#293240', fontSize:'24px',}}>Full-service coding</h2>
                            <div  style={{lineHeight: '50px'}}>
                            <h4 style={{color: '#6f8093', fontSize: '18px'}}>AI combined with our human infrastructure to maximize speed, and accuracy while reducing costs.</h4>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '10px',width: '32%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7dc544573caf55a0b_audit.svg" alt="3" />
                        </div>
                        <div>
                            <h2 style={{fontFamily: 'Barlow,sans-serif',color: '#293240', fontSize:'24px',}}>Real-time audit</h2>
                            <div  style={{lineHeight: '50px'}}>
                            <h4 style={{color: '#6f8093', fontSize: '18px'}}>Use Fathom to review the work of your coding team, editing errors and flagging problematic coding for review.</h4>
                            </div>
                        </div>
                    </div>

                </div>

                        <button style={{margin: '0px 0px 20px 0px',padding: '15px 35px',backgroundColor: 'white' ,borderRadius: '20px', border: '3px solid #9a76d0', color: '#9a76d0'}}>Explore Services</button>

            </div>

            {/* growth box */}

            <div style={{backgroundColor: '#f3f5fb', width: '70%',height: '380px', margin: '5% auto 5% auto', padding: '20px 60px 20px 60px'}}>
                <h1 style={{fontSize: '48px', fontWeight: '500', fontFamily: 'IBM Plex Serif,sans Serif'}}>Fathom powers coding operations across</h1>
                <div style={{display: 'flex', justifyContent:'space-between', padding: '20px',width: '100%', margin: 'auto auto 15px auto'}}>
                    <div style={{margin: '0px',width: '25%', padding: '0'}}>
                        <h1 style={{color: '#6f8093', fontSize: '90px',margin: '0px'}}>4K+</h1>
                        <p style={{fontSize: '14px', fontWeight: '700'}}>PROVIDER SITES</p>
                    </div>

                    <div style={{margin: '0px',width: '25%', padding: '0'}}>
                        <h1 style={{color: '#6f8093', fontSize: '90px',margin: '0px'}}>60M+</h1>
                        <p style={{fontSize: '14px', fontWeight: '700'}}>PATIENTS</p>
                    </div>

                    <div style={{margin: '0px',width: '25%', padding: '0'}}>
                        <h1 style={{color: '#6f8093', fontSize: '90px',margin: '0px'}}>25K+</h1>
                        <p style={{fontSize: '14px', fontWeight: '700'}}>PROVIDERS</p>
                    </div>

                </div>

                <div style={{ width: '25%', height: '25%', margin: '20px 0px 40px -5%'}}>
                    <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e86784321e17d5b3e1ca947_dots-left.svg" alt="dashed-pic" />
                </div>
            </div>

            {/* benefites */}

            <div style={{textAlign: 'center',height: 'auto',margin: '0px 0px 20px 0px',padding:'20px'}}>
                <h1 style={{margin: '0px 0x ',fontFamily: 'IBM Plex Serif,sans Serif', fontSize: '45px'}}>Cost, speed, and accuracy</h1>
                <h6  style={{margin:'0px 0px 20px 0px ',color: 'grey',fontFamily: 'Barlow,sansSerif', fontSize: '28px'}}>No need to make trade-offs, choose all three</h6>
           
                <div style={{display:'flex',flexWrap: 'wrap', gap: '70px',alignItems: 'center',justifyContent:'space-evenly',padding:'40px',margin: 'auto auto 20px auto'}}>
                    <div style={{width: '25%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81210fd802d6d4d78cc141_cost.svg" alt="1" />
                        </div>
                        <h6 style={{margin:'15px 0px 15px 0px',fontFamily: 'Barlow,sans-serif', fontSize: '24px'}}>Cost</h6>
                        <div style={{width:'80%',fontSize: '18px', margin: '10px auto 10px auto'}}>Reduce the total cost of your coding operations by up to 50%.</div>
                    </div>

                    <div style={{width: '25%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81250b9d7551effbcd8483_accuracy.svg" alt="2" />
                        </div>
                        <h6 style={{margin:'15px 0px 15px 0px',fontFamily: 'Barlow,sans-serif', fontSize: '24px'}}>Accuracy</h6>
                        <div style={{width:'80%',fontSize: '18px', margin: '10px auto 10px auto'}}>Instantly reduce claim denials and mitigate audit risk.</div>
                    </div>

                    <div style={{width: '25%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811b57a7eca1abcc96f85e_speed.svg" alt="3" />
                        </div>
                        <h6 style={{margin:'15px 0px 15px 0px',fontFamily: 'Barlow,sans-serif', fontSize: '24px'}}>Speed</h6>
                        <div style={{width:'80%',fontSize: '18px', margin: '10px auto 10px auto'}}>Cut your coding turnaround by days, not hours or minutes.</div>
                    </div>

                    <div style={{width: '25%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81244ea7eca1517f971f83_scale.svg" alt="4" />
                        </div>
                        <h6 style={{margin:'15px 0px 15px 0px',fontFamily: 'Barlow,sans-serif', fontSize: '24px'}}>Scale</h6>
                        <div style={{width:'80%',fontSize: '18px', margin: '10px auto 10px auto'}}>Effortlessly add the capacity to code millions of charts per day.</div>
                    </div>

                    <div style={{width: '25%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81244e957e0aca8631fe64_reliability.svg" alt="5" />
                        </div>
                        <h6 style={{margin:'15px 0px 15px 0px',fontFamily: 'Barlow,sans-serif', fontSize: '24px'}}>Reliability</h6>
                        <div style={{width:'80%',fontSize: '18px', margin: '10px auto 10px auto'}}>Ensure that your coding operations never slow down or stop.</div>
                    </div>

                    <div style={{width: '25%'}}>
                        <div>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81235429502fec7abc4315_security.svg" alt="6" />
                        </div>
                        <h6 style={{margin:'15px 0px 15px 0px',fontFamily: 'Barlow,sans-serif', fontSize: '24px'}}>Security</h6>
                        <div style={{width:'80%',fontSize: '18px', margin: '10px auto 10px auto'}}>Keep your PHI secure with industry leading technology and protocol.</div>
                    </div>
                   
                </div>
                <button style={{margin: '20px 0px 10px 0px', padding: '15px 35px',border: '3px solid #9a76d0', color: '#9a76d0',borderRadius:'50px'}}>SCHEDULE A CALL</button>
            </div>

            {/* last patto */}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', margin: '15px auto'}}>
                <div style={{width: '25%'}}>
                    <h1>Ready to get started?</h1>
                </div>
                <div style={{width: '70%', gap:'20px'}}>
                    <button style={{margin: '0px 70px 10px 0px', padding: '15px 35px',border: '3px solid #9a76d0', color: '#9a76d0',borderRadius:'50px'}}>SCHEDULE A CALL</button>
                    <button style={{color: 'white', backgroundColor: '#9a76d0', border: 'none',padding: '15px 35px',borderRadius: '50px'}}>REQUEST A QUOTE</button>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Home