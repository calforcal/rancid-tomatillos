import { useState } from 'react'
import './App.css'
import movieData from './movieData'
import NavButton from './NavButton/NavButton'
import MovieCard from './MovieCard/MovieCard'

function App() {
  const [selectedButton, setSelectedButton] = useState()

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
      <div className='movie-cards-container'>
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
