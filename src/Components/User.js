import React from 'react';

const User = ({user}) => {
    const {id, name, username,phone} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>phone:{phone}</div>
        </div>
    );
};

export {User};