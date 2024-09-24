

export default function Skills() {
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
                <section id="skills" className="py-16 bg-[#2E073F] xl:mr-40">
                    <div className="text-center text-5xl font-bold mb-8 shadow-text transition text-white italic ml-4 mt-16">SKILLS</div>
                    <div className="mt-20 max-w-4xl mx-auto shadow-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">HTML</h1>
                        </div>
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">CSS</h1>
                        </div>
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">JavaScript</h1>
                        </div>
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">TypeScript</h1>
                        </div>
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">Node.js</h1>
                        </div>
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">Python</h1>
                        </div>
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">Next.js</h1>
                        </div>
                        <div className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">React.js</h1>
                        </div>
                    </div>
                    <div className="text-center text-5xl font-bold mb-8 shadow-text transition text-white italic ml-4 mt-16">FIND ME</div>
                    <div className="mt-20 max-w-4xl mx-auto shadow-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 text-center">
                        <a href="https://github.com/HadiqaGohar" className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">Github</h1>
                        </a>
                        <a href="https://vercel.com/hadiqa-gohar-s-projects" className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">Vercel</h1>
                        </a>
                        <a href="https://www.npmjs.com/~hadiqagohar" className="border rounded-lg p-4 shadow-lg text-white bg-[#7A1CAC] hover:text-[#7A1CAC] hover:bg-white transition-colors duration-300 transform hover:scale-105">
                            <h1 className="text-xl font-semibold">NPM</h1>
                        </a>
                    </div>
                </section>
                {/* Image for small devices */}
                <img
                 src="https://img.freepik.com/premium-photo/robot-with-purple-lights_81048-38584.jpg?w=826"
                    // src="https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg"
                    className="mt-4 mx-auto rounded-full h-[200px] w-[200px] object-cover border border-[#AD49E1] shadow-[0_0_10px_1px_rgba(173,73,225,0.8)] block xl:hidden"
                    alt="Hadiqa Gohar"
                />
                
                {/* Image positioned 70% on the left section and hidden on small devices */}
                <img
                 src="https://img.freepik.com/premium-photo/robot-with-purple-lights_81048-38584.jpg?w=826"
                    
                    className="absolute left-[82.5%] transform -translate-x-[80%] top-1/2 -translate-y-1/2 rounded-full h-[400px] w-[400px] object-cover m-2 border border-[#AD49E1] shadow-[0_0_10px_1px_rgba(173,73,225,0.8)] hidden xl:block"
                    alt="Hadiqa Gohar"
                />
                 {/* Three         Dots */}
        <div className="grid grid-flow-col gap-4 justify-start mt-[70px] mx-5 mb-6">
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

        </main>
    )
}