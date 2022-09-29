import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'


function AllRoutes(){
    return(
        <>
        <Navbar />

        <Routes>
            <Route path='' element={<Home />}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
        </>

    )
}
export default AllRoutes