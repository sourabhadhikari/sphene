import React from 'react'
import {Link} from 'react-router-dom';
const Home = () =>{
    return(
        <div>
            <p><Link to="/Home/creative-ContentRight" style={{textDecoration:'none', color:'#373737'}}>Content-right</Link></p>
            <p><Link to="/Home/creative-ContentLeft" style={{textDecoration:'none', color:'#373737'}}>Content-left</Link></p>

            <p><Link to="/Home/creative-ContentBottom" style={{textDecoration:'none', color:'#373737'}}>Content-Bottom</Link></p>
            <p><Link to="/Home/creative-ContentCreative" style={{textDecoration:'none', color:'#373737'}}>Content-Creative</Link></p>
            <p><Link to="/Home/creative-SinglePageProject" style={{textDecoration:'none', color:'#373737'}}>SinglePageProject</Link></p>
        </div>
    )
}

export default Home;