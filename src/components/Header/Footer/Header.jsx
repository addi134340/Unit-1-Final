import '../../../html-css/Header.css'
import Echos from '../../../assets/Echos.png';
import { NavLink } from 'react-router-dom';

export default function Header({ title }) {

    return (
        <div className="header">
            <header>
                <img src={Echos} alt="logo" id="logo"></img>
                <h2>{title}</h2>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/search">Book Search</NavLink>
                    <NavLink to="/library">My Library</NavLink>
                    <NavLink to="/playlists">Playlists</NavLink>
                </nav>
            </header>
        </div>
    ); 
};