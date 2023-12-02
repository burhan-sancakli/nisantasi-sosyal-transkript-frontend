
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../../../types";
const initialState: User = {
    id: -1,
    name: "",
    is_staff: false,
    email: "",
    created_at: "",
    updated_at: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>) => {
      return action.payload;
    },
    clearUser: () => {
        const user: User = {
            id: -1,
            name: "",
            is_staff: false,
            email: "",
            created_at: "",
            updated_at: ""
        };
      return user;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
