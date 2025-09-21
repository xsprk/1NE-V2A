"use client"

import Link from "next/link"

export function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow bg-white dark:bg-gray-800 dark:border-gray-600 flex justify-center">
  <span className="text-sm text-gray-500">
    ©2025 <a href="https://v2a.1ne.in.net" className="hover:underline">1NE Networks Ltd</a>. All Rights Reserved.
  </span>
</footer>
    )
}
