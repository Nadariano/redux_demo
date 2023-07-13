import { createSlice } from "@reduxjs/toolkit";
import UserData from '../shared/ListOfUsers';
export const userSlice = createSlice({
    name: "users",
    initialState: { value: UserData },
    reducers: {
        addUser: (state, action) => { // Write code for addUser function
            state.value.push(action.payload);
        },
        updateUsername: (state, action) => { // Write code for updateUsername function
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            });
        },
        deleteUser: (state, action) => { // Write code for deleteUser fuction
            state.value.filter((user) => user.id !== action.payload.id);
        },
    }
}
);
export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
