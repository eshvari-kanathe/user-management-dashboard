import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    "FETCHUSER",
     async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(response.data,"response")
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  list: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.list = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      }),
});

export default userDataSlice.reducer;
