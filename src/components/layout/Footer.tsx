import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 py-12 md:py-16">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-6 block">
                            FJORD
                        </Link>
                        <p className="text-neutral-500 max-w-sm">
                            We build high-performance websites and intelligent automation systems that help businesses grow.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">Sitemap</h3>
                        <ul className="space-y-3">
                            <li><Link href="#services" className="text-neutral-500 hover:text-white transition-colors duration-300">Services</Link></li>
                            <li><Link href="#work" className="text-neutral-500 hover:text-white transition-colors duration-300">Work</Link></li>
                            <li><Link href="#process" className="text-neutral-500 hover:text-white transition-colors duration-300">Process</Link></li>
                            <li><Link href="#contact" className="text-neutral-500 hover:text-white transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">Socials</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">Twitter / X</a></li>
                            <li><a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">LinkedIn</a></li>
                            <li><a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-neutral-600">
                    <p>&copy; {currentYear} Fjord. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
