import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";

const CurrentPost = ({postId}) => {

    const [post,setPost] = useState(null);


    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPost(data))
    },[postId])


    return (
        <div>
            {post&&
                <>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </>


            }
        </div>
    );
};

export {CurrentPost};