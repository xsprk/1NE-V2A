<p align="left">
    中文&nbsp ｜ <a href="README.md">English</a>&nbsp 
</p>

# Video2Audio：基于浏览器的视频转音频工具

Video2Audio：基于浏览器的视频转音频工具
Video2Audio 是一个革命性的前端应用，利用了最新的 Web 技术来提供一个简单而强大的视频转音频服务。借助于 [ffmpeg.wasm](https://ffmpegwasm.netlify.app/)，Video2Audio 在浏览器端执行所有的视频处理任务，确保了用户数据的最高安全性和隐私保护。

## 功能

- 视频上传：用户可以上传视频文件。
- 视频转音频：系统自动将上传的视频文件转换为音频格式。
- 音频下载：用户可以下载转换后的音频文件。

## 技术栈

- **Next.js**: 用于构建用户界面和服务端渲染。
- **React**: 用于构建用户界面的组件。
- **@ffmpeg/ffmpeg** 和 **@ffmpeg/util**: 用于处理视频到音频的转换。
- **Tailwind CSS**: 用于快速构建美观的用户界面。

## 核心特性

- **完全在浏览器中运行**：所有的视频转音频操作都在用户的浏览器中完成，无需将文件上传到服务器。这意味着您的文件从未离开过您的设备，保证了极高的数据安全性和隐私保护。
- **快速且高效**：利用 ffmpeg.wasm，Video2Audio 能够快速将视频文件转换为音频格式，无需等待长时间的上传和下载过程。
- **用户友好的界面**：基于 Next.js 和 Tailwind CSS，Video2Audio 提供了一个简洁美观、响应迅速的用户界面，使得视频转音频的过程既简单又愉快。
- **无需安装任何软件**：作为一个完全基于浏览器的应用，用户无需下载或安装任何软件即可使用 Video2Audio 的所有功能。

## 安全性

在 Video2Audio 中，我们将用户的隐私和数据安全放在首位。通过在浏览器端利用 ffmpeg.wasm 进行视频处理，我们确保了用户的文件不会被上传到任何服务器，从而避免了数据泄露的风险。所有的处理过程都在用户的本地设备上完成，确保了最高级别的安全性和隐私保护。

## 开始使用

Video2Audio 的使用非常简单：

1. 访问 Video2Audio 的网站。
2. 上传您想要转换的视频文件。
3. 等待浏览器完成转换过程。
4. 下载转换后的音频文件。

就是这么简单！您不需要担心文件的安全性，因为所有的操作都在您的设备上完成，没有任何数据会被发送到外部服务器。



## 安装使用

确保您已经安装了 Node.js（推荐使用最新稳定版本）。

1. 克隆仓库：

```bash
git clone https://github.com/qianniucity/video2audio.git
cd video2audio
```
2. 安装依赖：
```bash
npm install
```

    
3. 启动开发服务器：
```bash
npm run dev
```

现在，您可以在浏览器中访问 [http://localhost:3000](http://localhost:3000) 来查看应用。

你可以通过修改 [app/page.tsx](app/page.tsx) 来开始编辑页面。文件保存后，页面将自动更新。

## 建与部署
要构建生产版本，请运行：
```bash
npm run build
```

然后，您可以使用以下命令启动生产服务器：
```bash
npm start
```
## 特性

- **字体优化**：本项目使用 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) 自动优化并加载 Inter，这是一个自定义的 Google 字体。


## 学习更多
要了解更多关于 Next.js 的信息，请查看以下资源：
- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 的特性和 API。
- [学习 Next.js](https://nextjs.org/learn) - 一个交互式的 Next.js 教程。

您可以查看 [Next.js GitHub 仓库](https://github.com/vercel/next.js/)

## Next.js 项目模板

这是一个使用 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 创建的 [Next.js](https://nextjs.org/) 项目模板。它旨在为开发者提供一个快速启动和部署 Next.js 应用的基础框架。

## 在 Vercel 上部署

使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)（Next.js 的创建者）是部署你的 Next.js 应用最简单的方式。

更多部署细节，请查看 [Next.js 部署文档](https://nextjs.org/docs/deployment)。

## 贡献

如果你想为这个项目贡献代码，请确保遵循项目中的代码风格和贡献指南。我们欢迎所有形式的贡献，包括但不限于新功能、代码修复、文档更新等。

## 许可证

本项目采用 MIT 许可证。有关更多信息，请查看 `LICENSE` 文件。
```

这个 README 提供了一个完整的项目介绍，包括如何开始、项目特性、学习资源、部署指南、贡献指南和许可证信息。它结合了您提供的 README 片段和项目本身的特点，为用户提供了一个全面的项目概览。

贡献
欢迎任何形式的贡献。请确保在提交拉取请求之前先运行 npm run lint 来保持代码风格的一致性。

许可证
MIT

