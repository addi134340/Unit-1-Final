import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GenrePlaylists } from '../PlaylistStuff/GenrePlaylists';
import Header from '../Header/Footer/Header';
import BackButton from '../Buttons/BackBtn';

const BookPlaylist = () => {
  const { bookId } = useParams();
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenre = async () => {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      const data = await res.json();
      
      const rawGenre = data.volumeInfo?.categories?.[0] || 'Nonfiction';
      const normalizedGenre = rawGenre.toLowerCase();

      const matchedGenreKey = Object.keys(GenrePlaylists).find(
        (key) => key.toLowerCase() === normalizedGenre
      );

      setGenre(matchedGenreKey || 'Nonfiction');
      setLoading(false);
    };

    fetchGenre();
  }, [bookId]);

  if (loading) return <p>Loading playlist...</p>;

  const playlistUrl = GenrePlaylists[genre];

  return (
    <div>
        <Header title="Playlist"/>
        <BackButton />
      <h2>{genre} Playlist</h2>
      <iframe
        src={playlistUrl}
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`${genre} Playlist`}
      ></iframe>
    </div>
  );
};

export default BookPlaylist;