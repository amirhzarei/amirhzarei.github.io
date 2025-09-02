"use client";
import React from "react";
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import SectionTitle from './sectionTitle';
import { IExperience } from '@/types';
import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
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
        <section className="py-section md:mb-40" id="experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-14">
                    {MY_EXPERIENCE.map((item: IExperience, idx: number) => (
                        <div
                            key={item.title}
                            className="experience-item group relative cursor-pointer"
                        >
                            <div className="flex items-center">
                                <Image
                                    src={item.logo}
                                    alt="Kixy Logo"
                                    width={item.iconSize || 50}
                                    height={item.iconSize || 50}
                                    className={item.hasMargin ? "mr-4" : ""}
                                />
                                <Link
                                    href={item.companyLink}
                                    target="_blank"
                                    className="text-xl text-muted-foreground flex items-center gap-3 group/link relative"
                                >
                                    {item.company}
                                    <span className="transition-opacity duration-200 opacity-0 group-hover/link:opacity-100">
                                        <LinkIcon />
                                    </span>
                                </Link>
                            </div>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
