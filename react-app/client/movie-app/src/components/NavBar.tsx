import React, {Fragment, useState} from 'react'
import "../styles/NavBar.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Movies from './MoviesDetails'
import MovieInfo from './MovieInfo'



function NavBar(){
    const [search, setSearch]= useState("");
    return (
        <Fragment>
         <Router>
           <nav >
                <div >
                    <Link to={''} state= {{ tab: "movies-in-theaters" }} >
                    <span> Movies in Theater</span>
                    </Link>
                    <Link to={''} state= {{ tab: "movies-coming" }} >
                    <span> Coming Soon</span>
                    </Link>
                    <Link to={''} state= {{ tab: "top-rated-india" }} >
                    <span> Top rated Indian</span>
                    </Link>
                    <Link to={''} state= {{ tab: "top-rated-movies" }} >
                    <span> Top rated </span>
                    </Link>
                    <Link to={''} state= {{ tab: "favourit" }} >
                    <span> Favourites </span>
                    </Link>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </nav>
            
                <Routes>
                        <Route path="" element={<Movies searchValue={search} />} />
                        <Route path="/:MovieName" element={<MovieInfo />} />
                </Routes>
            </Router>
        </Fragment>
    );
}

export default NavBar