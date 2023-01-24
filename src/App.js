import {Users} from "./Components";
import {UsersForm} from "./Components/UsersForm";
import {useEffect, useState} from "react";
import {userService} from "./Api";



const App = () => {
    const [users, setUsers] = useState([]);


    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers([...data]))

    },[])






    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
};

export {App};