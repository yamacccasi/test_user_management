import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
    search: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    search: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
};



export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Не вдалося завантажити дані');
    }
    return response.json();
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.search = { ...state.search, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Помилка при завантаженні користувачів';
            });
    },
});

export const { setSearchTerm } = userSlice.actions;
export default userSlice.reducer;


