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
        <div>
            <Header title="My Library" />
            <BackButton />
            <div className="library-page">
            {library.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'white'}}>You haven't added any books yet!</p>
            ) : (
                library.map((book) => {
                    const info = book.volumeInfo;
                    return (
                        <div key={book.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                            {info.imageLinks?.thumbnail && (
                                <img src={info.imageLinks.thumbnail} alt={info.title }/>
                            )}
                            <h2>{info.title}</h2>
                            {info.authors && <p> {info.authors.join(', ')}</p>}
                            <Link to="/details">
                                <button type="button">More Details</button>
                            </Link>
                            <RemoveButton bookId={book.id} onRemove={handleRemove}/>
                        </div>
                    );
                })
            )}
            </div>
        </div>
    );
}

export default MyLibrary;