import React from 'react';
// import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home';

import MovieState from './Context/MovieState';
import Upcoming from './Component/Router/Upcoming';
function App() {
  return (
    <div className='app-contain' >
      <MovieState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/upcoming' element={<Upcoming />} />
        </Routes>
      </Router>
      </MovieState>
    </div>

  );
}

export default App