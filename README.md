# Video2Audio

Video2Audio is a front-end project built with [Next.js](https://nextjs.org/), designed to provide a simple interface for users to convert video files into audio format.

## Features

- **Video Upload**: Users can upload video files.
- **Video to Audio Conversion**: The system automatically converts uploaded video files into audio format.
- **Audio Download**: Users can download the converted audio files.

## Tech Stack

- **Next.js**: Used for building the user interface and server-side rendering.
- **React**: Used for building the components of the user interface.
- **@ffmpeg/ffmpeg** and **@ffmpeg/util**: Used for handling the conversion from video to audio.
- **Tailwind CSS**: Used for quickly building beautiful user interfaces.

## Getting Started

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

## Features

- **Font Optimization**: This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- **Image Optimization**: This project uses [`next/image`](https://nextjs.org/docs/basic-features/image-optimization) to automatically optimize images.
- **Internationalization**: This project uses [`next/i18n`](https://nextjs.org/docs/advanced-features/i18n-routing) to provide internationalization support.
- **SEO**: This project uses [`next/seo`](https://nextjs.org/docs/advanced-features/next-seo) to provide SEO support.
- **PWA**: This project uses [`next/pwa`](https://nextjs.org/docs/advanced-features/pwa) to provide PWA support.
- **TypeScript**: This project uses TypeScript for static type checking.
- **ESLint**: This project uses ESLint for linting.
- **Prettier**: This project uses Prettier for code formatting.
- **Husky**: This project uses Husky for Git hooks.
- **Lint-Staged**: This project uses Lint-Staged for running linters on staged files.
- **Jest**: This project uses Jest for testing.
- **React Testing Library**: This project uses React Testing Library for testing React components.
- **Cypress**: This project uses Cypress for end-to-end testing.
- **Storybook**: This project uses Storybook for developing UI components in isolation.
- **GitHub Actions**: This project uses GitHub Actions for continuous integration and deployment.
- **Vercel**: This project uses Vercel for hosting and deployment.
- **Docker**: This project uses Docker for containerization.
- **NGINX**: This project uses NGINX for reverse proxying.
- **Let's Encrypt**: This project uses Let's Encrypt for SSL certificates.

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
