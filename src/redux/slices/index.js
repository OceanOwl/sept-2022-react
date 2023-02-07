import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null
};

        const getAll = createAsyncThunk(
            'postSlice/getAll',
            async (_, {rejectWithValue}) => {
                try {
                    const {data} = await postService.getAll();
                    return data
                } catch (e) {
                    return rejectWithValue(e.response.data)
                }

            }
        )


        const postSlice = createSlice({
            name: 'postSlice',
            initialState,
            reducers: {
                // getAll: (state, action) => {
                //     state.posts = action.payload
                // },
                setSelectedPost: (state, action) => {
                    state.selectedPost = action.payload
                }
            },
            extraReducers:
            //     [getAll.fulfilled]:(state, action)=>{
            //         state.posts = action.payload
            //     }

                builder =>
                    builder
                        .addCase(getAll.fulfilled, (state, action) => {
                            state.loading = false
                            state.posts = action.payload
                        })
                        .addCase(getAll.rejected, (state, action) => {
                            state.loading = false
                            state.errors = action.payload

                        })
                        .addCase(getAll.pending, (state) => {
                            state.loading = true

                        })

        });

        const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

        const postActions = {
            setSelectedPost,
            getAll
        };

        export {
            postReducer,
            postActions
        }