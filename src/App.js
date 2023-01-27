import React from 'react';
// import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home';
import TvShows from './Component/Router/TvShows';
import MovieState from './Context/MovieState';
function App() {
  return (
    <div className='app-contain' >
      <MovieState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
        </Routes>
      </Router>
      </MovieState>
    </div>

  );
}

export default App