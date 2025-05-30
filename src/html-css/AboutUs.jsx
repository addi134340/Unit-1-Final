import Header from "../components/Header/Footer/Header";
import BackButton from "../components/Buttons/BackBtn";
import Footer from "../components/Header/Footer/Footer";
import '../html-css/AboutUs.css';

function AboutUs() {
  return (
    <>
      <Header title="About Us" />
      <BackButton />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '81vh' }}>
        <main className="all-about" style={{ flex: 1 }}>
          <h1>About Us</h1>
          <p>Hey! Welcome to Echos & Ink!</p>
          <section>
            <h2>What are we?</h2>
            <p>
              Echos & Ink is an app created in React. Our purpose is to store books
              and give the users a playlist based on the genres in the book.
            </p>
            
            <h3>Our Key Features:</h3>
            <ul>
              <li>Store your favorite books easily</li>
              <li>Get personalized playlists by genre</li>
              <li>Discover new authors and music</li>
            </ul>
            
            <h3>Sample Genre-Playlist Matches</h3>
            <table>
              <thead>
                <tr>
                  <th>Genre</th>
                  <th>Suggested Playlist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fantasy</td>
                  <td>Instrumentals</td>
                </tr>
                <tr>
                  <td>Mystery</td>
                  <td>Chilling/Suspenseful</td>
                </tr>
                <tr>
                  <td>Romance</td>
                  <td>Soft Acoustic</td>
                </tr>
                <tr>
                  <td>Sci-Fi</td>
                  <td>Ambient Electronic</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
