// "use client";
// import axios from "axios";
// import Link from 'next/link'
// const page = () => {
//   const [username, Setusername] = useState("");
//   return (
//     <>
//       <h1>Enter Your Name :</h1>
//       <form>
//         <input
//           type="text"
//           className="border-2 px-4 py-2 text-xl border-zinc-800"
//           value={username}
//           onChange={(e)=>{
//             Setusername(e.target.value)
//                     }}
//         />
//       </form>
//     </>
//   );
// };
//
// const page = () => {
//   const [users,setusers] = useState([])
//   const [isLoaded, setIsLoaded] = useState(false); // Add a loading state
//   const getUsers = async() =>{
//     const { data }= await axios.get("https://jsonplaceholder.typicode.com/users")
//     setusers(data)
//     setIsLoaded(true)
//   }
//   useEffect(() => {
//     //This helps in calling the function every time so you don't call it
//     getUsers()
//   },[])
//   return (
//     <>
//       <button onClick={getUsers} className="bg-green-400 text-2xl text-white px-2 py-3 rounded">
//         Get Page
//       </button>
//       <div className="p-8 mt-5 bg-slate-100">
//         <ul>
//           {isLoaded ? (
//             users.map((user) => (
//               <li key={user.id}>
//                 {user.name} --- <a href={`/${user.id}`}>Explore</a>
//                 {/* This above line helps us to create3 a href link to connect ot id component */}
//               </li>
//             ))
//           ) : (
//             <li>Loading...</li> // Display loading state
//           )}
//         </ul>
//       </div>
//     </>
//   );
// };


// export default page;
// Context api
// "use client";
// import { MyContext } from "@/Helper/Context";
// import Header from "@/app/Components/Header";
// import React, { useContext, useState } from "react";
// const page = () => {
//   const user = useContext(MyContext);
//   // const [num,setnum] = useState(10)
//   return (
//     <div>
//       Coding Skills
//       <Header />
//       {user}
//     </div>
//   );
// };
// export default page;
// "use client";
// import { ClientPageRoot } from "next/dist/client/components/client-page";
// import React from "react";
// import { ToastContainer, toast,Bounce  } from 'react-toastify';


// import 'react-toastify/dist/ReactToastify.css';
// const page = () => {
//   const notify = () =>{
//     toast.success('🦄 Wow so easy!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       transition: Bounce,
//       });
//   }
//   return (
//     <div>
//       <button onClick={notify} className="pl-2.5 pr-2.5 pt-1.5 pb-1.5 ml-3 mt-4 border-4 border-black bg-green-400 font-semibold">
//         Login
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };
// export default page;
//Server side Rendering vs Client side Rendering
// "use client"
// import axios from "axios"
// import React, { useState } from "react"
// const page = () =>{
//   const [data,setData] = useState("")
//   const [num,setnum] = useState(10)
//   const getData = async () =>{
//     const response = await axios.get("https://picsum.photos/v2/list")
//     setData(JSON.stringify(response.data));
//   }
//   return(
//     <div>
//       <button onClick={getData} className="pl-2.5 pr-2.5 pt-1.5 pb-1.5 border-black border-2">Click</button>
//       <br/>
//       {data}
//     </div>
//   )
// }
// export default page
// Deployement
import React from "react"
const page = () =>{
  return(
    <div>
      Deployment
    </div>
  )
}
export default page;