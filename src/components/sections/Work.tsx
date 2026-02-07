"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "FinTech Dashboard",
        category: "Data & Visualization",
        description: "Real-time analytics platform for a leading financial institution.",
        year: "2024",
    },
    {
        title: "E-Commerce Replatform",
        category: "Web Development",
        description: "Headless Shopify solution increasing conversion by 45%.",
        year: "2023",
    },
    {
        title: "Logistics Automation",
        category: "Automation",
        description: "Automated dispatch system reducing manual entry by 90%.",
        year: "2023",
    },
];

export function Work() {
    return (
        <section id="work" className="py-24 md:py-32 bg-neutral-950">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-6 text-center md:text-left"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Selected Work</h2>
                        <div className="h-1 w-20 bg-white mx-auto md:mx-0" />
                    </div>
                    <Link href="#" className="text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-all duration-300">
                        View all projects
                    </Link>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group border-t border-neutral-900 pt-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start text-center md:text-left">
                                <div className="md:col-span-2 text-neutral-500 font-mono text-sm">
                                    {project.year}
                                </div>
                                <div className="md:col-span-6">
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-neutral-900 text-neutral-300 text-xs rounded-full mb-4">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="md:col-span-4 flex items-end justify-center md:justify-end h-full">
                                    <p className="text-neutral-400 leading-relaxed max-w-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
