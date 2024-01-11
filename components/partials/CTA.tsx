import Image from 'next/image';
import React from 'react';
import ChairImage1 from '@/assets/images/chair.png';
import ChairImage2 from '@/assets/images/chair2.png';

function CTA() {
    return (
        <section
            className="py-32 bg-gradient-to-r from-blue-100 to-pink-200 overflow-hidden"
            style={{ clipPath: 'polygon(0 5%, 100% 0%, 100% 100%, 0% 95%)' }}
        >
            <div
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center lg:my-12"
                data-aos="zoom-in"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Let&apos;s explore more...
                </span>
            </div>
            <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-16">
                <div className="bg-stripes-sky py-20 my-8">
                    <Image
                        data-aos="zoom-in"
                        className="w-[50%] lg:w-[70%] mx-auto hover:scale-110 transition-all duration-300"
                        width={500}
                        height={500}
                        src={ChairImage1}
                        alt="chair image"
                    />
                </div>
                <div className="mt-4 md:mt-0" data-aos="fade-right">
                    <div className="border-8 border-dashed border-gray-400 px-8 py-5 lg:py-10 backdrop-blur-xl bg-white/30 rounded-lg">
                        <h2 className="mb-4 text-xl md:text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        🌿 Sit in Style, Relax in Comfort: Your Perfect Chair
                            Awaits!
                        </h2>
                        <p className="font-light text-gray-500 text-md lg:text-lg text-justify">
                            Embrace unparalleled comfort and sophistication with
                            our premium chair. Designed for relaxation, its
                            plush, ergonomic build promises lasting support.
                        </p>
                    </div>
                </div>
            </div>

            <div className="gap-8 items-center pt-16 md:pt-0 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-16">
                <div className="order-last bg-stripes-pink py-16 my-8">
                    <Image
                        data-aos="zoom-in"
                        className=" w-[50%] lg:w-[70%] mx-auto hover:scale-110 transition-all duration-300 flex-1 lg:flex-none"
                        width={500}
                        height={500}
                        src={ChairImage2}
                        alt="chair image"
                    />
                </div>
                <div className="mt-4 md:mt-0" data-aos="fade-left">
                    <div className="border-8 border-dashed border-gray-400 p-5 lg:p-10 backdrop-blur-xl bg-white/30 rounded-lg">
                        <h2 className="mb-4 text-xl md:text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        🍃 Luxury Lounging: Unwind in Style
                        </h2>
                        <p className="mb-6 font-light text-gray-500 text-md lg:text-lg text-justify">
                            Dive into luxury with our sofa chair. Plush comfort
                            meets sleek design, offering the perfect blend of
                            relaxation and sophistication. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
