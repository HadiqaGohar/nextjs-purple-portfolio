'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
              <header className="flex flex-col md:flex-row  pl-0 pt-2 md:p-4 font-bold bg-[#2E073F] text-white">
                <span className="text-[#AD49E1] text-xl">ₕₐdᵢqₐ Gₒₕₐᵣ |</span>
                <nav className="flex  sm:flex-row mt-4 md:mt-0">
                    <Link href="/" className="hover:text-[#7A1CAC]  mt-1 md:ml-2">Home</Link>
                    <Link href="/about" className="hover:text-[#7A1CAC] mt-1 ml-2">About</Link>
                    <Link href="/education" className="hover:text-[#7A1CAC] mt-1 ml-2">Education</Link>
                    <Link href="/skills" className="hover:text-[#7A1CAC] mt-1 ml-2">Skills</Link>
                    <Link href="/contact" className="hover:text-[#7A1CAC] mt-1 ml-2">Contact</Link>
                    <Link href="/resume" className="hover:text-[#7A1CAC] mt-1 ml-2">Resume</Link>
                </nav>
            </header>
            <hr />
            
         <hr />
        </>
    )
}
