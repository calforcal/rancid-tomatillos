import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import movieData from './movieData'

function App() {
  const movies = movieData.movies
  return (
    <>
      {movies.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </>
  );
}

export default App;
