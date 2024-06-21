"use client";

import type { ChangeEvent } from "react";
import React, { useCallback, useState } from "react";
import toast from 'react-hot-toast'


interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {
  file?: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function VideoUploader({
  file,
  setFile,
  setStep,
  ...props
}: UserRegisterFormProps) {

  const [data, setData] = useState<{ audio: string | null }>({
    audio: null,
  });

  const onChangeAudio = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.currentTarget.files);
      const file = event.currentTarget.files?.[0];
      if (file) {
        if (file.size / 1024 / 1024 > 500) {
          toast.error("File size too big (max 50MB).")
        } else {
          setFile(file);
          setStep(1)
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target) {
              setData((prev) => ({ ...prev, audio: e.target?.result as string }));
            }
          };
          reader.readAsDataURL(file);
        }
      }
    },
    []
  );

  return (
    <>
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className='font-semibold'>Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">wav,mp3,flac,mp4,mov,mkv,avi,mpeg</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Max file size: 50MB</p>
        </div>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            id="dropzone-file"
            name="dropzone-file"
            type="file"
            accept="audio/*,video/*"
            className="sr-only"
            onChange={onChangeAudio}
            {...props}
          />
        </div>
        {data.audio && (
          <audio controls src={data.audio} className="w-full h-16 mt-4">
            <track kind="captions" src="/srt/test.vtt" label="English" />
          </audio>
          // <video className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" muted controls>
          //   <source src={data.audio} type="video/mp4" />
          //   Your browser does not support the video tag.
          //   <track kind="captions" src="/srt/test.vtt" label="English" />
          // </video>
        )}
      </label>
    </>
  );
}
