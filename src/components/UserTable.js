import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch(err){
                console.error('Error:-',err);
            }
        };
        fetchUsers();
    }, []);
    return(
        <table>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                       <td>{user.id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td>{user.phone}</td>
                       <td>{user.website}</td>
                       <td>{user.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;