// import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import foodtApi from "../../api/food"



// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };


// export const getListTodo = createAsyncThunk("post/getListTodo", async () => {
//     try {
//       const res = await axios.get(
//         "https://61b02a623e2aba0017c49636.mockapi.io/Todo",
//       );
//       console.log(res.data);
//       return res.data;
      
//     } catch (error) {
//       console.log("co loi xay ra ", error);
//     }
//   });

// export const cartSlide = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//   },

//   extraReducers(builder) {
//   builder
//       .addCase(getListTodo.pending, (state, action) => {
//         state.loading = true;
//       })
//       .addCase(getListTodo.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(getListTodo.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//   //     // add todo
//   //     .addCase(addTodo.pending, (state, action) => {
//   //       state.loading = true;
//   //     })
//   //     .addCase(addTodo.fulfilled, (state, action) => {
//   //       state.loading = false;
//   //       // state.data = action.payload;
//   //     })
//   //     .addCase(addTodo.rejected, (state, action) => {
//   //       state.loading = false;
//   //     });
//   },
// });

// export default cartSlide.reducer