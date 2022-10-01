import { Link } from 'react-router-dom' ;

function Navbar() {

    return (
        <div  style={{display: "flex",position: 'sticky', top: '0',backgroundColor:'white' ,justifyContent: 'space-between' , alignItems: 'center',margin:'15px 0px 0px 0px', border: '1px solid lightgrey', height: '10vh', padding: '0px 10px', fontFamily: 'Barlow,sans-serif', fontSize: '16px', fontWeight: '400' }}>
            <div style={{width: '13vw', height: '5vh', display: "flex", justifyContent: 'space-between' , alignItems: 'center'}}>
                <Link to=''>
                <img style={{width: '100%', height: '80%'}} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg" alt="Title-pic" />
                </Link>
            </div>
            <div style={{ width: '50vw', height: '8vh', display: "flex", justifyContent: 'space-evenly' , alignItems: 'center' }}>
                <Link to='services'>
                <h4>SERVICES</h4>
                </Link>

                <Link to='security'>
                <h4>SECURITY</h4>
                </Link>

                <Link to='/team'>
                <h4>TEAM</h4>
                </Link>

                <Link to='/career'>
                <h4>CAREERS</h4>
                </Link>

                <Link to='insights'>
                <h4>INSIGHTS</h4>
                </Link>

                <Link to='contacts'>
                <h4>CONTACTS</h4>
                </Link>
            </div>
        </div>
    )
}

export default Navbar