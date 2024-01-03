import { useState } from 'react'
import './App.css'
import movieData from './movieData'
import NavButton from './NavButton/NavButton'

function App() {
  const [selectedButton, setSelectedButton] = useState()

  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }

  const movies = movieData.movies
  return (
    <>
      <NavButton isSelected={selectedButton === "all"} onSelect={()=>handleSelect('all')}>All Movies</NavButton>
      <NavButton isSelected={selectedButton === "favorites"} onSelect={()=>handleSelect('favorites')}>Favorites</NavButton>
      <NavButton isSelected={selectedButton === "top-picks"} onSelect={()=>handleSelect('top-picks')}>Top Picks</NavButton>
      <NavButton isSelected={selectedButton === "new"} onSelect={()=>handleSelect('new')}>New</NavButton>
      {movies.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </>
  );
}

export default App;
