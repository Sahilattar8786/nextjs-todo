
import axios from 'axios';
import React  from 'react';


interface User {
    id:number,
    name:string,
    email:string;
}
// const Page = () => {
//     const[loading,setLoading]=useState(true);
//     const [data,setData]=useState<User[]>([])
//     useEffect(()=>{

//     const fetch=async()=>{
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setLoading(false);
//         setData(response.data);
//     }
//        fetch();
//     },[])

//     if(loading){
//         return (
//             <div>
//                  Loading.......
//             </div>
//         )
//     }
//     return (
//         <div>
//              {
//                data.map((i)=>{
//                  return(
//                     <li key={i.id}>
//                         {i.name}
//                     </li>
//                  )
//                })
//              }
//         </div>
//     );
// }


async function getUser(){
    const response= await axios.get('http://localhost:3000/api/v1/user/details');
    return response.data;
}
 async function Page() {
    
     const userData= await getUser();
     
    return (
        <>
         
          {userData.user}
        </>
    )
 }
export default Page;
