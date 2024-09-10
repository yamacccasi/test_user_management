import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/userSlice';

const SearchBar = () => {

    const dispatch = useDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(setSearchTerm({ [name]: value }));
    };

    return (
        <div>
            <input name="name" placeholder="Search by name" onChange={handleInputChange} />
            <input name="username" placeholder="Search by username" onChange={handleInputChange} />
            <input name="email" placeholder="Search by email" onChange={handleInputChange} />
            <input name="phone" placeholder="Search by phone" onChange={handleInputChange} />
        </div>
    );
};

export default SearchBar;