import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Jobtitle } from '../../types/heystaxx/entities';
import { getJobTitles } from './jobtitles-api';

export const fetchJobTitles = createAsyncThunk(
    'jobtitles/fetchJobTitlesByIndustryId',
    async (industryId: string, { dispatch }) => {
        const response = await getJobTitles(industryId);
        dispatch(jobTitlesSlice.actions.setJobTitles(response));
    }
)

const jobTitlesAdapter = createEntityAdapter<Jobtitle>({
    selectId: (jobTitle) => jobTitle.id
});

export const jobTitlesSlice = createSlice({
    name: "jobTitles",
    initialState: jobTitlesAdapter.getInitialState(),
    reducers: {
        addJobTitle: jobTitlesAdapter.addOne, 
        setJobTitles: jobTitlesAdapter.setAll,
        addJobTitles: jobTitlesAdapter.addMany
    }
});

export const jobTitlesSelectors = jobTitlesAdapter.getSelectors<RootState>(state => state.jobTitles);
export default jobTitlesSlice.reducer;