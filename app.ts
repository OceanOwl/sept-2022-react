//1) створити інтерфейс на основі цього объекта:
// Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
//
// {
//     mission_name: Starlink-15 (v1.0),
//     launch_date_local: 2020-10-24T11:31:00-04:00,
//     launch_site: {
//         site_name_long: Cape Canaveral Air Force Station Space Launch Complex 40
//     },
//     links: {
//         article_link: null,
//         video_link: https://youtu/J442-ti-Dhg
//     },
//     rocket: {
//         rocket_name: Falcon 9,
//         first_stage: {
//             cores: [
//                 {
//                     flight: 7,
//                     core: {
//                         reuse_count: 6,
//                         status: unknown
//                     }
//                 }
//             ]
//         },
//         second_stage: {
//             payloads: [
//                 {
//                     payload_type: Satellite,
//                     payload_mass_kg: 15400,
//                     payload_mass_lbs: 33951.2
//                 }
//             ]
//         }
//     }
// }
interface Payloads {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

interface Links {
    article_link: null,
    video_link: string
}


interface Mission {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links:Links;

    rocket: {
        rocket_name: string,
        first_stage: {
            cores: [
                {
                    flight: number,
                    core: {
                        reuse_count: number,
                        status: string
                    }
                }
            ]
        },
        second_stage: {
            payloads: [Payloads]
        }
    }
}


//
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
//
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
// interface IUser {
//     name:string;
//     age:number;
//     gender:string
//
// }
// const user : Partial<IUser>={name:'Max', age:18,gender:'male'}

//
// function sum(a,b){
//     return a+b
// }


// function showSum(a,b){
//     console.log(a + b);
// }
interface ICalc {
    first: () => number;
    second: () => number

}

class Formules implements ICalc {
    constructor(private a: number, private b: number) {
    }

    first(): number {
        return this.a + this.b;
    }

    second(): number {
        return this.a + this.b;
    }
}

const formules = new Formules(1, 2)
const formules1 = new Formules(2, 3)

console.log(formules.second())
console.log(formules1.first())

//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }

// const incAge=():Function=>{
//
// }
//
// type MyType = ReturnType<incAge>


//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)