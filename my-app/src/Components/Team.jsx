import Footer from './Footer';

function Team () {
    return (
        <div>
            
            {/* poster */}
            <div style={{color: 'whitesmoke',margin:'auto auto 10px auto',padding:'5%',display: 'felx', flexDirection: 'column',justifyContent: 'center', alignContent: 'center',height: 'auto', backgroundImage: 'url(https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8115255836db2cd3bfd6b2_background.jpg)'}}>
                <h1 style={{fontSize:'80px'}}>On a mission to structure the world's healthcare data</h1>
                <h3 style={{fontSize:'30px',margin: 'auto',width: '70%'}}>Fathom has brought together a world-class team of technologists, designers, and business people to fix one of the most broken parts of the healthcare system.</h3>
                <button style={{letterSpacing: '2px', color: 'purple', margin: '4% auto auto auto', padding: '20px 35px', borderRadius: '20px', border: 'none'}}>EXPLORE CAREERS</button>
            </div>
            {/* patto */}
            <div style={{textAlign: 'center',height: 'auto',padding: '1%',margin:'auto auto 10px auto',backgroundColor: '#f3f5fb'}}>
                <h2 style={{textAlign: 'center',fontFamily: 'Barlow,sans-serif', color: '#6f8093'}}>Fathom featured in <span style={{color:"purple"}}>9 Startups Engineers Are Leaving Facebook For</span> </h2>
            </div>

            {/* TEAM PHOTOS */}
            <div style={{margin: '20px auto'}}>
                <h1>Meet Our Team</h1>
                <div style={{display: 'flex',margin: '20px auto',gap: '20px', justifyContent: 'flex-start', alignItem: 'center',flexWrap: 'wrap'}}>

                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8589ea52b076432f124bcc_chris.svg" alt="2" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Cheris</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Cofounder</h6>
                    </div>

                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="1" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Andrew</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Cofounder</h6>
                    </div> 

                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8589ebfc81976ad2aeb379_krishna.svg" alt="3" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Krihna</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8589ecc718425534dde858_pawel.svg" alt="4" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Pawel</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    <div style={{ padding: '10px', width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8589eb516e7a74b950826d_monica.svg" alt="5" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Monica</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Recruting</h6>
                    </div> 

                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8589eaf0055b59d7ab2c0f_erick.svg" alt="6" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Erick</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Busines Operation</h6>
                    </div> 

                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8589ec05cae126d3d5c9d3_stephane.svg" alt="7" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Stephane</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 


                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e858c10fc819701fcaeb8d7_JAKUB%20T.svg" alt="8" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>JAKUB</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e858c10fc81973236aeb8d5_PARTH%20D.svg" alt="9" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Parth</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e858c10c71842b01eddee52_AMIT.svg" alt="10" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Amit</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Commercial operations</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5e858c0f05cae1a1c2d5d0d8_BRANKO.svg" alt="11" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Branko</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5eb87c8e620703b6d172015a_tommek.svg" alt="12" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Tomek</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5eb87c8c042e747702149818_aditya.svg" alt="13" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Aditya</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5eb87c8d8b6303666c45abf9_kuba.svg" alt="14" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Kuba</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5eb87c8c042e747754149819_scott.svg" alt="15" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Scott</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/610589bbc65fd3d0a0ea4b89_peiran.svg" alt="16" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Peiran</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/610589baaa8822c76b8a4cf7_yulia.svg" alt="17" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Yulia</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6168aec3eda7faa539c720e3_dave.svg" alt="18" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Dave</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6168aea98a806a720853aac8_abhay.svg" alt="19" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Abhay</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/61c11714c5eb840516b09796_HEADQUARTERS_2021_noname.svg" alt="20" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Jeremy</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}}  src="https://assets.website-files.com/5e6c01bb5212506d6c119069/62059e20417fb528e23be9bd_HEADQUARTERS_2022_Nikhil_Nikhil%20(1).svg" alt="21" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Nikhil</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}}   src="https://assets.website-files.com/5e6c01bb5212506d6c119069/624c7c1659d64d222a1d4892_HEADQUARTERS_FACES2022_Wes.svg" alt="22" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Wes</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Product</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/624c7c16ed39528809cf3d6d_HEADQUARTERS_FACES2022_Peter.svg" alt="23" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Peter</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/624c7c1683e23a2f1564eb66_HEADQUARTERS_FACES2022_Taylor.svg" alt="24" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Taylor</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Strategy & Operations</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6313a1da77fe7edb442622e5_HEADQUARTERS_FACES2022_Tim.svg" alt="24" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Tim</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6313a1d9482ba7ad5c6fc2de_HEADQUARTERS_FACES2022_Austin.svg" alt="25" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Austin</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Strategy & Operations</h6>
                    </div> 

                    
                    <div style={{ padding: '10px', width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6313a1d9aa0b41f3323b3eb5_HEADQUARTERS_FACES2022_Anupam.svg" alt="26" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Anupam</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6313a1d9aa0b4131583b3eb4_HEADQUARTERS_FACES2022_Priotr.svg" alt="27" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Pioter</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                    <div style={{ padding: '10px', width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6313a1d9aa0b41642f3b3eb6_HEADQUARTERS_FACES2022_Mark.svg" alt="28" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Mark</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Sales</h6>
                    </div> 

                    
                    <div style={{ padding: '10px',width: '22%',display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItem: 'center',}}>
                        <div style={{ width: '150px',height: '150px',margin: 'auto'}}>
                            <img style={{width: '100%', height: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/6313a1d9cf6f3b253331674e_HEADQUARTERS_FACES2022_Ben.svg" alt="24" />
                        </div>
                        <h3 style={{fontfamily: 'IBM Plex Sans,sans Serif',margin: '0px 0px 18px 0px'}}>Ben</h3>
                        <h6 style={{color: '#6f8093',fontSize: '18px',margin: '0px 0px 0px 0px', fontWeight: '450' ,fontfamily: 'IBM Plex Sans,sans Serif'}}>Technology</h6>
                    </div> 

                    
                </div> 
            </div>

            {/* containor */}
            <div style={{backgroundColor: '#f3f5fb',padding: '1%',margin:'20px auto', height: '450px',textAlign: 'center'}}>
                <h3 style={{color: '#6f8093',fontSize: '40px',fontWeight: '550',fontfamily: 'IBM Plex Sans,sans Serif'}}>Fortunate to be backed by world-class investors</h3>
                <div style={{display: 'flex',gap: '15px',width: '90%',justifyContent:'space-evenly',margin:'7% auto 20px auto',alignItems:'center'}}>
                    <div style={{width: '30%',height: '150px'}}>
                        <div style={{width:' 350px', height: '150px',display:'flex',alignItems:'center',justifyContent:'center',}}>
                        <img style={{width: '100%', heigth: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ea20b35249c08cdb3393fef_tarsadia.svg" alt="" />
                        </div>
                        <h6 style={{fontSize: '18px',fontWeight: '400',fontfamily: 'IBM Plex Sans,sans Serif'}}>TARSADIA</h6>
                    </div>

                    <div style={{width: '30%',height: '150px'}}>
                        <div style={{width:' 200px', height: '150px',margin:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img style={{width: '100%', heigth: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ea20cc4a9bb6c61ceb12d53_gv.svg" alt="" />
                        </div>
                        <h6 style={{fontSize: '18px',fontWeight: '400',fontfamily: 'IBM Plex Sans,sans Serif'}}>FORMERLY GOOGLE VENTURES</h6>
                    </div>

                    <div style={{width: '30%',height: '150px'}}>
                        <div style={{width:' 350px', height: '150px',margin:'auto',display:'flex',alignItems:'center',justifyContent:'center',}}>
                        <img style={{width: '100%', heigth: '100%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ea211634ec0809b10070bec_ff.svg" alt="" />
                        </div>
                        <h6 style={{fontSize: '18px',fontWeight: '400',fontfamily: 'IBM Plex Sans,sans Serif'}}>FOUNDERS FUND</h6>
                    </div>
                </div>
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

export default Team ;