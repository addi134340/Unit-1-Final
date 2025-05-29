import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './html-css/HomePage';
import BookSearch from './components/API/GoogleBooksAPI';
import MyLibrary from './components/Library/MyLibrary';
import AboutUs from './html-css/AboutUs';
import BookDetails from './components/Details/DetailPage';
import BookPlaylist from './components/PlaylistStuff/BookPlaylist';
import './html-css/Media.css'

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<PageOne />} />

        <Route path="/about" element={<AboutUs />} />
        
        <Route path="/search" element={<BookSearch />} />

        <Route path="/library" element={<MyLibrary />} />

        <Route path="/details/:bookId" element={<BookDetails />} />

        <Route path="/playlist/:bookId" element={<BookPlaylist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
