import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface UserState{
	email:string
}

const initialState : UserState ={
	email: 'hola'
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers:{
		login: (state, action: PayloadAction<string>) =>{
			state.email = action.payload
		},
		logout: (state) =>{
			state.email = ''
		}
	}
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer