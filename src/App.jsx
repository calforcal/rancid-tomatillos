import { useState } from 'react'
import './App.css'
import movieData from './movieData'
import NavButton from './NavButton/NavButton'
import MovieCard from './MovieCard/MovieCard'
import MovieDetailsCard from './MovieDetailsCard/MovieDetailsCard'

function App() {
  const [selectedButton, setSelectedButton] = useState()
  const [selectedMovie, setSelectedMovie] = useState()

  function handleClickMovie(movie) {
    setSelectedMovie(movie);
  }

  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }

  const movies = movieData.movies
  return (
    <div className='main'>
      <NavButton isSelected={selectedButton === "all"} onSelect={()=>handleSelect('all')}>All Movies</NavButton>
      <NavButton isSelected={selectedButton === "favorites"} onSelect={()=>handleSelect('favorites')}>Favorites</NavButton>
      <NavButton isSelected={selectedButton === "top-picks"} onSelect={()=>handleSelect('top-picks')}>Top Picks</NavButton>
      <NavButton isSelected={selectedButton === "new"} onSelect={()=>handleSelect('new')}>New</NavButton>
      {selectedMovie == null
      ? <div className='movie-cards-container'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} onClick={() => {handleClickMovie(movie)}} />
          ))}
        </div>
      : <MovieDetailsCard {...selectedMovie} onClick={() => {handleClickMovie()}}/>
      }
    </div>
  );
}

export default App;
