import { BsSearch } from 'react-icons/bs'
import { useState } from 'react';

import './SearchBar.css'

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <form className='search-bar'>
            <input
                className='search_input'
                type="search"
                placeholder='Buscar Produtos'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required />
            { searchValue }
            <button
                type='submit'
                className='search_button'> <BsSearch />

            </button>

        </form>
    );
}

export default SearchBar;