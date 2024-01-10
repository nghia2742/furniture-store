import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/assets/images/furnitureHero.png';

export default function Hero() {
    return (
        <section className="h-fit min-h-screen w-full py-12 lg:py-5">
            <div className="px-4 md:px-10">
                <div className="lg:flex gap-6 lg:gap-12 justify-center">
                    <Image
                        alt="Furniture"
                        className="lg:w-1/2 mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square"
                        src={HeroImage}
                        sizes="100vw"
                        draggable={false}
                        priority
                        data-aos="fade-left"
                    />
                    <div className="lg:w-1/2 flex flex-col justify-center space-y-4 relative lg:pl-8" data-aos="fade-up">
                        <div className="absolute top-0 left-0 z-10 w-4/5 h-4/5 rounded-full  bg-gradient-to-r from-blue-300 to-pink-300 opacity-60 blur-3xl" ></div>
                        <div className="mb-5 space-y-2 z-20" >
                            <h1 className="text-center py-8 text-slate-700 lg:text-left lg:py-0 text-3xl font-semibold tracking-tighter sm:text-4xl xl:text-5xl/none">
                                <div>💎 Premium Furniture</div>
                                <div className='lg:mt-2'>For Your Home</div>
                            </h1>
                            <p className="text-center lg:pt-3 lg:text-left lg:max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                We provide an exclusive range of quality
                                furniture, designed with love and crafted to
                                perfection. Transform your space with our
                                furniture.
                            </p>
                        </div>
                        <div className="flex z-20 flex-col gap-2 lg:flex-row pt-6">
                            <Link
                                className="btn bg-gradient-to-r from-blue-300 to-pink-300 text-white rounded-xl"
                                href="/shop"
                            >
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
