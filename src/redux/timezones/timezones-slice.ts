import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Timezone } from '../../types/heystaxx/entities';
import { getTimezones } from './timezones-api';

export const fetchTimezones = createAsyncThunk(
    'timezones/fetchTimezones',
    async (_, { dispatch }) => {
        const response = await getTimezones();
        dispatch(timezonesSlice.actions.setTimezones(response));
    }
)

const timezonesAdapter = createEntityAdapter<Timezone>({
    selectId: (timezone) => timezone.id
});

export const timezonesSlice = createSlice({
    name: "timezones",
    initialState: timezonesAdapter.getInitialState(),
    reducers: {
        addTimezone: timezonesAdapter.addOne,
        setTimezones: timezonesAdapter.setAll,
        addTimezones: timezonesAdapter.upsertMany
    }
});

export const timezoneSelectors = timezonesAdapter.getSelectors<RootState>(state => state.timezones);
export default timezonesSlice.reducer;