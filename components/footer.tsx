'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f5] text-sm font-poppins">
            <div className="max-w-screen-xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
                {/* Column 1 - Logo & Brands */}
                <div className="flex flex-col items-start space-y-4">
                    <Image src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/footer-logo.svg" alt="Capgemini" width={160} height={60} />
                    <p className="mt-4 text-xl">Our brands:</p>
                    <div className="space-y-3 mb-4">
                        <Image src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Capgemini_Engineering.svg" alt="Engineering" width={160} height={40} />
                        <Image src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Capgemini_Invent.svg" alt="Invent" width={160} height={40} />
                        <Image src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Sogeti.svg" alt="Sogeti" width={160} height={40} />
                        <Image src="https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Frog-Design.svg" alt="Frog" width={160} height={40} />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-2 flex flex-col">
                    <Link href="#">Insights</Link>
                    <Link href="#">Industries</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">News</Link>
                    <Link href="#">About us</Link>
                    <Link href="#">Contact us</Link>
                    <Link href="#">Investors</Link>
                </div>

                {/* Column 3 */}
                <div className="space-y-2 flex flex-col">
                    <Link href="#">Accessibility</Link>
                    <Link href="#">Cookie policy</Link>
                    <Link href="#">Cookie settings</Link>
                    <Link href="#">Privacy notice</Link>
                    <Link href="#">Security vulnerability notification</Link>
                    <Link href="#">SpeakUp</Link>
                    <Link href="#">Terms of use</Link>
                    <Link href="#">Fraud alert</Link>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between'>
                <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-700 px-6">
                    © Capgemini, 2025. All rights reserved.
                </div>
                {/* Column 4 - Socials */}
                <div className="flex items-center gap-4 mt-6 md:mt-0">
                    {[
                        { platform: 'linkedin', url: '#' },
                        { platform: 'instagram', url: '#' },
                        { platform: 'facebook', url: '#' },
                        { platform: 'youtube', url: '#' },
                        { platform: 'tiktok', url: '#' },
                    ].map(({ platform, url }) => (
                        <Link key={platform} href="#" aria-label={platform}>
                            <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-gray-200 transition">
                                <img
                                    src={`/icons/${platform}.svg`}
                                    alt={platform}
                                    width={18}
                                    height={18}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
