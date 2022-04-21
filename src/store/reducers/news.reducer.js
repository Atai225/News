import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../api/axios';
import { asyncThunk } from '../../helpers/asyncThunk';



export const postNews = createAsyncThunk(
  "news/post",
  async (data, {rejectWithValue, getState}) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.post("/news", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(!res.data) {
        throw new Error()
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const editNews = createAsyncThunk(
  "news/put",
  async (data, {rejectWithValue, getState}) => {
    console.log(data );
    try {
      const token = getState().auth.user.token;
      const res = await axios.put(`/news/${data.id}`, {data: {...data.news}}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(!res.data) {
        throw new Error()
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)


export const deleteNews = createAsyncThunk(
  'newsitem/delete',
  async (id, {rejectWithValue, getState}) => {
    try {
      const token = getState().auth.user.token;

      // const res = await axios.get( `/news/?filters[$ne]=${id}`)
      const res = await axios.delete(`/news/${id}` , {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// export const getNews = asyncThunk(
//   "news/get",
//   async (id, {rejectWithValue}) => {
//     try {
//       const res = await axios.get( `/news?pagination[page]=${id}&pagination[pageSize]=2&&populate=image`)
//       return res.data
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// );


export const getNews = asyncThunk(
  "news/get",
  "get",
  "/news?populate=author,image"
);

export const getNewsInfo = createAsyncThunk(
  'newsitem/get',
  async (id, {rejectWithValue}) => {
    try {
      const res = await axios.get( `/news/${id}?populate[author][populate]=img&populate=image`)
      return res.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    loading: "",
    dataItem: [],
  },
  extraReducers: {
    [postNews.pending]: (state) => {
      state.loading = "loading";
    },
    [postNews.fulfilled]: (state, action) => {
      state.loading = "complete";
      state.data.push(action.payload.data);

    },
    [postNews.rejected]: (state) => {
      state.loading = "error";
    },


    [editNews.pending]: (state) => {
      state.loading = "loading";
    },
    [editNews.fulfilled]: (state, action) => {
      state.loading = "complete";
      state.dataItem = action.payload;
    },
    [editNews.rejected]: (state) => {
      state.loading = "error";
    },

    // [deleteNews.pending]: (state) => {
    //   state.loading = "loading";
    // },
    // [deleteNews.fulfilled]: (state) => {
    //   state.loading = "complete";

    //   // state.data = state.data.filter(item => item !== action.payload.data);
    //   // state.data = action.payload.data;
    // },
    // [deleteNews.rejected]: (state) => {
    //   state.loading = "error";
    // },



    [getNews.pending]: (state) => {
      state.loading = "loading";
    },
    [getNews.fulfilled]: (state, action) => {
      state.loading = "complete";
      state.data = action.payload.data;
    },
    [getNews.rejected]: (state) => {
      state.loading = "error";
    },


    [getNewsInfo.pending]: (state) => {
      state.loading = "loading";
    },
    [getNewsInfo.fulfilled]: (state, action) => {
      state.loading = "complete";
      state.dataItem = action.payload.data;
    },
    [getNewsInfo.rejected]: (state) => {
      state.loading = "error";
    },
  },
});

export default newsSlice.reducer;
