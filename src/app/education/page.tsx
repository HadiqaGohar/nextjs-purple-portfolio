

export default function Education() {
    return (
        <>
            <main className="min-h-screen flex relative">
                {/* Left side with 75% width and background color */}
                <div className="min-h-screen w-full bg-[#2E073F] flex flex-col">

                    {/* hr & 3 DOTS... */}
                    <div className="grid grid-flow-col gap-4 justify-end m-5">
                        <hr className="mt-4 border-2 lg:border-4 border-[#AD49E1] w-20 md:w-28" />
                        {Array(3).fill(
                            <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
                        )}
                    </div>

                    <h1 className="xl:mr-48 text-white text-4xl mt-48 sm:ml-40 font-semibold italic">
                        MY EDUCATION
                        <hr className="mt-4 border-4 border-[#AD49E1] w-28 ml-0" />
                    </h1>

                    <div className="sm:ml-40 mt-8 mr-48">
                        <h3 className="text-[#AD49E1] text-5xl font-semibold font-serif">
                            2020-2022 <span className="text-2xl text-white">Matric of Science in <span className="text-[#AD49E1]">(Biology)</span></span>
                        </h3>
                        <p className="text-white text-xl mt-2 ml-16 font-extrabold">School: <span className="text-[#AD49E1] font-semibold">E.A.B.G.G.S.S</span></p>
                    </div>

                    <div className="sm:ml-40 mt-4 mr-48" >
                        <h3 className="text-[#AD49E1] text-5xl font-semibold font-serif">
                            2023-2024 <span className="text-2xl text-white">Intermediate of Science in <span className="text-[#AD49E1]">(Pre-medical)</span></span>
                        </h3>
                        <p className="text-white text-xl mt-2 ml-16 font-extrabold">College: <span className="text-[#AD49E1] font-semibold">G.I.S.A.C.C</span></p>
                    </div>

                    <div className="sm:ml-40 mt-4 mr-48">
                        <h3 className="text-[#AD49E1] text-5xl font-semibold font-serif">
                            2024-2025 <span className="text-2xl text-white">Artificial Intelligence <span className="text-[#AD49E1]">(AI)</span></span>
                        </h3>
                        <p className="text-white text-xl mt-2 ml-16 font-extrabold">University: <span className="text-[#AD49E1] font-semibold">Sindh Governor House <span className="text-white">(GIAIC)</span></span></p>
                    </div>

                    {/* Image for small devices */}
                    <img
                    src="https://img.freepik.com/premium-photo/magic-book-purple-neon-light-cover_729592-80.jpg"
                        // src="https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg"
                        className="mt-4 mx-auto rounded-full h-[200px] w-[200px] object-cover border border-[#AD49E1] shadow-[0_0_10px_1px_rgba(173,73,225,0.8)] block xl:hidden"
                        alt="Hadiqa Gohar"
                    />

                    {/* Three Dots */}
                    <div className="grid grid-flow-col gap-4 justify-start mt-[200px] mx-5 mb-6">
                        <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
                        <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
                        <div className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"></div>
                        <div className="col-span-full mt-4">
                            <hr className="border-2 lg:border-4 border-[#AD49E1] w-20 md:w-28 mx-auto" />
                        </div>
                    </div>

                
                {/* Image positioned 70% on the left section and hidden on small devices */}
                <img
                src="https://img.freepik.com/premium-photo/magic-book-purple-neon-light-cover_729592-80.jpg"
                    // src="https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg"
                    className="absolute left-[82.5%] transform -translate-x-[80%] top-1/2 -translate-y-1/2 rounded-full h-[400px] w-[400px] object-cover m-2 border border-[#AD49E1] shadow-[0_0_10px_1px_rgba(173,73,225,0.8)] hidden xl:block"
                    alt="Hadiqa Gohar"
                />

                </div>
            </main>
        </>
    );
}
