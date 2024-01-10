'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CTA from '@/components/partials/CTA';
import Features from '@/components/partials/Features';
import Footer from '@/components/partials/Footer';
import Hero from '@/components/partials/Hero';
import Navbar from '@/components/partials/Navbar';
import Team from '@/components/partials/Team';
import ToTop from '@/components/partials/ToTop';

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1500, once: true });
    }, []);
    return (
        <div className="scroll-smooth">
            <Navbar />
            <Hero />
            <CTA />
            <Features />
            <Team />
            <Footer />
            <ToTop />
        </div>
    );
}
