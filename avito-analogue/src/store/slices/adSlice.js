import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    all: [],
    my: [],
    seller: []
}

export const adSlice = createSlice({
    name: "advertisement",
    initialState,
    reducers: {
        setAllAds: (state, action) => {
            state.all = action.payload
        },
        setMyAds: (state, action) => {
            state.my = action.payload
        },
        setSellerAds: (state, action) => {
            state.seller = action.payload
        },
    }
})

export const { setAllAds, setMyAds, setSellerAds} = adSlice.actions
export default adSlice.reducer