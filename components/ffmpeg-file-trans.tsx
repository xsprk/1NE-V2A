import { useEffect, useRef, useState } from 'react'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

interface FfmpegFileTransProps extends React.HTMLAttributes<HTMLDivElement> {
    file: File | null;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function FfmpegFileTrans({
    file,
    step,
    setStep,
}: FfmpegFileTransProps) {
    const ffmpegRef = useRef(new FFmpeg())
    const messageRef = useRef<HTMLParagraphElement | null>(null)
    const [wavURL, setWavURL] = useState<string | null>(null);
    const [downloadFileName, setDownloadFileName] = useState<string | null>(null);
    const [audioType, setAudioType] = useState<string>("WAV");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setAudioType(selectedValue);
        setStep(1)
    };

    // inside the component
    useEffect(() => {
        console.log("audioType updated", audioType);
    }, [audioType]); // the audioType in the dependency array means this useEffect will run after audioType changes


    const load = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
        const ffmpeg = ffmpegRef.current
        // Listen to progress event instead of log.
        ffmpeg.on('progress', ({ progress, time }) => {
            if (messageRef.current) messageRef.current.innerHTML = `${progress * 100} % (transcoded time: ${time / 1000000} s)`;
        });
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm')
        })
    }

    const transcode = async () => {
        if (!file) return;
        await load();
        const ffmpeg = ffmpegRef.current;
        // get the original file name
        const originalFileName = file.name;
        // get the file name without extension
        const fileNameWithoutExtension = originalFileName.replace(/\.[^/.]+$/, "");
        // write the file to the file system
        await ffmpeg.writeFile(originalFileName, await fetchFile(file));
        // transcode the file
        await ffmpeg.exec(['-i', originalFileName, '-f', `${audioType}`, '-vn', `${fileNameWithoutExtension}.${audioType}`]);
        const data = (await ffmpeg.readFile(`${fileNameWithoutExtension}.${audioType}`)) as Uint8Array;
        const url = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/*' }));

        setWavURL(url); // set the URL of the transcoded file
        // set the download file name
        setDownloadFileName(`${fileNameWithoutExtension}.${audioType}`);
        setStep(2);
    };

    const downloadFile = async () => {
        setStep(3)
    }

    return (
        <>
            <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className=" mx-auto max-w-screen-xl p-4">
                    <form className=" mx-auto py-4">
                        <label htmlFor="audio" className="">Choose Audio Type</label>
                        <select
                            onChange={handleSelectChange}
                            id="audio"
                            name="audio"
                            defaultValue="WAV"
                            className="bg-gray-50 border border-gray-300 mr-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        >
                            <option value="WAV">WAV</option>
                            <option value="MP3">MP3</option>
                            <option value="FLAC">FLAC</option>
                            <option value="WMA">WMA</option>
                            <option value="AAC">AAC</option>
                            <option value="AMR">AMR</option>
                        </select>
                    </form>
                    <button
                        onClick={transcode}
                        disabled={!file}
                        type="button"
                        className={`text-white mr-5  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ${file && step === 1 ? "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " : "bg-gray-500"}`}
                    >
                        Transcode to {audioType}
                    </button>



                    {wavURL && downloadFileName && step === 2 && (
                        <a
                            href={wavURL}
                            download={downloadFileName}
                            onClick={downloadFile}
                            className="text-white mr-5 bg-purple-500 hover:bg-purple-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Download {audioType}
                        </a>
                    )}
                    <button
                        onClick={() => setStep(0)}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        Reset
                    </button>

                    <p ref={messageRef}></p>
                </div>
            </div>
        </>
    )
}