import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const UserTable = () => {

    const { users, search } = useSelector((state: RootState) => state.users);

    const filteredUsers = users.filter(user => {
        return Object.keys(search).every(key => {
            const userValue = user[key as keyof typeof user]?.toString().toLowerCase() || '';
            const searchValue = search[key as keyof typeof search].toLowerCase();
            return userValue.includes(searchValue);
        });
    });

    return (
        <table className="table table-striped table-hover">
            <thead className="thead-dark">
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {filteredUsers.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserTable;