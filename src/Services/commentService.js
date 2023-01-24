import {axiosService} from "./axiosService";

const commentService={
    getAll:()=>axiosService.get(`/comments`),
    create:(newComment)=>axiosService.post(`/comments`,newComment)
}
export {commentService}