"use client"

import VideoUploader from "../video-uploader";
import NoSSRWrapper from "../NoSSRWrapper";
import FfmpegFileTrans from "../ffmpeg-file-trans"
import { useState } from "react";
import { Step } from "../step";


export default function Files({
}) {

  const [file, setFile] = useState<File | null>(null);
  // Create a process step status 0: initial state 1: upload video 2: transcoding 3: download
  const [step, setStep] = useState(0);

  return (
    <div className="border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Step step={step} />
        <VideoUploader file={file} setFile={setFile} setStep={setStep} />
        <NoSSRWrapper>
          <FfmpegFileTrans file={file} setFile={setFile} step={step} setStep={setStep} />
        </NoSSRWrapper>
      </div>
    </div>
  );
}
