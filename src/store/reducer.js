import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  editingUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
        state.editingUser = null;
      }
    },
  },
});

export const { addUser, deleteUser, setEditingUser, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
