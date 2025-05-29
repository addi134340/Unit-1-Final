import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Footer/Header';
import BackButton from '../Buttons/BackBtn';
import '../../html-css/DetailPage.css'

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'AIzaSyB1Ha0AJPN0qU4V6AyVL6NkQzOJR9Pg6m0';

  useEffect(() => {
    const fetchBook = async () => {
      if (!bookId) return;
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`
        );
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error('Failed to fetch book:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  if (loading) return <p>Loading...</p>;
  if (!book || !book.volumeInfo) return <p>Book not found.</p>;

  const info = book.volumeInfo;

  return (
    <div className="details-entire">
        <Header title="Details" />
        <BackButton />
        <div className='book-details-container'>
            <h1>{info.title}</h1>
            <div className='book-details-meta'>
                {info.authors && <p>Author(s): {info.authors.join(', ')}</p>}
                {info.imageLinks && <img src={info.imageLinks.thumbnail} alt={info.title} />}
                <div className='book-details-description'>
                    <p><strong>Description: </strong></p>
                    <div dangerouslySetInnerHTML={{ __html: info.description }} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default BookDetails;