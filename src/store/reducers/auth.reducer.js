import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { asyncThunk } from "../../helpers/asyncThunk";

export const fetchUser = createAsyncThunk(
	'auth/fetch',
	async(user, {rejectWithValue}) => {
		try{
			const res = await axios.post('/auth/local' , user);
			if(!res.data){
				throw new Error()
			}
			return res.data;
		}catch(error){
			return rejectWithValue(error)
		}
	}
)
// export const getUserInfo = createAsyncThunk(
// 	'author/get',
// 	async(_, {rejectWithValue}) => {
// 		try{
// 			const res = await axios.get(``);
// 			if(!res.data){
// 				throw new Error()
// 			}
// 			return res.data;
// 		}catch(error){
// 			return rejectWithValue(error)
// 		}
// 	}
// )

export const getProfile = createAsyncThunk(
	"profile/get",
	async (_, {rejectWithValue}) => {
	  try {
		const res = await axios.get( `/profiles/1?populate=user,image`)
		return res.data
	  } catch (error) {
		return rejectWithValue(error)
	  }
	}
  )


const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loading: '',
		user: null,
		profile: null,
	},
	extraReducers: {
		[fetchUser.pending]: (state) => {
			state.loading = "loading";
		},
	  
		[fetchUser.fulfilled]: (state, action) => {
			state.loading = 'complete';
			state.user = {
			  token: action.payload.jwt,
			  ...action.payload.user
			}
		},
	  
		[fetchUser.rejected]: (state) => {
			state.loading = "error";
		},
		[getProfile.pending]: (state) => {
			state.loading = "loading";
		},
	  
		[getProfile.fulfilled]: (state, action) => {
			state.loading = 'complete';
			state.profile = {...action.payload.data};
		},
	  
		[getProfile.rejected]: (state) => {
			state.loading = "error";
			
		},
	
	},
	reducers: {
		cleanUser : (state) => {
			state.user = null;
		}
	}
})
export default authSlice.reducer;
export const {cleanUser} = authSlice.actions;
