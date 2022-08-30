import {  useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';



const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }


    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search for movies"
                type="text" 
                />
                <img 
                src={SearchIcon} 
                alt="img" 
                onClick={() => searchMovies(search)}
                />
            </div>

                    { movies?.length > 0
                        ? (
                        <div className="container">
                        {movies.map((movie) => (
                        <MovieCard movie={movie} />
                         ))}
                         </div>
                        ) : (
                         <div className="empty">
                             <h2>No Movies found :(</h2>
                         </div>
                        )
                    };

         </div>
     );
    };
export default App;