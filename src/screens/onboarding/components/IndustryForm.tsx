import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { industrySelected, jobTitleSelected, updateIndustryFetchJobTitles } from "../../../redux/onboarding/onboarding-slice";
import { useAppSelector, useAppDispatch, } from "../../../redux/hooks";
import { fetchIndustries, industriesSelectors } from "../../../redux/industries/industries-slice";
import { jobTitlesSelectors } from "../../../redux/jobtitles/jobtitles-slice";

export function IndustryForm() {
    const dispatch = useAppDispatch();

    const industries = useAppSelector(industriesSelectors.selectAll);
    const jobTitles = useAppSelector(jobTitlesSelectors.selectAll);
    
    useEffect(() => {
        dispatch(fetchIndustries());
    }, [dispatch]);

    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const onSubmit = (data: any) => {
        dispatch(industrySelected(data.selectedIndustry));
        dispatch(jobTitleSelected(data.selectedJobTitle));
    }

    const onIndustryChange = (industryId: string) => {
        dispatch(updateIndustryFetchJobTitles(industryId));
    }

    return (
        <div className="w-96">
                <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Industry *
                        </label>
                        <select {...register("selectedIndustry", { required: true })} onChange={(e) => onIndustryChange(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" >
                        <option value="">Select...</option>
                            {industries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Job title *
                        </label>
                        <select {...register("selectedJobTitle", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" >
                            <option value="">Select...</option>
                            {jobTitles.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"/>
                    </div>
                </form>
            </div>
    )
}