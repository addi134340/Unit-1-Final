import { Link } from 'react-router-dom';
import Echos from '../assets/Echos.png';
import './HomePage.css';


export default function PageOne () {


    return (
        <div className="entire">
            <section className="header">
                <header>
                    <img src={Echos} alt="logo" id="logo"></img>
                    <h2>Echos & Ink</h2>
                </header>
                <hr></hr>
            </section>
            <section className="mainBody">
                <h1>Echos & Ink</h1>
                <p>Pair your stories with the perfect soundtrack.</p>
            </section>
            <section className="buttons">
                <Link to="/search">
                    <button type="button" id="getStarted" >Get Started</button>
                </Link>
                <Link to="/library">
                    <button type="button" id="viewLibrary">View Library</button>
                </Link>
            </section>
        </div>
    );
}


