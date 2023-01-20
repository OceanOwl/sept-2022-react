import {useEffect, useState} from "react";
import {axiosService} from "./components/api/axiosService";

const App = () => {
    const [year, setYear]=useState([])
    useEffect(()=>{
        axiosService.get('')
            .then(value=>value.data)
            .then(value=>setYear([...value]))




    },[])
    return (
        <div>
            {year.filter(item=>item.launch_year !=='2020').map(item=>{
                return(
                    <div key={item.flight_number}>
                        {item.flight_number} {item.mission_name} {item.launch_year}
                    </div>
                )


            })}
        </div>
    );
};

export {App};