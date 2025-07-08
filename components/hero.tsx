"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";

export default function Hero() {
  return (
    <>
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="top-0 left-0 w-full h-screen bg-white">
        <img
          src="/assets/DigitalBanner.webp"
          alt="bg"
          className="absolute inset-0 w-full h-2/3 lg:h-full object-cover"
        />
        {/* Overlay Content Card */}
        <div
          className="
            absolute
            bottom-[40px] md:bottom-[20px] lg:bottom-[60px]
            left-1/2 md:left-[30px]
            -translate-x-1/2 md:translate-x-0
            bg-gradient-to-br from-[#007bbdE6] to-[#003f61E6]
    rounded-md shadow-2xs
   sm:p-8 md:p-10
    p-[32px] 
    z-10
    flex flex-col justify-center gap-4
  "
        >


          <h1
            className="
    text-3xl sm:text-3xl md:text-4xl 
    text-white 
    text-[clamp(2rem, 4vw, 4rem)] 
    font-bold mb-4 
    transition-all duration-300
    group relative inline-block
  "
            style={{ fontFamily: 'Ubuntu' }}
          >
            <span
              className="
      relative z-10
      group-hover:text-black
      transition-all duration-300
    "
              style={{
                background:
                  "linear-gradient(to right, #00E6E3 0%, #00E6E3 100%) no-repeat 0px 100% / 0px 100%",
                transition: "background-size 0.4s ease-in-out, color 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundSize = "100% 100%";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundSize = "0px 100%";
              }}
            >
              The strategic edge
            </span>
          </h1>

          <p className="text-md font-medium text-white text-[clamp(1rem, 3vw, 1.5rem)] mb-6" style={{ fontFamily: "Ubuntu" }}>
            How digital continuity drives business outcomes in aerospace and defense
          </p>
        </div>
      </section>


      {/* Technology Convergence */}
      <section className="w-full bg-white font-Ubuntu pb-[60px] relative mt-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-16 p-4 sm:p-6 md:p-10 relative group">
          {/* Image Block */}
          <div className="relative w-[97%] md:w-[528px] lg:w-[600px] h-[300px] md:h-[380px] lg:h-[400px] mx-auto overflow-visible order-1 md:order-2">
            <Image
              src="/assets/TechConv.webp"
              alt="Technology Convergence"
              fill
              className="object-cover transition-transform duration-500 md:group-hover:scale-110"
              style={{ position: "absolute" }}
              priority
            />
            {/* Mobile/Tablet Overlay Card */}
            <div className="md:hidden absolute bottom-[-160px] left-1/2 -translate-x-1/2 w-[90%] bg-white shadow-xl p-6 sm:p-8 z-20 min-h-[220px]">
              <h2 className="text-xl sm:text-2xl text-gray-900 mb-4">Technology convergence</h2>
              <p className="text-gray-600 mb-4">Exploring the converging nature of today's tech explosion</p>
              <div className="flex justify-end">
                <Link href="#" className="group relative inline-flex items-center px-4 sm:px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-medium overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200">
                  <span className="absolute inset-0 w-0 group-hover:w-full bg-teal-300 transition-all duration-500 ease-out z-0" />
                  <span className="relative z-10 group-hover:text-black"><span className="hidden sm:inline">Read more</span> <span className="ml-2">→</span></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Text Card */}
          <div className="order-2 md:order-1 relative w-full z-10 hidden md:block">
            <div className="bg-white shadow-xl p-6 sm:p-8 md:p-10 w-[90%] lg:w-[140%] h-[300px] absolute top-1/2 left-0 -translate-y-1/2 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-6">Technology convergence</h2>
              <p className="text-gray-600 mb-4 sm:mb-6">Exploring the converging nature of today's tech explosion</p>
              <div className="mt-auto pt-6 sm:pt-10 flex justify-end">
                <Link href="#" className="group relative inline-flex items-center px-4 sm:px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-medium overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200">
                  <span className="absolute inset-0 w-0 group-hover:w-full bg-teal-300 rounded-none sm:rounded-full transition-all duration-500 ease-out z-0" />
                  <span className="relative z-10 group-hover:text-black"><span className="hidden sm:inline">Read more</span> <span className="ml-2">→</span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="w-full px-4 py-8 sm:py-12 mt-[120px] sm:mt-[60px] md:mt-0 bg-white font-Ubuntu">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] text-gray-900 mb-6 sm:mb-8 ml-3">Latest insights</h1>
        <div className="relative max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[75%_25%] items-center md:h-[350px] lg:h-[400px] gap-6 md:gap-0">
          {/* Image Block */}
          <div className="relative w-full h-64 sm:h-72 md:h-full overflow-hidden group order-1">
            <Image
              src="/assets/insight1.webp"
              alt="Sailing Wealth"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Desktop Text */}
          <div className="hidden md:flex order-2 relative z-20 items-center justify-start h-full">
            <div className="bg-white shadow-2xl p-8 -ml-[220px] flex flex-col justify-center" style={{ width: "clamp(320px, 40vw, 600px)", height: "clamp(240px, 75%, 300px)" }}>
              <p className="text-xs font-extralight mb-3">— Capgemini Research Institute</p>
              <h3 className="text-2xl text-gray-900 mb-4 font-semibold leading-snug">Global youth and sustainability</h3>
              <Link href="#" className="text-[#0070ad] text-sm font-medium mt-auto">CAPGEMINI RESEARCH INSTITUTE</Link>
            </div>
          </div>

          {/* Mobile/Tablet Text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[90%] bg-white p-4 sm:p-5 z-20 shadow-2xl md:hidden min-h-[220px]" style={{ bottom: '-8rem' }}>
            <p className="text-xs font-extralight mb-2 sm:mb-3">— Capgemini Research Institute</p>
            <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">Global youth and sustainability</h3>
            <Link href="#" className="text-[#0070ad] text-xs sm:text-sm">CAPGEMINI RESEARCH INSTITUTE</Link>
          </div>
        </div>
      </section>

      {/* Public Sector Insight */}
      <section className="w-full bg-white py-12 font-Ubuntu">
        <div className="max-w-screen-xl mx-auto relative">
          {/* Desktop */}
          <div className="hidden md:flex items-start gap-60">
            {/* Blue Card */}
            <div className="bg-[#0071b9] text-white w-[400px] h-[400px] p-10 flex flex-col justify-between">
              <p className="text-base mb-2">— Capgemini Research Institute</p>
              <h2 className="text-2xl leading-snug font-semibold mb-6">Technology and the public sector: A conversation with David Knott</h2>
              <Link href="#" className="text-sm font-semibold mt-auto">CAPGEMINI RESEARCH INSTITUTE</Link>
            </div>

            {/* Image + Overlay */}
            <div className="relative flex-1 h-[400px]">
              <Image
                src="/assets/insight1.webp"
                alt="World Wealth Report"
                fill
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute top-1/2 left-[-220px] transform -translate-y-1/2 bg-white shadow-2xl p-8 w-[420px] min-h-[320px] flex flex-col justify-center z-10">
                <p className="text-sm text-black mb-3">— Capgemini Research Institute</p>
                <h3 className="text-2xl font-semibold text-black leading-snug mb-4">World Wealth Report 2025</h3>
                <Link href="#" className="text-[#0070ad] text-sm font-medium mt-auto">CAPGEMINI RESEARCH INSTITUTE</Link>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet */}
          <div className="flex flex-col md:hidden gap-6 px-2 mt-20">
            <div className="relative w-full h-[280px] sm:h-[300px] overflow-visible">
              <Image
                src="/assets/insight1.webp"
                alt="World Wealth Report"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-2xl p-6 sm:p-8 z-10 min-h-[220px]" style={{ bottom: '-80px' }}>
                <p className="text-sm text-black mb-2">— Capgemini Research Institute</p>
                <h3 className="text-xl font-semibold text-black mb-2">World Wealth Report 2025</h3>
                <Link href="#" className="text-[#0070ad] text-sm font-medium">CAPGEMINI RESEARCH INSTITUTE</Link>
              </div>
            </div>

            {/* Blue Card */}
            <div className="bg-[#0071b9] text-white w-full p-8 sm:p-8 mt-20">
              <p className="text-sm mb-3">— Capgemini Research Institute</p>
              <h2 className="text-xl sm:text-2xl font-semibold leading-snug mb-4">Technology and the public sector: A conversation with David Knott</h2>
              <Link href="#" className="text-sm font-semibold">CAPGEMINI RESEARCH INSTITUTE</Link>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-screen-xl mx-auto mt-10 px-4 text-center md:text-left">
          <button className="group relative inline-flex items-center px-6 py-3 border border-black rounded-full text-sm font-medium text-black overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200">
            <span className="absolute inset-0 w-0 group-hover:w-full bg-teal-300 rounded-full transition-all duration-500 ease-out z-0" />
            <span className="relative z-10 group-hover:text-black">More insights →</span>
          </button>
        </div>
      </section>




      <section className="w-full bg-white font-Ubuntu">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 px-4 sm:px-6 max-w-screen-xl mx-auto mb-8">
          Recent client stories
        </h2>

        {/* Image and overlays */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/assets/insight1.webp"
            alt="Client Story"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md">
            <button className="text-xl text-gray-400 hover:text-black">←</button>
            {[0, 1, 2].map((dot, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${idx === 0 ? "bg-black" : "bg-gray-300"}`}
              />
            ))}
            <button className="text-xl text-gray-400 hover:text-black">→</button>
          </div>
        </div>

        {/* Desktop Text Box */}
        <div className="relative hidden md:flex justify-start px-4 sm:px-6 -mt-[260px] z-20">
          <div className="bg-white shadow-xl w-full max-w-xl p-10">
            <h3 className="text-2xl text-black mb-4 font-semibold leading-snug">
              Refreshing data migration for Coca-Cola Bottlers Japan
            </h3>
            <p className="text-gray-800 text-base font-light leading-relaxed mb-6">
              Working with a collaborative team drawn from Capgemini and its partners
              Microsoft, and NetApp, Coca-Cola Bottlers Japan performs one of the
              largest cloud-based SAP data migrations in the world in less than six months.
            </p>
            <Link
              href="#"
              className="group relative inline-flex items-center px-6 py-2 border border-black rounded-full text-sm font-medium text-black overflow-hidden transition-all duration-300 group-hover:scale-105"
            >
              <span className="absolute inset-0 w-0 group-hover:w-full bg-teal-300 transition-all duration-500 ease-out rounded-full z-0" />
              <span className="relative z-10 group-hover:text-black">Read more →</span>
            </Link>
          </div>
        </div>


        {/* ⬇️ Mobile Text Card (separate section) */}
        <div className="block md:hidden px-5 -mt-4 z-10 relative">
          <div className="bg-white shadow-xl px-4 pt-6 pb-8">
            <h3 className="text-xl font-semibold text-black mb-3">
              Refreshing data migration for Coca-Cola Bottlers Japan
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              Working with a collaborative team drawn from Capgemini and its partners
              Microsoft, and NetApp, Coca-Cola Bottlers Japan performs one of the
              largest cloud-based SAP data migrations in the world in less than six months.
            </p>
            <Link
              href="#"
              className="group relative inline-flex items-center px-5 py-2 border border-black rounded-full text-sm font-medium text-black overflow-hidden transition-all duration-300 group-hover:scale-105"
            >
              <span className="absolute inset-0 w-0 group-hover:w-full bg-teal-300 transition-all duration-500 ease-out z-0" />
              <span className="relative z-10 group-hover:text-black">Read more →</span>
            </Link>
          </div>
        </div>
      </section>




      <section className="w-full px-4 sm:px-6 md:px-10 py-10 bg-white font-Ubuntu">
        {/* Heading */}
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] text-black font-semibold mb-10">
          Latest news
        </h2>

        {/* Grid */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[40%_1fr] gap-10 md:gap-24">
          {/* Left (Featured News) */}
          <div className="border-b md:border-none pb-8 md:pb-0">
            <p className="text-sm text-black mb-3">— Reports</p>
            <h3 className="text-xl sm:text-2xl md:text-[1.8rem] text-black font-semibold leading-snug mb-4 highlight-hover">
              Agentic AI integration set to accelerate this year among Gen AI early adopters
            </h3>
            <p className="text-sm text-gray-700 leading-snug mb-4">
              A Capgemini Research Institute report published today, ‘AI in action: How Gen AI and agentic AI redefine business operations,’ finds that AI is now driving positive returns on investment (ROI), with the average being nearly a 1.7 times return.
            </p>
            <p className="text-sm text-black">Jun 18, 2025</p>
          </div>

          {/* Right News List */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="border-b pb-6">
              <p className="text-sm text-black mb-2">— Reports</p>
              <h4 className="text-lg sm:text-xl md:text-[1.25rem] text-black font-semibold leading-snug mb-2 highlight-hover">
                eGovernment Benchmark 2025: Digitalization of public services in the EU accelerates, but cybersecurity and cross-border challenges remain
              </h4>
              <p className="text-sm text-black">Jun 17, 2025</p>
            </div>

            {/* Card 2 */}
            <div className="border-b pb-6">
              <p className="text-sm text-black mb-2">— Reports</p>
              <h4 className="text-lg sm:text-xl md:text-[1.25rem] text-black font-semibold leading-snug mb-2 highlight-hover">
                Aerospace and defense leaders are prioritizing digital continuity to tackle industry disruption
              </h4>
              <p className="text-sm text-black">Jun 12, 2025</p>
            </div>

            {/* Card 3 */}
            <div className="pb-6">
              <p className="text-sm text-black mb-2">— Reports</p>
              <h4 className="text-lg sm:text-xl md:text-[1.25rem] text-black font-semibold leading-snug mb-2 highlight-hover">
                EDETEK engages Capgemini to support its global transformation initiative and accelerate AI innovation in clinical development
              </h4>
              <p className="text-sm text-black">Jun 11, 2025</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center md:justify-start md:pl-2">
          <button
            className="group relative inline-flex items-center px-6 py-2 border border-black rounded-full text-sm font-medium text-black overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200 font-Ubuntu"
          >
            <span className="absolute inset-0 w-0 group-hover:w-full bg-teal-300 transition-all duration-500 ease-out rounded-full z-0" />
            <span className="relative z-10 group-hover:text-black">See all news →</span>
          </button>
        </div>

      </section>

      <section className="w-full px-4 sm:px-6 py-8 sm:py-12 bg-white font-Ubuntu">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-6 sm:mb-10">Inside stories</h2>

          {/* Mobile/Tablet View */}
          <div className="grid md:hidden grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/assets/1.webp"
                alt="Tech lessons"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-black mb-2">— Future-shaping projects</p>
                <h3 className="text-xl font-semibold text-black mb-2 highlight-hover">
                  Tech lessons for positive futures
                </h3>
                <p className="text-gray-600">The lasting value of a team tech challenge</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/assets/2.webp"
                alt="New career"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-black mb-2">— Life at Capgemini</p>
                <h4 className="text-xl font-semibold text-black mb-2 highlight-hover">
                  New career, new you
                </h4>
                <p className="text-gray-600">Changing careers to change your life</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src="/assets/3.webp"
                alt="Sustainability"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-black mb-2">— Environment</p>
                <h4 className="text-xl font-semibold text-black mb-2 highlight-hover">
                  A forum for sustainability
                </h4>
                <p className="text-gray-600">
                  Getting the sustainability message heard by world leaders
                </p>
              </div>
            </div>
          </div>

          {/*  Desktop View */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {/* Story 1 - Left */}
            <div className="col-span-2">
              <div className="w-full h-[360px] overflow-hidden mb-4 group">
                <img
                  src="/assets/1.webp"
                  alt="Tech lessons"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-black mb-2">— Future-shaping projects</p>
              <h3 className="text-2xl font-semibold text-black mb-2 highlight-hover">
                Tech lessons for positive futures
              </h3>
              <p className="text-gray-600">The lasting value of a team tech challenge</p>
            </div>

            {/* Right Column - Two stories stacked */}
            <div className="flex flex-col gap-6">
              {/* Story 2 */}
              <div>
                <div className="w-full h-[160px] overflow-hidden mb-3 group">
                  <img
                    src="/assets/2.webp"
                    alt="New career"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-black mb-2">— Life at Capgemini</p>
                <h4 className="text-xl font-semibold text-black mb-2 highlight-hover">
                  New career, new you
                </h4>
                <p className="text-gray-600">Changing careers to change your life</p>
              </div>

              {/* Story 3 */}
              <div>
                <div className="w-full h-[160px] overflow-hidden mb-3 group">
                  <img
                    src="/assets/3.webp"
                    alt="Sustainability"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-black mb-2">— Environment</p>
                <h4 className="text-xl font-semibold text-black mb-2 highlight-hover">
                  A forum for sustainability
                </h4>
                <p className="text-gray-600">
                  Getting the sustainability message heard by world leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative w-full min-h-[400px] flex flex-col-reverse md:flex-row">
        {/* Left: Text Block */}
        <div className="relative z-10 w-full md:w-3/5 bg-[#0066A1] text-white px-4 sm:px-8 md:px-16 pt-10 pb-16 flex flex-col justify-between">
          <div className="mt-5 ml-4 sm:ml-6 md:ml-8 space-y-2">
            <h2 className="text-base sm:text-lg lg:text-3xl leading-snug">
              Discover our 2024 Integrated Annual Report
            </h2>
            <p className="pt-3 sm:pt-5 text-lg sm:text-xl md:text-2xl">
              Partner for a digital and sustainable world
            </p>
          </div>

          {/* Discover Button */}
          <button
            className="ml-4 sm:ml-6 md:ml-8 mt-6 group relative inline-flex items-center gap-2 max-w-[11rem]
      border border-white rounded-full text-white 
      text-base sm:text-lg md:text-xl transition-all duration-300 ease-in-out 
      overflow-hidden transform group-hover:scale-105 
      group-hover:border-white"
          >
            <span
              className="absolute inset-0 
        w-0 group-hover:w-full 
        bg-teal-300 
        rounded-full 
        transition-all duration-500 ease-out 
        z-0"
            />
            <div className="px-5 py-2 sm:px-6 sm:py-3 text-sm font-bold flex items-center relative z-10 transition-colors duration-300 group-hover:text-[#0066A1]">
              Discover more <span className="text-xl ml-2">→</span>
            </div>
          </button>
        </div>

        {/* Right: Image + Slider Container */}
        <div className="relative w-full md:w-3/5 h-60 sm:h-72 md:h-auto">
          {/* Image */}
          <img
            src="/assets/sailor.webp"
            alt="Annual Report Visual"
            className="w-full h-full object-cover"
          />

          {/* Mobile Slider */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg z-20 md:hidden">
            <button className="text-gray-400 hover:text-black transition text-2xl">
              &lt;
            </button>
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition ${idx === 0 ? "bg-black" : "bg-gray-300"
                  }`}
              ></span>
            ))}
            <button className="text-gray-400 hover:text-black transition text-2xl">
              &gt;
            </button>
          </div>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center justify-between bg-white px-6 py-6 rounded-full shadow-lg z-10 min-w-[300px]">
          {/* Left Arrow */}
          <div className="pl-2">
            <button className="group relative z-10 w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
              <span className="z-20 text-gray-400 group-hover:text-white transition text-2xl">
                &lt;
              </span>
              <span className="absolute inset-0 w-0 h-full bg-blue-500 rounded-full z-10 transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-3">
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition ${idx === 0 ? "bg-black" : "bg-white border-2 border-gray-400"
                  }`}
              ></span>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="pr-2">
            <button className="group relative z-10 w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
              <span className="z-20 text-gray-400 group-hover:text-white transition text-2xl">
                &gt;
              </span>
              <span className="absolute inset-0 w-0 h-full bg-blue-500 rounded-full z-10 transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </section>

    </>
  )
}
