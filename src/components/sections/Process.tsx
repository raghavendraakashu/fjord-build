"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "Understanding goals, constraints, and success&nbsp;metrics.",
    },
    {
        number: "02",
        title: "Design",
        description: "Wireframes, visual direction, and user&nbsp;experience.",
    },
    {
        number: "03",
        title: "Build",
        description: "Development, integrations, and&nbsp;automation.",
    },
    {
        number: "04",
        title: "Launch & Optimize",
        description: "Testing, deployment, and&nbsp;iteration.",
    },
];

export function Process() {
    return (
        <section id="process" className="py-24 md:py-32 bg-black">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Our Process</h2>
                    <div className="h-1 w-20 bg-white mx-auto md:mx-0" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-8 border border-neutral-900 bg-neutral-950/50 rounded-2xl hover:bg-neutral-900/50 hover:border-neutral-800 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="text-4xl font-bold text-neutral-800 mb-6 font-mono group-hover:text-neutral-700 transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
