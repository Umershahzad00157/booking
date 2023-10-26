import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : "user",
    initialState: {
        user:null
    },
    reducers:{
    userLogin : (state , action) => {
        state.user = action.payload;
    },
    userSignUp : (state , action) => {
        state.user = action.payload;
    }

    },
});

export const  {userLogin , userSignUp} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;