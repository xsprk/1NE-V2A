"use client"

import Link from "next/link"

export function Footer() {
    return (
        <footer className="fixed  bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600   ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2025 <a href="v2a.1ne.in.net" className="hover:underline">1NE Networks Ltd</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            </ul>
        </footer>
    )
}
