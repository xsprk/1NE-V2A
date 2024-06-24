"use client"

import Link from "next/link"
import Image from "next/image";
import Github from "./icos/GitHub";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderMenu() {
    return (
        <nav className=" border-gray-200 dark:border-gray-600 dark:bg-gray-900 border-b">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/favicon.svg"
                        className="dark:invert"
                        width={50}
                        height={12}
                        alt="qianniu Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">video2audio</span>
                </Link>

                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <Link
                        href="https://qianniuspace.com/"
                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About
                    </Link>
                    <Link
                        href="https://github.com/qianniucity/video2audio"
                        className="ml-auto flex items-center gap-1.5 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            <Github className={"size-5"} />
                        </span>
                        <span>Star on GitHub</span>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
