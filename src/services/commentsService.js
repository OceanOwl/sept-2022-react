import {axiosService} from "./axiosService";

const commentsService={
    getAll:()=>axiosService.get('/comments'),
    getById:(postId)=>axiosService.get(`/comments/${postId}`)
}
export {commentsService}