import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

const Post = ({post}) => {
    const {id, title, body} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>dispatch(postActions.setSelectedPost(post))}>select post</button>
        </div>
    );
};

export {Post};