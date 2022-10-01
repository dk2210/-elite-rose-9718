import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Career from './Career';
import Job from './job';
import Team from './Team';
import Services from './Services';


function AllRoutes(){
    return(
        <>
        <Navbar />

        <Routes>
            <Route path='' element={<Home />}></Route>
            <Route path='/career' element={<Career />}></Route>
            <Route path='/career/job' element={<Job />}></Route>
            <Route path='/team' element={<Team />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
        </>

    )
}
export default AllRoutes