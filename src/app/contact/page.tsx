export default function Contact() {
    return (
      <main className="min-h-screen flex relative">
        {/* Left side with 75% width and background color */}
        <div className="min-h-screen w-full bg-[#2E073F] flex flex-col">
  
          {/* hr & 3 DOTS... */}
          <div className="grid grid-flow-col gap-4 justify-end m-5">
            <hr className="mt-4 border-2 lg:border-4 border-[#AD49E1] w-20 md:w-28" />
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
                ></div>
              ))}
          </div>
  
          {/* Contact Section */}
          <section className="py-10">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-bold text-center mb-6 text-white text-5xl font-serif italic">
                Contact Me
              </h2>
  
              <form
                action="https://api.web3forms.com/submit"
                className="bg-[#EBD3F8] rounded-lg shadow-md p-6"
                method="POST"
              >
                <input type="hidden" name="access_key" value="671277a9-3056-46df-ae88-682920d99420" />
  
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-xl font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    placeholder="Your Name"
                    aria-label="Name"
                    required
                  />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-xl font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    placeholder="Your Email"
                    aria-label="Email"
                    required
                  />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-xl font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border rounded w-full py-2 px-3 text-gray-700"
                    rows={4}
                    placeholder="Your Message"
                    aria-label="Message"
                    required
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="bg-[#EBD3F8] hover:bg-[#952dcd] hover:text-white h-[50px] w-[150px] border-2 rounded-lg text-[#2E073F] mt-4 ml-10 mr-56 font-bold transition-all duration-300 ease-in-out shadow-[0_0_15px_#952dcd] hover:shadow-[0_0_30px_#952dcd] py-2 px-4"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Three Dots */}
            <div className="grid grid-flow-col gap-4 justify-start mt-[180px] mx-5 mb-6">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-[#EBD3F8] h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
                  ></div>
                ))}
              <div className="col-span-full mt-4">
                <hr className="border-2 lg:border-4 border-[#AD49E1] w-20 md:w-28 mx-auto" />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
  