"use client"

import Link from "next/link"
import Image from "next/image";

export function HeaderMenu() {
    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/favicon.svg"
                        className="dark:invert"
                        width={50}
                        height={12}
                        alt="qianniu Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vedio2Audio</span>
                </Link>

                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <Link href="https://qianniu.city"
                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >
                        About
                    </Link>
                    <Link href="https://github.com/qianniucity/vedio2audio" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Github
                    </Link>
                </div>
            </div>
        </nav>
    )
}
