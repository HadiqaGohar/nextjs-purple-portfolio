import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen flex relative">
            {/* Left side with 75% width and background color */}
            <div className="min-h-screen w-3/4 bg-[#2E073F] flex flex-col">
                {/* hr & 3 DOTS... */}
                <div className="grid grid-flow-col gap-4 justify-end m-5">
                    <hr className="mt-4 border-2 lg:border-4 border-[#AD49E1] w-20 md:w-28" />
                    {Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
                    ))}
                </div>

                <h1 className="text-white ml-0 font-bold text-4xl mt-48  md:ml-20 sm:ml-5  sm:text-3xl ">
                    Hi!
                </h1>
                <h2 className="text-[#AD49E1] text-5xl mt-2 ml-0 md:ml-20 sm:ml-5 font-bold  sm:text-4xl">
                    I'm Hadiqa Gohar
                    <hr className=" mx-auto mt-4 border-4 border-[#AD49E1] w-28 ml-0" />
                </h2>
                <p className="sm:mr-48 text-[#EBD3F8] text-xl mt-2 ml-0 md:ml-20 sm:ml-5 font-serif font-semibold  sm:text-lg ">
                    A passionate web developer with expertise in HTML, CSS, JavaScript, Python, and TypeScript. My focus is on creating dynamic and responsive web applications using modern tools like Next.js, React.js, and Tailwind CSS. I enjoy turning complex ideas into intuitive and engaging user experiences. With a background in science and AI studies, I bring a strong analytical approach to problem-solving. My commitment to continuous learning drives me to stay updated with the latest technologies and best practices in web development. I’m excited about every opportunity to innovate and grow in this ever-evolving field.
                </p>
                <Link href="/" passHref>
                    <button className="bg-[#EBD3F8] hover:bg-[#952dcd] hover:text-white h-[40px] w-[100px] border-2 rounded-lg text-[#2E073F] mt-6 ml-0 md:ml-20 sm:ml-5 font-bold transition-all duration-300 ease-in-out shadow-[0_0_15px_#952dcd] hover:shadow-[0_0_30px_#952dcd] mx-auto">
                        Read More
                    </button>
                </Link>

                {/* Image for small devices */}
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg"
                    className="mt-4 mx-auto rounded-full h-[200px] w-[200px] object-cover border border-[#AD49E1] shadow-[0_0_10px_1px_rgba(173,73,225,0.8)] block xl:hidden"
                    alt="Hadiqa Gohar"
                />

                {/* Three Dots */}
                <div className="grid grid-flow-col gap-4 justify-start mt-[260px] mx-5 mb-6">
                    {Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
                    ))}
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
            />
        </main>
    );
}
