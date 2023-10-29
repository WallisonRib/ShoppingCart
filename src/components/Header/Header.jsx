import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './Header.css';
import { Link } from 'react-router-dom';
function Header() {

    return (
        <header className="header">
            <div className="container">
                <Link to="/" >             
                      <div className="logo" />
                </Link>

                <SearchBar />
                <CartButton />
            </div>
        </header>
    );
}
export default Header;