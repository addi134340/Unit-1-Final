import React, { useEffect, useState } from 'react';
import { getLibrary, removeFromLibrary } from "./GetLibrary";
import RemoveButton from './LibraryButtons/RemoveBtn';
import { Link } from 'react-router-dom';
import BackButton from '../Buttons/BackBtn';
import Header from '../Header/Footer/Header';
import '../../html-css/Library.css';

const MyLibrary = () => {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        const savedBooks = getLibrary();
        setLibrary(savedBooks);
    }, []);

    const handleRemove = (bookId) => {
        removeFromLibrary(bookId);
        setLibrary(getLibrary());
    }

    return (
        <>
            <Header title="My Library" />
            <BackButton />
            <div className="library-page">
                {library.length === 0 ? (
                <div className="empty-library-message">
                    <p>You haven't added any books yet!</p>
                    <Link to="/search">
                        <button type="button" className="add-books-button">Add Books!</button>
                    </Link>
                </div>
                ) : (
                library.map((book) => {
                    const info = book.volumeInfo;
                    return (
                        <div key={book.id} className="library-book-card">
                        {info.imageLinks?.thumbnail && (
                        <img src={info.imageLinks.thumbnail} alt={info.title} />
                    )}
                    <h2>{info.title}</h2>
                    {info.authors && <p>By {info.authors.join(', ')}</p>}
                    <Link to={`/details/${book.id}`}>
                        <button type="button">More Details</button>
                    </Link>
                    <RemoveButton bookId={book.id} onRemove={handleRemove} />
                    </div>
                    );
                    })
                )}
            </div>
        </>
    );
}

export default MyLibrary;