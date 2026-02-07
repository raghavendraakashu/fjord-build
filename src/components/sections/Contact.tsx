"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        projectType: "Website / Landing Page",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            if (!response.ok) throw new Error("Failed to send");

            setStatus("success");
            setFormState({ name: "", email: "", projectType: "Website / Landing Page", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-neutral-950">
            <div className="container-custom max-w-screen-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Let's work together
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12 max-w-md">
                            Ready to transform your digital presence? Tell us about your project.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-white font-medium mb-1">Email</h3>
                                <a href="mailto:hello@fjord.agency" className="text-neutral-400 hover:text-white transition-colors">
                                    hello@fjord.agency
                                </a>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Office</h3>
                                <p className="text-neutral-400">
                                    123 Design District<br />
                                    New York, NY 10013
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message received</h3>
                                <p className="text-neutral-400 mb-8">
                                    Thanks — Akash & Syed will get back to you shortly.
                                </p>

                                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 mb-8 text-left">
                                    <h4 className="text-white font-medium mb-1">Want to move faster?</h4>
                                    <p className="text-sm text-neutral-500 mb-4">
                                        Book a quick intro call if you'd like to discuss your project immediately.
                                    </p>
                                    <a
                                        href="https://calendly.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors"
                                    >
                                        Book a 15-min intro call
                                    </a>
                                </div>

                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium text-neutral-400 mb-2">What are you looking to build?</label>
                                    <div className="relative">
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            required
                                            value={formState.projectType}
                                            onChange={handleChange}
                                            className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                                        >
                                            <option>Website / Landing Page</option>
                                            <option>Automation / AI System</option>
                                            <option>Ads & Growth</option>
                                            <option>Not sure yet</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message <span className="text-neutral-600">(Optional)</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full py-4 rounded-lg font-medium text-black bg-white hover:bg-neutral-200 transition-all duration-300 mb-3"
                                    >
                                        {status === "loading" ? "Processing..." : "Start my project"}
                                    </button>
                                    <p className="text-center text-xs text-neutral-500">
                                        We usually reply within 24 hours. No spam.
                                    </p>
                                </div>

                                {status === "error" && (
                                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
