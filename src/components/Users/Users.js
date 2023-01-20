import React, {useEffect, useState} from 'react';
import {User} from "../User/User";
import {userService} from "../api/userService";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]));
    }, [])

    return (
        <div>
            <h1>User details:</h1>
            {userDetails && <User user={userDetails}/>}
            <hr/>


            <h1>Users:</h1>
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};
export {Users}
