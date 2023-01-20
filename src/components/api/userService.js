import {axiosSevice} from "./axiosSrvice";

const userService={
    getAll:()=>axiosSevice.get('/users'),
    getById:(id)=>axiosSevice.get(`/users/${id}`)
}
export {
    userService
}