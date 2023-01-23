import {axiosService} from "./AxiosService";


const userService={
    getAll:()=>axiosService.get(`/users`),
    create:(newUser)=>axiosService.post(`/users`, newUser)
}
export {
    userService
}