// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";


// const page = ({ params }) => {
//   const { id } = params;
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const getUsers = async () => {
//     setLoading(true);
//     const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
//     setUsers(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div>{JSON.stringify(users.address)}</div>
//       )}
//     </>
//   );
// };

// export default page;