import Echos from '../assets/Echos.png'
import BackButton from '../components/BackBtn';

export default function() {

    return (
        <>
        <div className="header">
            <img src={Echos} alt="logo" id="logo"></img>
            <h2>Book Details</h2>
            <BackButton />
        </div>
        <div className="book-section">
            <img src="https://covers.openlibrary.org/b/id/10958347-L.jpg" alt="Daisy Jones & The Six" class="book-cover" />
            <div className="book-details">
                <h3>Title: Daisy Jones & The Six</h3>
                <p>Author: Taylor Jenkins Reid</p>
                <p>Genres: Historical Fiction, Saga</p>
                <p>Pages: 368</p>
            </div>
            <div className="description">
                <h4>
                    The book tells the story of the rise and fall of a fictional rock band in the 1970s through a series of 
                    interviews with the band members, their friends, and family. The novel follows the story of Daisy Jones, 
                    an aspiring and hopeful singer-songwriter who is discovered in the late 1960s in Los Angeles.
                </h4>
            </div>
            <hr></hr>
            <div className="playlist">
                <h2>Your Playlist</h2>
                <p><i>"The Folk of the Air"</i></p>
            </div>
            <div className="playlist-button">
                <button type="button" id="playlist-button" name="playlist-button">View Playlist</button>
            </div>
        </div>
        </>
    );
}