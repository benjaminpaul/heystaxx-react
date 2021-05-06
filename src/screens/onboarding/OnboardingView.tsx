import React from "react";
import { LocationForm } from "./components/LocationForm";

export function OnboardingView() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="md:flex md:flex-row md:items-center">
                <div className="md:p-10">
                    <h1>Hello Benjamin</h1>
                    <p>This is some text that is not meant to be read.</p>
                </div>
                <LocationForm/>
            </div>
        </div>
    )
}