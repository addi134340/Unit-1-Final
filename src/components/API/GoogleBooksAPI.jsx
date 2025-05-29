import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../html-css/SearchPage.css';
import BackButton from '../Buttons/BackBtn';
import { addToLibrary } from '../Library/LibraryButtons/addToLibrary';
import Header from '../Header/Footer/Header';


const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const API_KEY = 'AIzaSyB1Ha0AJPN0qU4V6AyVL6NkQzOJR9Pg6m0';

    const searchBooks = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10&key=${API_KEY}`
        );
        const data = await response.json();
        return data.items || []; 
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        const results = await searchBooks(); 
        setBooks(results);
        setLoading(false);
        setHasSearched(true);
    };


    

    return (
        <div className="entire-search">
            <Header title="Book Search"/>
            <BackButton />
            <form onSubmit={handleSubmit} className={hasSearched ? 'search-bar top' : 'search-bar center'}>
                <input
                type="text"
                placeholder="Search for a book..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            <div className='another-div'>
                {books.map((book) => {
                const info = book.volumeInfo;
                return (
                        <div key={book.id} className="book-result">
                            <h2>{info.title}</h2>
                            {info.authors && <p>By {info.authors.join(', ')}</p>}

                            <div className="img-button-wrapper">
                                {info.imageLinks && (
                                <img src={info.imageLinks.thumbnail} alt={info.title} />
                                )}
                                <div className="extra-buttons">
                                <Link to={`/details/${book.id}`}>
                                    <button type="button">Details</button>
                                </Link>
                                <Link to={`/playlist/${book.id}`}>
                                    <button>View Playlist</button>
                                </Link>
                                <button onClick={() => addToLibrary(book)}>Add to Library</button>
                                </div>
                            </div>

                            <p>{info.description?.slice(0, 200)}...</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BookSearch;