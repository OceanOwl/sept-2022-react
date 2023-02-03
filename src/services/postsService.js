import {axiosService} from "./axiosService";

const postsService = {
    getAll:()=>axiosService.get(`/posts`)
}
export {postsService}