"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Web Development",
        description: "High-performance, scalable websites built with modern frameworks.",
    },
    {
        title: "Automation & Integrations",
        description: "Smart workflows that save time, reduce manual work, and scale operations.",
    },
    {
        title: "Data & Visualization",
        description: "Clear dashboards and visual systems that turn data into decisions.",
    },
    {
        title: "Performance & SEO",
        description: "Technical SEO, speed optimization, and structure built for growth.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-black border-t border-neutral-900">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Left Column - Heading */}
                    <div className="md:col-span-4 lg:col-span-3 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:sticky md:top-32"
                        >
                            <span className="text-sm font-medium tracking-widest text-neutral-500 uppercase mb-4 block">
                                Services
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 md:mb-0">
                                What we do
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Column - Service List */}
                    <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
                        <div className="space-y-16 md:space-y-24">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="group text-center md:text-left"
                                >
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 group-hover:text-neutral-300 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
