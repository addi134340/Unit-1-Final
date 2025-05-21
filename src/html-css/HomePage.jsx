import { Link } from 'react-router-dom';
import Echos from '../assets/Echos.png';
import BookOne from '../assets/book_1.png'
import BookTwo from '../assets/book_2.png'
import BookThree from '../assets/book_3.png'
import BookFour from '../assets/book_4.png'
import BookFive from '../assets/book_5.png'
import BookSix from '../assets/book_6.png'
import BookSeven from '../assets/book_7.png'
import BookEight from '../assets/book_8.png'
import './HomePage.css';

export default function PageOne () {


    return (
        <>
        <div className="entire">
            <section className="header">
                <header>
                    <img src={Echos} alt="logo" id="logo"></img>
                    <h2>Echos & Ink</h2>
                </header>
            </section>
            <div className="carosel-with-text">
                <div className="weirdCaroselThing">
                    <div className="slider" style={ { "--quantity": 8} }>
                        <div className="item" style={ { "--position": 1} }><img src={BookEight} alt="book cover"/></div>
                        <div className="item" style={ { "--position": 2} }><img src={BookSeven} alt="book cover"/></div>
                        <div className="item" style={ { "--position": 3} }><img src={BookSix} alt="book cover"/></div>
                        <div className="item" style={ { "--position": 4} }><img src={BookFive} alt="book cover"/></div>
                        <div className="item" style={ { "--position": 5} }><img src={BookFour} alt="book cover"/></div>
                        <div className="item" style={ { "--position": 6} }><img src={BookThree} alt="book cover"/></div>
                        <div className="item" style={ { "--position": 7} }><img src={BookOne} alt="book cover"/></div>
                        <div className="item" style={ { "--position": 8} }><img src={BookTwo} alt="book cover"/></div>
                    </div>
                </div>
                <div className="mainBody">
                    <h1>Echos & Ink</h1>
                    <p>Pair your stories with the perfect soundtrack.</p>
                </div>
            </div>
            <section className="buttons">
                <Link to="/search">
                    <button type="button" className="getStarted" >Get Started</button>
                </Link>
                <Link to="/library">
                    <button type="button" className="viewLibrary">View Library</button>
                </Link>
            </section>
        </div>
        </>
    );
}


