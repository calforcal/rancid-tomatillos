import "./MovieDetailsCard.css"

function MovieDetailsCard(props) {
  return (
    <>
      <div className="selected-movie-container">
        <div className="movie-details">
          <h3>Click Image to close</h3>
          <img src={props.poster_path} onClick={props.onClick}/>
          <p>Title: {props.title}</p>
          <p>Tagline: {props.tagline}</p>
          <p>Average Rating: {props.average_rating}/5</p>
          <p>Release Date: {props.release_date}</p>
          <p>Overview: {props.overview}</p>
          <p>Revenue: {props.revenue}</p>
          <p>Runtime: {props.runtime}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsCard;