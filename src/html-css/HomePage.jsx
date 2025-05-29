import { Link } from 'react-router-dom';
import BookOne from '../assets/book_1.png'
import BookTwo from '../assets/book_2.png'
import BookThree from '../assets/book_3.png'
import BookFour from '../assets/book_4.png'
import BookFive from '../assets/book_5.png'
import BookSix from '../assets/book_6.png'
import BookSeven from '../assets/book_7.png'
import BookEight from '../assets/book_8.png'
import './HomePage.css';
import GetStartedBtn from '../components/Buttons/GetStartedBtn';
import Header from '../components/Header/Footer/Header';

export default function PageOne () {


    return (
        <>
        <div className="entire">
            <section>
                <Header title="Echos & Ink" /> 
            </section>
            <div className="carosel-with-text">
                <div className="weirdCaroselThing">
                    <div className="slider" style={ { "--quantity": 8} }>
                        <div className="item" style={ { "--position": 1} }><img src={BookEight} alt="Kingdom of Ash"/></div>
                        <div className="item" style={ { "--position": 2} }><img src={BookSeven} alt="Tower of Dawn"/></div>
                        <div className="item" style={ { "--position": 3} }><img src={BookSix} alt="Empire of Storms"/></div>
                        <div className="item" style={ { "--position": 4} }><img src={BookFive} alt="Queen of Shadows"/></div>
                        <div className="item" style={ { "--position": 5} }><img src={BookFour} alt="Heir of Fire"/></div>
                        <div className="item" style={ { "--position": 6} }><img src={BookThree} alt="Crown of Midnight"/></div>
                        <div className="item" style={ { "--position": 7} }><img src={BookOne} alt="Throne of Glass"/></div>
                        <div className="item" style={ { "--position": 8} }><img src={BookTwo} alt="Assassin's Blade"/></div>
                    </div>
                </div>
                <div className="mainBody">
                    <h1>Echos & Ink</h1>
                    <p>Pair your stories with the perfect soundtrack.</p>
                </div>
            </div>
            <section className="buttons">
                <GetStartedBtn />
                <Link to="/library">
                    <button type="button" className="viewLibrary">View Library</button>
                </Link>
            </section>
        </div>
        </>
    );
}


