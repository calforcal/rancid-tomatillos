import "./MovieCard.css"

function MovieCard(props) {
  return (
    <>
      <div className="movie-card-container">
        <img src={props.poster_path} onClick={props.onClick}/>
      </div>
    </>
  );
}

export default MovieCard;