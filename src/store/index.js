import newsSlice from './reducers/news.reducer'
import { configureStore} from '@reduxjs/toolkit';
import authSlice from './reducers/auth.reducer'

export const store = configureStore({
  reducer: {
    news: newsSlice,
    auth: authSlice,
  }
})
