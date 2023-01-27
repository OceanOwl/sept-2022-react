import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const navigate = useNavigate();


    const {postId, id, email, body} = comment

    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={() => navigate(postId.toString())}>Show current post</button>
        </div>
    );
};

export {Comment};