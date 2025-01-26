// import Products from "../../components/Products";

// let initialState = {
//     items: [], 
//     count:1
// };

// function cartReducer(state = initialState, action) {
//     switch (action.type) {
//         case "ADD_TO_CART": {
//             // console.log(state);

//             return {
//                 ...state,
//                 items: [
//                     ...state.items, 
//                     {
//                         product: action.payload
//                     }
//                 ]
//             };
//         };

//         case "INC_ITEM_COUNT":{

//             return{
//                 ...state,
//                 items: state.items.map((i)=>(i.product.product.id === action.payload ?
//                     {...i,
//                         product:{
//                             ...i.product,
//                             count:i.product.count+1
//                         }

//                     }
//                     :i))
//             }
//         }

//         case "DEC_ITEM_COUNT":{
//             return{
//                 ...state,
//                 items:state.items.map((i)=>(i.product.product.id === action.payload ?
//                     {...i,
//                         product:{
//                             ...i.product,
//                             count:i.product.count-1
//                         }
//                     }
//                  :i))
//             }
//         }


//         default:
//             return state;
//     }
// }

// export default cartReducer;