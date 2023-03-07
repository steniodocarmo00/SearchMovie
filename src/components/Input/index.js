import { useState } from "react"
import "./styles.css"

export function Input(props){

    const [searchMovie, setsearchMovie] = useState()

    function movieResult(e) {
        e.preventDefault()
        console.log(searchMovie)
        props.movieResult(searchMovie)
    }

    function newVar(e) {
        setsearchMovie(e.target.value)
    }

    return(
        <form className="form-container">
            <input value={searchMovie} onChange={newVar} className="form-input" type="text" placeholder="Pesquisar Filme"></input>
            <button className="form-search" onClick={movieResult}>Pesquisar</button>
            <button className="form-reset">Resetar</button>
        </form>
    )
}