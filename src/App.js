import React, { useEffect, useState } from "react";
import './App.css'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';
const App = () => {
    
    const  [movies, setMovies] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }
useEffect(() => {
    searchMovies('2010')
}, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                onChange={(event) => {
                    
                }} 
                placeholder="Search for movies"
                />
               <img src="https://www.freeiconspng.com/uploads/search-icon-png-31.png" width="350" alt="Drawing Vector Search" onClick={() => {}} />
            </div>

            <div className="container">
                <MovieCard movie1={movies[7]} />
            </div>
            
         </div>
     );
    };
export default App;