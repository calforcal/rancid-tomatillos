import "./MovieDetailsCard.css"

function MovieDetailsCard(props) {
  return (
    <>
      <div className="selected-movie-container">
        <div className="movie-details">
          <h3>Click Image to close</h3>
          <img src={props.poster_path} onClick={props.onClick}/>
          <p>Title: {props.title}</p>
          <p>Average Rating: {props.average_rating}</p>
          <p>Release Date: {props.release_date}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsCard;