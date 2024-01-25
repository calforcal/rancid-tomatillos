import { useEffect, useState } from 'react'
// import { Routes, Route } from 'react-router-dom';
import './App.css'
import movieData from './movieData'
import NavButton from './NavButton/NavButton'
import MovieCard from './MovieCard/MovieCard'
import MovieDetailsCard from './MovieDetailsCard/MovieDetailsCard'

function App() {
  const [selectedButton, setSelectedButton] = useState()
  const [selectedMovie, setSelectedMovie] = useState()
  const [movies, setMovies] = useState()

  function handleClickMovie(movie_id) {
    if (movie_id) {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie_id}`)
      .then(response => response.json())
      .then(data => {
        setSelectedMovie(data.movie)
        // document.getElementsByTagName("body").style.backgroundImage = `${data.movie.backdrop_path}`
      })
      .catch(err => alert(err))
    }
    else {
      setSelectedMovie();
    }
  };

  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }

  useEffect(() => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(data => setMovies(data.movies))
    .catch(err => alert(err))
  }, []);

  return (
    <div className='main'>
      <NavButton isSelected={selectedButton === "all"} onSelect={()=>handleSelect('all')}>All Movies</NavButton>
      <NavButton isSelected={selectedButton === "favorites"} onSelect={()=>handleSelect('favorites')}>Favorites</NavButton>
      <NavButton isSelected={selectedButton === "top-picks"} onSelect={()=>handleSelect('top-picks')}>Top Picks</NavButton>
      <NavButton isSelected={selectedButton === "new"} onSelect={()=>handleSelect('new')}>New</NavButton>
      {selectedMovie == null && movies
      ? <div className='movie-cards-container'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} onClick={() => {handleClickMovie(movie.id)}} />
          ))}
        </div>
      : <MovieDetailsCard {...selectedMovie} onClick={() => {handleClickMovie()}}/>
      }
    </div>
  );
}

export default App;
