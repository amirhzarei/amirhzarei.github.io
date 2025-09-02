"use client";
import React from "react";
import { MY_ACHIEVEMENTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import SectionTitle from './sectionTitle';
import parse from 'html-react-parser';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Achivment = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section md:mb-40" id="achivments">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Achivments" />

                <div className="grid gap-14">
                    {MY_ACHIEVEMENTS.map((item) => {
                        const IconComponent = item.logo;
                        return (
                            <div
                                key={item.title}
                                className="experience-item group relative cursor-pointer"
                            >
                                <div className="flex items-center gap-5">
                                    <IconComponent className="w-10 h-10 text-muted-foreground mb-3" />

                                    <p className="text-5xl font-anton leading-none mb-2.5">
                                        {item.title}
                                    </p>
                                </div>
                                <p className="text-lg text-muted-foreground">
                                    {item.year}
                                </p>
                                <div
                                    className="absolute left-2/4 top-1/2 -translate-y-1/2 ml-6 w-[500px] z-10 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                                    style={{ minWidth: '18rem' }}
                                >
                                    <div className="bg-background border border-muted rounded-lg shadow-lg p-4"

                                    >
                                        <p className="text-md text-muted-foreground text-justify">
                                            {parse(item.description)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achivment;
