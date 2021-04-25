import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

// POINT:非同期処理はcreateSliceの外に記述する
export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get(apiUrl);
  return res.data;
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    users: [],
  },
  reducers: {},
  // createAsyncThunkを利用した場合は、結果に応じた処理をextraReducersとして記載する
  extraReducers: (builder) => {
    // 成功した場合(fulfilled)
    // axiosで取得したデータはaction.payloadにて取得可能
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    });
  },
});

export const selectUsers = (state) => state.fetch.users;
export default fetchSlice.reducer;
