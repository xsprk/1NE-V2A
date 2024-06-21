"use client"

import VideoUploader from "../video-uploader";
import NoSSRWrapper from "../NoSSRWrapper";
import FfmpegFileTrans from "../ffmpeg-file-trans"
import { useState } from "react";
import { Step } from "../step";


export default function Files({
}) {

  const [file, setFile] = useState<File | null>(null);
  // 创建一个流程步骤状态 0:初始状态 1: 上传视频 2: 转码 3: 下载
  const [step, setStep] = useState(0);

  return (
    <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Step step={step} />
        <VideoUploader file={file} setFile={setFile} setStep={setStep} />
        <NoSSRWrapper>
          <FfmpegFileTrans file={file} step={step} setStep={setStep} />
        </NoSSRWrapper>
      </div>
    </div>
  );
}
