import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Industry } from '../../types/heystaxx/entities';
import { getIndustries } from "./industries-api";

export const fetchIndustries = createAsyncThunk(
    'industries/fetchIndustries',
    async (_, { dispatch }) => {
        const response = await getIndustries();
        dispatch(industriesSlice.actions.setIndustries(response));
    }
)

const industriesAdapter = createEntityAdapter<Industry>({
    selectId: (industry) => industry.id
});

export const industriesSlice = createSlice({
    name: "industries",
    initialState: industriesAdapter.getInitialState(),
    reducers: {
        addIndustry: industriesAdapter.addOne, 
        setIndustries: industriesAdapter.setAll,
        addIndustries: industriesAdapter.addMany
    }
});

export const industriesSelectors = industriesAdapter.getSelectors<RootState>(state => state.industries);
export default industriesSlice.reducer;