import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser as loginUserApi } from '../../api/authApi';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(credentials);
      // console.log('API response data:', data);
      
      // Handle different possible token response structures
      const token = data.token || data.accessToken || data.data?.token || data.data?.accessToken || data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        // console.log('Login fulfilled, payload:', action.payload);
        state.user = action.payload;
        
        // Handle different possible token response structures
        const payload = action.payload;
        state.token = payload.token || payload.accessToken || payload.data?.token || payload.data?.accessToken || payload;
        
        // console.log('Token set to:', state.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
