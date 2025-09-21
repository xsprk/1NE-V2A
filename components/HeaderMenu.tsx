"use client"

import Link from "next/link"
import Image from "";
import Github from "";
import { ModeToggle } from "./darkmodel/modeToggle";

export function HeaderMenu() {
    return (
        <nav className=" border-gray-200 dark:border-gray-600 dark:bg-gray-900 border-b">
             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">video2audio</span>

                    <ModeToggle />
        </nav>
    )
}
