"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ececec] font-sans mt-12">
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 border-b border-[#0d414793]">
        {/* Column 1 */}
        <div className="flex flex-col space-y-6 md:px-10 border-b border-[#0d414793] md:border-none pb-6 md:pb-0">
          <Image
            src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/footer-logo.svg"
            alt="Capgemini"
            width={160}
            height={60}
          />
          <p className="text-[16px]">Our brands:</p>
          <div className="space-y-4">
            <Image
              src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Capgemini_Engineering.svg"
              alt="Engineering"
              width={210}
              height={40}
            />
            <Image
              src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Capgemini_Invent.svg"
              alt="Invent"
              width={160}
              height={40}
            />
            <Image
              src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Sogeti.svg"
              alt="Sogeti"
              width={160}
              height={40}
            />
            <Image
              src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Frog-Design.svg"
              alt="Frog"
              width={160}
              height={40}
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4 flex flex-col text-[16px] border-b border-[#0d414793] md:border-none pb-6 md:pb-0">
          {[
            "Insights",
            "Industries",
            "Services",
            "Careers",
            "News",
            "About us",
            "Contact us",
            "Investors",
          ].map((text, idx) => (
            <Link
              href="#"
              key={text}
              className="relative w-fit transition-colors duration-300 text-[#0d4147] hover:text-[#0066b3] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0066b3] after:transition-all after:duration-300 hover:after:w-full"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-4 flex flex-col text-[16px] pb-4 md:pb-0">
          {[
            "Accessibility",
            "Cookie policy",
            "Cookie settings",
            "Privacy notice",
            "Security vulnerability notification",
            "SpeakUp",
            "Terms of use",
            "Fraud alert",
          ].map((text, idx) => (
            <Link
              href="#"
              key={text}
              className="relative w-fit transition-colors duration-300 text-[#0d4147] hover:text-[#0066b3] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0066b3] after:transition-all after:duration-300 hover:after:w-full"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-8 md:px-16 py-6 sm:py-8 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
        {/* Social Icons*/}
        <div className="flex w-full justify-center md:justify-end space-x-4 order-1 md:order-2 mb-2 md:mb-0">
          {[
            { src: "/assets/fb.svg", alt: "Facebook" },
            { src: "/assets/twit.svg", alt: "Twitter" },
            { src: "/assets/linked.svg", alt: "LinkedIn" },
            { src: "/assets/yt.svg", alt: "YouTube" },
          ].map((icon, index) => (
            <Link href="#" key={index} className="relative group">
              {/* Tooltip */}
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                {icon.alt}
              </span>

              {/* Icon Button */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black hover:border-[#0e89e7] transition-colors duration-200 group-hover:scale-110 ease-in-out">
                {/* Circular expanding background */}
                <div
                  className="absolute inset-0 bg-[#0e89e7] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0"
                  style={{ transformOrigin: "-60% 70%" }}
                />

                {/* Icon layer */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Copyright*/}
        <div className="text-center text-[14px] text-[#0d4147] order-2 md:order-1 w-full md:w-auto">
          © 2025 Capgemini. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
