import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {

const {postId,id,email,body}=comment

    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <Link to={postId.toString()}>Show current post</Link>
        </div>
    );
};

export {Comment};