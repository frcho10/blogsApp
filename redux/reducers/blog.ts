import { createSlice, createAsyncThunk, Slice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

export interface blog {
    titulo: string;
    autor: string;
    fechaCreacion: string;
    contenido: string;

}

export interface BlogsInitialState {
    blogs: blog[];
    isLoadingBlogs: boolean;
    errorBlogs: string;
}

const initialState: BlogsInitialState = {
    blogs: [
        {
            titulo: "Primer Título",
            autor: "Fernando",
            fechaCreacion: "12/12/2023",
            contenido: "Este es un escrito breve: \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            titulo: "Segundo Título",
            autor: "Fernando",
            fechaCreacion: "12/12/2023",
            contenido: "Este es otro escrito breve: \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ],
    isLoadingBlogs: false,
    errorBlogs: "",
}

// export const dolarPeso = createAsyncThunk(
//     'asyncReducer/dolarPeso',
//     async (dolar, thunkAPI) => {
//         try{
//             const response = await axios.get(`https://api.frankfurter.app/latest?amount=${dolar}&from=USD&to=MXN`);
    
//             return response.data

//         }catch(error){
//             return thunkAPI.rejectWithValue(error.response.data.message)
//         }
//     });

export const blogsReducer = createSlice({
    name: "blogsReducer",
    initialState,
    reducers: {
        setBlogs: (state, action: PayloadAction<blog[]>) => {
            state.blogs = action.payload
        },
        clearInfoBlogs: (state) => {
            state.blogs = [];
            state.isLoadingBlogs= false;
            state.errorBlogs= "";
        },
        addBlog: (state, action: PayloadAction<blog>) => {
            console.log("nuevo blog",action.payload)
            console.log("blogs actuales, ",...state.blogs)
            state.blogs = [...state.blogs, action.payload]
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(dolarPeso.pending, (state) => {
    //         state.isLoading = true;
    //     });
    //     builder.addCase(dolarPeso.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.error = "";
    //         state.message = action.payload.rates.MXN;
    //     });
    //     builder.addCase(dolarPeso.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.message = "";
    //         state.error = action.payload;
    //         // state.error = action.error.message;
    //     });
    // }
});



export const { setBlogs, clearInfoBlogs, addBlog } = blogsReducer.actions;
export default blogsReducer.reducer;