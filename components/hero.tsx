"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <>
      {/* Hero Video Section */}
      <section className="relative w-full h-screen overflow-hidden font-poppins">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source
            src="https://www.capgemini.com/wp-content/uploads/2025/06/TDF-video-loop-option2.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-16">
          <div
            className="text-white p-4 sm:p-6 md:p-10 max-w-xs sm:max-w-sm md:max-w-lg shadow-[0_25px_100px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.5)] rounded-md"
            style={{
              backgroundImage: "linear-gradient(244deg, rgba(0, 123, 189, 0.9), rgba(0, 63, 97, 0.9))",
            }}
          >
            <p className="text-base sm:text-lg md:text-2xl lg:text-[40px] font-medium leading-snug highlight-hover">
              Capgemini becomes an Official Partner of the Tour de France
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-8 sm:py-12 bg-white font-poppins">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-4 sm:p-6 md:p-10 gap-6 sm:gap-8 md:gap-16 relative">
          {/* Image Block (Right Side) */}
          <div className="relative w-full h-64 md:h-80 lg:h-[360px] overflow-hidden group order-1 md:order-2 mx-auto md:mr-0 md:ml-auto md:w-[90%] border-2 border-black hover:border-none">
            <Image
              src="/assets/sailor.webp"
              alt="Sailing Wealth"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Text Block*/}
          <div className="order-2 md:order-1 relative z-10 mt-6 md:mt-0">
            <div className="bg-white shadow-2xl p-6 sm:p-8 md:p-10 w-full md:absolute md:-left-10 md:top-1/2 md:-translate-y-1/2 md:w-[120%] lg:w-[140%] mx-auto md:mx-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                World Wealth Report 2025
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6">Sail the great wealth transfer</p>
              <Link
                href="#"
                className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Read more
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="w-full px-4 py-8 sm:py-12 bg-white font-poppins">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-6 sm:mb-8">
          Latest insights
        </h1>
        <div className="max-w-screen-xl mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%] items-center gap-6 md:gap-0">
          {/* Image Block with overlap */}
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[400px] overflow-hidden group order-2 md:order-1">
            <Image
              src="/assets/insight1.webp"
              alt="Sailing Wealth"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Text Block with overlap */}
          <div className="relative z-10 order-1 md:order-2">
            <div className="bg-white shadow-xl p-4 sm:p-5 w-full md:w-[110%] lg:w-[90%] -mt-6 sm:-mt-8 md:-mt-0 md:-ml-10 lg:-ml-20 xl:-ml-32">
              <p className="text-xs font-extralight mb-2 sm:mb-3 px-3 sm:px-5">- Capgemini Research Institute</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 px-3 sm:px-5 highlight-hover">
                Global youth and sustainability
              </h3>
              <Link href="#" className="text-blue-600 px-3 sm:px-5 text-xs sm:text-sm">
                CAPGEMINI RESEARCH INSTITUTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-8 sm:py-12 bg-white font-poppins mb-3">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start relative p-4 sm:p-8 md:p-12">
          {/* Left - Blue Card */}
          <div className="bg-[#0071b9] text-white w-full sm:max-w-[400px] p-6 md:p-10 h-full flex flex-col justify-between min-h-[250px] mx-auto sm:ml-0 md:ml-10 lg:ml-20 relative z-10">
            <p className="text-sm mb-4">— Capgemini Research Institute</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug mb-4 highlight-hover">
              Driving business value with AI agents: A conversation with Dr Walter Sun
            </h2>
            <Link href="#" className="text-sm mt-auto font-semibold">
              CAPGEMINI RESEARCH INSTITUTE
            </Link>
          </div>

          {/* Right - Image Card */}
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[440px] overflow-hidden group flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <Image
            src="/assets/insight2.webp"
            alt="Insight visual"
            fill
            className="object-cover hover:scale-120 transition-transform duration-500"
            style={{ objectPosition: "center" }}
            priority
              />
            </div>
            {/*Text Block*/}
            <div
              className="absolute z-30 bg-white p-8 sm:p-10 md:p-12 shadow-2xl min-h-[140px] flex flex-col "
              style={{
            width: "8cm",
            left: "23%",
            top: "50%",
            transform: "translate(-50%, -50%)",
              }}
            >
              <p className="text-xs sm:text-sm text-gray-500 mb-2">— Report</p>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black highlight-hover">
            TechnoVision 2025
              </h3>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-left max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 mt-6 sm:mt-8">
          <button className="px-4 sm:px-6 py-2 sm:py-3 border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300">
            More insights →
          </button>
        </div>
      </section>

      {/* Stories */}
      <section className="w-full py-8 sm:py-12 bg-white font-poppins">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-6 sm:mb-8 px-4">
          Recent Client Stories
        </h1>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          {/* Background Image */}
          <Image
            src="/assets/insight1.webp"
            alt="Sailing Wealth"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />

          {/* Overlapping Text Box*/}
          <div className="absolute top-1/2 left-4 sm:left-6 md:left-12 transform -translate-y-1/2 bg-white shadow-xl rounded-md w-[90%] sm:w-[80%] md:w-[60%] lg:w-[500px] p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 mb-2 font-medium highlight-hover">
              ABN AMRO adopts a future-focused approach to Gen AI development
            </h3>
            <p className="text-xs sm:text-sm font-extralight mb-4 line-clamp-3 sm:line-clamp-none">
              Working with Capgemini as its project partner, the bank transitions to Microsoft Copilot and launches a
              new Gen AI factory approach to become a personal bank in the digital age
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Read more <span className="ml-2 sm:ml-3">→</span>
            </Link>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 sm:gap-6">
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-800 bg-white text-lg sm:text-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center">
              ←
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-800 bg-white text-lg sm:text-xl font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-8 sm:py-12 bg-white font-poppins">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">Latest news</h2>

          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 sm:gap-8 md:gap-10">
            {/* Left Featured News */}
            <div>
              <p className="text-sm text-gray-500 mb-2">— Sponsorship news</p>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-2 highlight-hover">
                Capgemini becomes an Official Partner of the Tour de France and Tour de France Femmes avec Zwift until
                2029 to power cycling through tech and innovation
              </h3>
              <p className="text-sm text-gray-500">Jun 5, 2025</p>
            </div>

            {/* Right News List */}
            <div className="space-y-4 sm:space-y-6">
              {/* Item 1 */}
              <div className="border-b pb-4">
                <p className="text-sm text-gray-500 mb-1">— Reports</p>
                <h4 className="text-sm sm:text-md text-black font-medium mb-1 highlight-hover">
                  North America high-net-worth individual population surges, while Europe and Middle East shrink
                </h4>
                <p className="text-sm text-gray-500">Jun 4, 2025</p>
              </div>

              {/* Item 2 */}
              <div className="border-b pb-4">
                <p className="text-sm text-gray-500 mb-1">— Partners</p>
                <h4 className="text-sm sm:text-md text-black font-medium mb-1 highlight-hover">
                  Capgemini, Mistral AI and SAP combine forces to offer secure, scalable gen AI-powered solutions for
                  regulated industries
                </h4>
                <p className="text-sm text-gray-500">May 26, 2025</p>
              </div>

              {/* Item 3 */}
              <div className="border-b pb-4">
                <p className="text-sm text-gray-500 mb-1">— Reports</p>
                <h4 className="text-sm sm:text-md text-black font-medium mb-1 highlight-hover">
                  Nine in ten public sector organizations to focus on agentic AI in the next 2-3 years, but data
                  readiness is still a challenge
                </h4>
                <p className="text-sm text-gray-500">May 20, 2025</p>
              </div>
            </div>
          </div>

          {/* See All News Button */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <button className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
              See all news <span className="ml-2 sm:ml-3">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Inside Stories Section */}
      <section className="w-full px-4 sm:px-6 py-8 sm:py-12 bg-white font-poppins">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">Inside stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Main Story */}
            <div className="md:col-span-2">
              <div className="w-full h-48 sm:h-64 md:h-[360px] overflow-hidden rounded-md mb-4">
                <img src="/assets/1.webp" alt="Tech lessons" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-gray-500 mb-1">— Future-shaping projects</p>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-1 highlight-hover">
                Tech lessons for positive futures
              </h3>
              <p className="text-sm text-gray-600">The lasting value of a team tech challenge</p>
            </div>

            {/* Right Side Stories */}
            <div className="flex flex-col gap-6">
              {/* Story 1 */}
              <div>
                <div className="w-full h-[120px] sm:h-[160px] overflow-hidden rounded-md mb-3">
                  <img src="/assets/2.webp" alt="New career" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-gray-500 mb-1">— Life at Capgemini</p>
                <h4 className="text-sm sm:text-md font-medium text-black mb-1 highlight-hover">New career, new you</h4>
                <p className="text-sm text-gray-600">Changing careers to change your life</p>
              </div>

              {/* Story 2 */}
              <div>
                <div className="w-full h-[120px] sm:h-[160px] overflow-hidden rounded-md mb-3">
                  <img src="/assets/3.webp" alt="Sustainability" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-gray-500 mb-1">— Environment</p>
                <h4 className="text-sm sm:text-md font-medium text-black mb-1 highlight-hover">
                  A forum for sustainability
                </h4>
                <p className="text-sm text-gray-600">Getting the sustainability message heard by world leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white font-poppins">
        {/* Left Text Block */}
        <div className="w-full md:w-1/2 bg-[#0066A1] text-white px-6 sm:px-8 py-12 sm:py-16 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Discover our 2024 Integrated Annual Report</h2>
          <p className="text-sm sm:text-md">Partner for a digital and sustainable world</p>
          <button className="mt-4 px-4 sm:px-6 py-2 border border-white rounded-full text-sm flex items-center gap-2 hover:bg-white hover:text-[#0066A1] transition">
            Discover more <span className="text-lg">→</span>
          </button>
        </div>

        {/* Right Image Block */}
        <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-[320px] overflow-hidden relative">
          <img src="/assets/sailor.webp" alt="Annual Report Visual" className="w-full h-full object-cover" />

          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-1 shadow">
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${idx === 0 ? "bg-black" : "bg-gray-300"}`}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
