import React, { useEffect, useState } from 'react';
import { getLibrary } from "./GetLibrary";
import { Link } from 'react-router-dom';
import BackButton from '../Buttons/BackBtn';

const MyLibrary = () => {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        const savedBooks = getLibrary();
        setLibrary(savedBooks);
    }, []);

    return (
        <div>
            <h1>My Library</h1>
            <BackButton />
            {library.length === 0 ? (
                <p>You haven't added any books yet!</p>
            ) : (
                library.map((book) => {
                    const info = book.volumeInfo;
                    return (
                        <div key={book.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                            <h2>{info.title}</h2>
                            {info.authors && <p> {info.authors.join(', ')}</p>}
                            {info.imageLinks?.thumbnail && (
                                <img src={info.imageLinks.thumbnail} alt={info.title }/>
                            )}
                            <Link to="/details">
                                <button type="button">More Details</button>
                            </Link>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default MyLibrary;