import "./MovieCard.css"

function MovieCard(props) {
  return (
    <>
      <div className="movie-card-container">
        <img className="movie-img" src={props.poster_path}/>
      </div>
    </>
  );
}

export default MovieCard;