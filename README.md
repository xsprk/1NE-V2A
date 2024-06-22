<p align="left">
    <a href="README_CN.md">中文</a>&nbsp ｜ &nbspEnglish&nbsp 
</p>


# Video2Audio: A Browser-Based Video to Audio Converter

Video2Audio is a revolutionary front-end application that leverages the latest web technologies to provide a simple yet powerful video to audio conversion service. With [ffmpeg.wasm](https://ffmpegwasm.netlify.app/), Video2Audio performs all video processing tasks on the client side, ensuring the highest security and privacy protection for user data.

## Features

- **Video Upload**: Users can upload video files.
- **Video to Audio Conversion**: The system automatically converts the uploaded video files into audio format.
- **Audio Download**: Users can download the converted audio files.

## Technology Stack

- **Next.js**: Used for building the user interface and server-side rendering.
- **React**: Used for building the components of the user interface.
- **@ffmpeg/ffmpeg** and **@ffmpeg/util**: Used for processing video to audio conversion.
- **Tailwind CSS**: Used for quickly building beautiful user interfaces.

## Core Features

- **Runs Entirely in the Browser**: All video to audio operations are completed within the user's browser, eliminating the need to upload files to a server. This means your files never leave your device, ensuring a high level of data security and privacy protection.
- **Fast and Efficient**: Utilizing ffmpeg.wasm, Video2Audio can quickly convert video files to audio format without the long wait for uploads and downloads.
- **User-Friendly Interface**: Built on Next.js and Tailwind CSS, Video2Audio offers a clean, beautiful, and responsive user interface, making the video to audio conversion process both simple and enjoyable.
- **No Software Installation Required**: As a fully browser-based application, users do not need to download or install any software to use all the features of Video2Audio.

## Security

In Video2Audio, we prioritize user privacy and data security. By utilizing ffmpeg.wasm for video processing in the browser, we ensure that users' files are not uploaded to any server, thus avoiding the risk of data leakage. All processing is done on the user's local device, ensuring the highest level of security and privacy protection.

## Getting Started

Using Video2Audio is very simple:

1. Visit the Video2Audio website.
2. Upload the video file you want to convert.
3. Wait for the browser to complete the conversion process.
4. Download the converted audio file.

It's that simple! You don't have to worry about file security because all operations are completed on your device, with no data being sent to external servers.

## Installation and Use

Make sure you have Node.js installed (the latest stable version is recommended).

1. Clone the repository:

```bash
git clone https://github.com/qianniucity/video2audio.git
cd video2audio
```
2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Now you can visit [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You can start editing the page by modifying [app/page.tsx](app/page.tsx). The page auto-updates as you edit the file.

## Build and Deploy

To build the production version, run:

```bash
npm run build
```

Then you can start the production server with the following command:

```bash
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js/)

## Next.js Project Template

This is a [Next.js](https://nextjs.org/) project template created with [`create-next-app`](

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
