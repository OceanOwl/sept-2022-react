import {axiosService} from "./axiosService";

const postsService={
    getById:(id)=>axiosService.get(`/posts/${id}`)
}
export {postsService}