import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './html/HomePage';
import Search from './html/SearchPage';
import Library from './html/Library';
import DetailsPage from './html/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<PageOne />} />
        
        <Route path="/search" element={<Search />} />

        <Route path="/library" element={<Library />} />

        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
