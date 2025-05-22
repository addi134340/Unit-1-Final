import '../../../html-css/Header.css'
import Echos from '../../../assets/Echos.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <div className="header">
            <header>
                <img src={Echos} alt="logo" id="logo"></img>
                <h2>Echos & Ink</h2>
                <nav>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/"></NavLink>
                </nav>
            </header>
        </div>
    ); 
};