import React from 'react';
// import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home';
import TvShows from './Component/Router/TvShows';
function App() {
  return (
    <div className='app-contain' >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>

  );
}

export default App