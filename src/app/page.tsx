'use client'


import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"; // Corrected Font Awesome imports
import { BiLogoInstagramAlt } from "react-icons/bi"; // Boxicons import
import { MdEmail } from "react-icons/md"; // Material Design Icons import
import { FaSquareFacebook } from "react-icons/fa6";




export default function Home() {
  return (
    <main className="min-h-screen flex relative">
      {/* Left side with 75% width and background color */}
      <div className="min-h-screen w-3/4 bg-[#2E073F] flex flex-col">

        {/* hr & 3 DOTS... */}
        <div className="grid grid-flow-col gap-4 justify-end m-5">
          <hr className="mt-4 border-2 lg:border-4 border-[#AD49E1] w-20 md:w-28" />
          {Array(3).fill(
            <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
          )}
        </div>

        {/* Headings */}
        <h1 className="text-white text-xl md:text-2xl mt-20 sm:mt-32 md:mt-48 mx-10 sm:mx-20 md:mx-40">
  𝓗𝓮𝓵𝓵𝓸 𝓔𝓿𝓮𝓻𝔂𝓸𝓷𝓮
</h1>
<h2 className="text-white text-4xl lg:text-6xl mt-2 mx-10 sm:mx-20 md:mx-40 font-bold">
  I&apos;m Hadiqa Gohar
</h2>
<h3 className="text-[#AD49E1] text-3xl md:text-4xl mt-2 mx-10 sm:mx-20 md:mx-40 font-semibold">
  And I&apos;m a Frontend Developer
</h3>


        {/* Social Media Icons */}
        <div className="flex space-x-2.5 m-5 ml-1 sm:ml-20 md:ml-40">
          <Link
            href="https://m.facebook.com/p/Hadiqa-Gohar-61554985182774/"
            aria-label="Facebook"
            className="flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-[#EBD3F8] hover:opacity-80 p-2 rounded-full"
          >
            <FaSquareFacebook size={30} color="#EBD3F8" />
          </Link>
          <Link
            href="https://pk.linkedin.com/in/hadiqa-gohar-b64778300"
            aria-label="LinkedIn"
            className="flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-[#EBD3F8] hover:opacity-80 p-2 rounded-full"
          >
            <FaLinkedin size={30} color="#EBD3F8" />
          </Link>
          <Link
            href="https://www.instagram.com/hadiqagohar12/"
            aria-label="Instagram"
            className="flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-[#EBD3F8] hover:opacity-80 p-2 rounded-full"
          >
            <BiLogoInstagramAlt size={30} color="#EBD3F8" />
          </Link>
          <Link
            href="https://github.com/HadiqaGohar"
            aria-label="GitHub"
            className="flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-[#EBD3F8] hover:opacity-80 p-2 rounded-full"
          >
            <FaGithubSquare size={30} color="#EBD3F8" />
          </Link>
          <Link
            href="mailto:tasleemhadiqa76@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center transition-transform transform hover:scale-110 hover:shadow-lg hover:shadow-[#EBD3F8] hover:opacity-80 p-2 rounded-full"
          >
            <MdEmail size={30} color="#EBD3F8" />
          </Link>
        </div>


        {/* Image for small devices */}
        <img
  src="https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg"
  className="mt-4 mx-auto rounded-full h-[200px] w-[200px] object-cover border border-[#AD49E1] shadow-[0_0_10px_1px_rgba(173,73,225,0.8)] block xl:hidden"
  alt="Hadiqa Gohar"
  width={200}
  height={200}
/>

        {/* Three         Dots */}
        <div className="grid grid-flow-col gap-4 justify-start mt-[310px] mx-5 mb-6">
          <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
          <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
          <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
          <div className="col-span-full mt-4">
            <hr className="border-2 lg:border-4 border-[#AD49E1] w-20 md:w-28 mx-auto" />
          </div>
        </div>
      </div>


      {/* Right side with 25% width and background color */}
      <div className="w-1/4 md:w-1/3 lg:w-1/4 bg-[#7A1CAC]"></div>

      {/* Image positioned 70% on the left section and hidden on small devices */}
      <img
  src="https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg"
  className="absolute left-[82.5%] transform -translate-x-[80%] top-1/2 -translate-y-1/2 rounded-full h-[400px] w-[400px] object-cover m-2 border border-[#AD49E1] shadow-[0_0_10px_1px_rgba(173,73,225,0.8)] hidden xl:block"
  alt="Hadiqa Gohar"
  width={400}
  height={400}
/>

    </main>
  )
}
