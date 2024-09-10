import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { fetchUsers } from './redux/userSlice';
import UserTable from '../src/components/UserTable';
import SearchBar from '../src/components/SearchBar'
import { AppDispatch } from './redux/store';
import './styles/App.css';

function App() {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

  return (
    <div className='app'>
      <h1>User Management</h1>
      <SearchBar />
      <UserTable/>
    </div>
  );
}

export default App;
