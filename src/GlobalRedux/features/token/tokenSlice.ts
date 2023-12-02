
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
const initialState: string = "";

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearToken: () => {
      const token: string = "";
      return token;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
