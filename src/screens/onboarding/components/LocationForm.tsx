import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { fetchCountries, countriesSelectors } from "../../../redux/countries/countries-slice";
import { timezoneSelected, countrySelected, updateCity } from "../../../redux/onboarding/onboarding-slice";
import { useAppSelector, useAppDispatch, } from "../../../redux/hooks";
import { fetchTimezones, timezoneSelectors } from "../../../redux/timezones/timezones-slice";

export function LocationForm() {
    const dispatch = useAppDispatch();

    const countries = useAppSelector(countriesSelectors.selectAll);
    const timezones = useAppSelector(timezoneSelectors.selectAll);
    
    useEffect(() => {
        dispatch(fetchCountries());
        dispatch(fetchTimezones());
    }, [dispatch]);

    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const onSubmit = (data: any) => {
        dispatch(countrySelected(data.selectedCountry));
        dispatch(timezoneSelected(data.selectedTimezone));
        dispatch(updateCity(data.city));
    }

    return (
        <div className="w-96">
                <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Country *
                        </label>
                        <select {...register("selectedCountry", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" >
                            {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            City *
                        </label>
                        <input {...register("city", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city"></input>
                        {errors.city && <span className="text-red-300 mt-4">Please specifiy a city</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Timezone *
                        </label>
                        <select {...register("selectedTimezone", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="yearsExperience" >
                            {timezones.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"/>
                    </div>
                </form>
            </div>
    )
}