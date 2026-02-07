"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background - Deep black with subtle grain or gradient if needed */}
            <div className="absolute inset-0 bg-black" />

            {/* Subtle spotlight effect for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto md:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center md:text-left"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                            We build high-performance <br className="hidden md:block" />
                            websites and <span className="text-neutral-500">intelligent digital&nbsp;systems.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center md:text-left"
                    >
                        <p className="text-base md:text-lg text-neutral-500 mb-12 max-w-xl leading-relaxed font-light mx-auto md:mx-0">
                            Design, development, automation, and growth systems — built to&nbsp;scale.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center md:items-start gap-6 md:gap-8 justify-center md:justify-start"
                    >
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-white text-black text-base font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start a project
                            </span>
                        </Link>

                        <Link
                            href="#work"
                            className="flex items-center gap-2 text-white text-base font-medium hover:text-neutral-300 transition-colors group"
                        >
                            View our work
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
