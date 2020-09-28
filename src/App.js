import React, { useEffect, useState } from 'react';
import Movie from './components/movie';
import './App.css';

const FEATURE_API = "https://api.themoviedb.org/3/movie/popular?api_key=b61ae976e6b11dcd7cf47340b7ede6fc&language=en-US&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=b61ae976e6b11dcd7cf47340b7ede6fc&language=en-US&query=";


function App() {
    const [movies, setmovies] = useState([]);
    const [search, setsearch] = useState("");
    const getMovies = (api) => {
        fetch(api).then(res => res.json()).then(data => {
            setmovies(data.results)
        })
    }

    useEffect(() => {
        getMovies(FEATURE_API)
    }, []);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            getMovies(`${SEARCH_API}${search}`)
            setsearch("")
        }
        console.log(search);
    }

    const onHandleChange = (e) => {
        setsearch(e.target.value)
    }

    return (

        <div className="App">
            <header className="header">
                <form onSubmit={onHandleSubmit}>
                    <input type="search" placeholder="Search..." className="search" value={search} onChange={onHandleChange} />
                </form>

            </header>
            <div className="movie-container">
                {movies.length > 0 && movies.map((movie, index) => {
                    return (
                        <Movie
                            key={index}
                            movie={movie}
                        />
                    )
                })}
            </div>
        </div>

    );
}

export default App;
