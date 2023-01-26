import {axiosService} from "./axiosService";

const postsService={
    getAll:()=>axiosService.get('/posts'),
    getById:(id)=>axiosService.get(`/posts/${id}`)
}
export {postsService}