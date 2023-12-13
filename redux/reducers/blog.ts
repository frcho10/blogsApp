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
            titulo: "Uno",
            autor: "Fernando",
            fechaCreacion: "12/12/2023",
            contenido: "Este es un escrito breve"
        },
        {
            titulo: "Dos",
            autor: "Fernando",
            fechaCreacion: "12/12/2023",
            contenido: "Este es un escrito breve"
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