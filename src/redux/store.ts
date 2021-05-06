import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import onboardingReducer from './onboarding/onboarding-slice';
import industriesReducer from './industries/industries-slice';
import countriesReducer from  './countries/countries-slice';
import timezonesReducer from './timezones/timezones-slice';
import jobTitlesReducer from './jobtitles/jobtitles-slice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    industries: industriesReducer,
    countries: countriesReducer,
    timezones: timezonesReducer,
    jobTitles: jobTitlesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
