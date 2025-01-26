// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// function useProducts() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   let unmounted = false;

//   useEffect(() => {
//     async function getProducts() {
//       try {
//         setLoading(true);
//         let res = await axios.get("users");
//         if (unmounted) return;
//         if (res.status === 200) {
//           setProducts(res.data);
//         }
//       } catch (error) {
//         toast(error.message, { type: "error" });
//       } finally {
//         setLoading(false);
//       }
//     }
//     getProducts();

//     return () => {
//       unmounted = true;
//     };
//   }, []);

//   return [products, loading];
// }

// export default useProducts;
