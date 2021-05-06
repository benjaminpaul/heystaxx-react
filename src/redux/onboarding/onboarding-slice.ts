import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { postOnboarding } from "./onboarding-api"
import { Onboarding } from '../../types/heystaxx/onboarding';
import { fetchJobTitles } from '../jobtitles/jobtitles-slice';

export interface OnboardingState {
    onboarding: Onboarding;
}

const initialState: OnboardingState = {
    onboarding: { jobTitleId: "", industryId: "", countryId: "", city: "" }
};

export const updateIndustryFetchJobTitles = createAsyncThunk(
    'onboarding/updateIndustryFetchJobTitles',
    async (industryId: string, { dispatch }) => {
        dispatch(onboardingSlice.actions.industrySelected(industryId));
        dispatch(fetchJobTitles(industryId));
    }
)

export const saveOnboarding = createAsyncThunk(
    'onboarding/saveOnboarding',
    async (onboarding: Onboarding) => {
        const response = await postOnboarding(onboarding);
        return response;
    }
)

export const onboardingSlice = createSlice({
    name: "onboarding",
    initialState,
    reducers: {
        countrySelected: (state, action: PayloadAction<string>) => {
            state.onboarding.countryId = action.payload;
        },
        timezoneSelected: (state, action: PayloadAction<string>) => {
            state.onboarding.timezoneId = action.payload;
        },
        jobTitleSelected: (state, action: PayloadAction<string>) => {
            state.onboarding.jobTitleId = action.payload;
        },
        industrySelected: (state, action: PayloadAction<string>) => {
            state.onboarding.industryId = action.payload;
        },
        updateCity: (state, action: PayloadAction<string>) => {
            state.onboarding.city = action.payload;
        }
    }
});

export const selectOnboarding = (state: RootState) => state.onboarding;
export const { countrySelected, timezoneSelected, updateCity, industrySelected, jobTitleSelected } = onboardingSlice.actions;

export default onboardingSlice.reducer;