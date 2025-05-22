import { Link } from 'react-router-dom';
import Echos from '../assets/Echos.png'
import BackButton from '../components/Buttons/BackBtn';

export default function Library() {

    return (
        <>
        <section className="header">
            <header>
                <img src={Echos} alt="logo" id="logo"></img>
                <h2>Your Library</h2>
            </header>
            <BackButton />
        </section><div class="book-list">
                <div class="book-item">
                    <img src="https://covers.openlibrary.org/b/id/8231996-L.jpg" alt="The Night Circus" class="book-cover" />
                    <div class="book-details">
                        <h3>The Night Circus</h3>
                        <p>by Erin Morgenstern</p>
                        <Link to="/details">
                            <button class="view-details-btn">View Details</button>
                        </Link>
                        <button type="button" id="Remove" name="remove">Remove</button>
                    </div>
                </div>

                <div class="book-item">
                    <img src="https://covers.openlibrary.org/b/id/10958347-L.jpg" alt="Daisy Jones & The Six" class="book-cover" />
                    <div class="book-details">
                        <h3>Daisy Jones & The Six</h3>
                        <p>by Taylor Jenkins Reid</p>
                        <Link to="/details">
                            <button class="view-details-btn">View Details</button>
                        </Link>
                    </div>
                </div>
            </div><div className="library-buttons">
                <button type="button" id="view-playlist" name="view-playlist">View Playlists</button>
                <button type="button" id="Add Books" name="Add Books">Add Books</button>
            </div>
        </>
    );

}