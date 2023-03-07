import "./styles.css";

export function MovieCard(props) {
    return (
      <div className="card-movie">
        <div className="card-info">
          <br />
          <h1>{props.titulo}</h1>
          <p>
            {props.sinopse}
          </p>
          <form className="atores">
            <p>{props.atores}</p>
          </form>
          <form className="rating">
            <p>{props.avaliacao}</p>
          </form>
        </div>
        <div className="poster">
          <br />
          <img src={props.poster}></img>
        </div>
      </div>
    );
}
