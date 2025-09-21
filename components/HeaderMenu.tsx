// Remove or comment this line
// import Github from "../components/Github";
"use client"

import Link from "next/link"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ModeToggle } from "./darkmodel/modeToggle";

export function HeaderMenu() {
    return (
        <nav className=" border-gray-200 dark:border-gray-600 dark:bg-gray-900 border-b">
             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">video2audio</span>

                    <ModeToggle />
        </nav>
    )
}
