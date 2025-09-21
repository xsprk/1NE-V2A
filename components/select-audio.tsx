"use client"

import { useEffect, useState } from "react"

interface SelectAudioFormProps extends React.HTMLAttributes<HTMLDivElement> {
    step?: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}


export function SelectAudio({
    step,
    setStep,
}: SelectAudioFormProps) {
    const [audioType, setAudioType] = useState<string>("wav");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setAudioType(selectedValue);
        setStep(2)
    };

    // inside the component
    useEffect(() => {
        console.log("audioType updated", audioType);
    }, [audioType]); // the audioType in the dependency array means this useEffect will run after audioType changes

    return (
        <form className=" mx-auto py-4">
            <label htmlFor="audio" className="">Choose Audio Type</label>
            <select
                onChange={handleSelectChange}
                id="audio"
                name="audio"
                defaultValue="MP3"
                className="bg-gray-50 border border-gray-300 mr-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
            >
                <option value="WAV">WAV</option>
                <option value="MP3">MP3</option>
                <option value="FLAC">FLAC</option>
            </select>
        </form>

    )
}
