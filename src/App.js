import {Comments} from "./Components/Comments";
import {CommentForm} from "./Components/CommentForm";
import {useEffect, useState} from "react";
import {commentService} from "./Services";


const App = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentService.getAll().then(({data})=>setComments([...data]))
    },[])




    return (
        <div>
        <CommentForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export {App};