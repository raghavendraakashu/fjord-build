"use client";

import { motion } from "framer-motion";

const reasons = [
    {
        title: "Performance",
        description: "We build systems that load instantly and rank higher.",
    },
    {
        title: "Clarity",
        description: "No jargon. Just clear strategy and execution.",
    },
    {
        title: "Execution",
        description: "We ship on time, every time. No excuses.",
    },
];

export function WhyFjord() {
    return (
        <section className="py-24 bg-neutral-950 border-t border-white/5">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20 text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">Why Fjord</h2>
                    <div className="h-0.5 w-12 bg-white/20 mx-auto md:mx-0" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-bold text-white mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 pt-8 border-t border-white/5 flex justify-end"
                >
                    <p className="text-neutral-500 font-mono text-xs tracking-wider uppercase">
                        Built by Akash & Syed
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
