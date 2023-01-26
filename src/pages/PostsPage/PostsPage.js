import {Posts} from '../../components'
import {useParams} from "react-router-dom";

const PostsPage = () => {
const {postId} = useParams();



return (
       <div>


         <Posts postId={postId}/>



        </div>
    );
};



export {PostsPage};