import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";

const Post = ({id}) => {



    const [post, setPost] = useState(null);


    useEffect(() => {
        postsService.getById(id).then(({data}) => setPost(data))
    }, [id])



    return (
        <div>
            {post &&
                <>
                    <div>id:{post.id}</div>

                    <div>title:{post.title}</div>
                </>
            }
        </div>
    );
};
export {Post};