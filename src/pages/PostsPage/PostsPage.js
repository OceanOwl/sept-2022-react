import {useParams} from "react-router-dom";
import {Post} from "../../components";

const PostsPage = () => {

    const {id} = useParams();


    return (
       <div>
           <Post id={id}/>
        </div>
    );
};



export {PostsPage};