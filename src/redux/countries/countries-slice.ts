import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Country } from '../../types/heystaxx/entities';
import { getCountries } from './countries-api';

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async (_, { dispatch }) => {
        const response = await getCountries();
        dispatch(countriesSlice.actions.setCountries(response));
    }
)

const countriesAdapter = createEntityAdapter<Country>({ 
    selectId: (country) => country.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
})

export const countriesSlice = createSlice({
    name: "countries",
    initialState: countriesAdapter.getInitialState(),
    reducers: {
        addCountry: countriesAdapter.addOne,
        setCountries: countriesAdapter.setAll,
        addCountries: countriesAdapter.addMany
    }
})

export const countriesSelectors = countriesAdapter.getSelectors<RootState>((state) => state.countries);

export default countriesSlice.reducer;