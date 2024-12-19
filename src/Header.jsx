import { Link } from "react-router-dom";


import './index.css';

function Header() {

    return (


        <div className="headerbox">
            <div className="card1"><Card /></div>


            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default Header;