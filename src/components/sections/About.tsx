"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-black border-t border-neutral-900">
            <div className="container-custom">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">About Fjord</h2>
                        <div className="space-y-6 text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                            <p>
                                Fjord is a digital studio focused on building high-performance websites and intelligent digital&nbsp;systems.
                            </p>
                            <p>
                                Founded by Akash & Syed, we work closely with brands and founders to design, build, and scale digital experiences that convert and&nbsp;perform.
                            </p>
                            <p>
                                We operate remotely, collaborating with clients across different markets and time&nbsp;zones.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
