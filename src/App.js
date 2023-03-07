import { useState } from "react";
import { Title } from "./components/Header";
import { Input } from "./components/Input";
import { MovieCard } from "./components/MovieCard";
import "./styles.css";
import axios from "axios";

function App() { 
    const [movie, setMovie] = useState();

    function CallMovieResult(title) {
        axios.get(`http://www.omdbapi.com/?apikey=de92d68e&t=${title}`)
        .then((response) => {
            console.log(response.data);
            setMovie(response.data);
        });
  }
    
    return(
        <div className="main-container">
            <Title />
            <Input movieResult={CallMovieResult}/> 
            <br />
            <MovieCard titulo = {movie && movie.Title} sinopse = {movie && movie.Plot} atores = {movie && movie.Actors} avaliacao = {movie && movie.imdbRating} poster = {movie && movie.Poster}/>
        </div>
            
    )
}

export default App;