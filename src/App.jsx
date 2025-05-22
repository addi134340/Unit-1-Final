import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './html-css/HomePage';
import BookSearch from './components/API/GoogleBooksAPI';
import MyLibrary from './components/Library/MyLibrary';
import DetailsPage from './html-css/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<PageOne />} />
        
        <Route path="/search" element={<BookSearch />} />

        <Route path="/library" element={<MyLibrary />} />

        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
