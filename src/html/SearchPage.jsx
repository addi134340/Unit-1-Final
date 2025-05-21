import { Link } from 'react-router-dom';
import BackButton from "../components/BackBtn";
import mockData from "../components/Mock";

export default function Search() {
  return (
    <div className="SearchPage">
      <div className="search-section">
        <BackButton />
        <form className="search-form">
          <input type="text" id="search" name="search" placeholder="Search books..." />
          <button type="submit" id="submitBtn">Search</button>
        </form>
      </div>
      
      {/* Mapping through mockData */}
      {mockData.map((item) => (
        <div key={item.book.id} className="search-results">
          <img
            src={item.book.coverImage}
            alt={item.book.title}
            className="book-image"
          />
          <div className="book-info">
            <h3>{item.book.title}</h3>
            <p>{item.book.author}</p>
            <p>{item.book.description}</p>
            <button>Add</button>
            <Link to="/details">
                <button>Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
