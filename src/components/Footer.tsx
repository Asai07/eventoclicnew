'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FiInstagram } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="relative bg-[#1c1715] text-white pt-24 pb-8 overflow-hidden">
            {/* Cambiamos a un tono oscuro cálido (Espresso) muy elegante */}
            {/* Ambient Glow (Brillo muy sutil de fondo) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cf655b] rounded-full blur-[180px] opacity-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                    {/* --- TOP ROW: Tagline & Links --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 lg:mb-32">

                        {/* Brand / Tagline */}
                        <div className="lg:col-span-7 flex flex-col">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="font-veryvogue italic text-4xl md:text-5xl lg:text-[4rem] text-white mb-6 leading-[1.1] max-w-xl"
                            >
                                El sistema que te dice exactamente <span className="text-[#cf655b]">quién vendrá.</span>
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="font-montserrat text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed"
                            >
                                Organiza, confirma y controla el acceso a tu evento con tecnología invisible y diseño impecable.
                            </motion.p>

                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                href="#panel"
                                className="mt-12 flex items-center gap-4 w-max group cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-[#cf655b] group-hover:border-[#cf655b] transition-all duration-500 ease-[0.22,1,0.36,1]">
                                    <ArrowUpRight size={22} className="text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                                </div>
                                <span className="font-montserrat font-semibold text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300">
                                    Acceder al panel
                                </span>
                            </motion.a>
                        </div>

                        {/* Minimal Links */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-16 lg:pl-12 pt-4">

                            {/* Column 1: Explorar */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-montserrat font-bold text-[10px] tracking-[0.2em] uppercase text-zinc-600 mb-2">
                                    Explorar
                                </h4>
                                {['Sistema', 'Cómo funciona', 'Paquetes', 'Preguntas'].map((item, i) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                                        key={item}
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="font-montserrat text-sm text-zinc-300 hover:text-white transition-colors w-max relative group py-1"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#cf655b] transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:w-full" />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Column 2: Contacto */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-montserrat font-bold text-[10px] tracking-[0.2em] uppercase text-zinc-600 mb-2">
                                    Contacto
                                </h4>
                                <motion.a
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    href="https://wa.me/521..." // Tu link de WhatsApp
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-montserrat text-sm text-zinc-300 hover:text-white transition-colors w-max flex items-center gap-3 group"
                                >
                                    {/* SVG Original de WhatsApp */}
                                    <svg viewBox="0 0 24 24" width="16" height="16" className="fill-zinc-500 group-hover:fill-[#25D366] transition-colors duration-300">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </motion.a>
                                <motion.a
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    href="#"
                                    className="font-montserrat text-sm text-zinc-300 hover:text-white transition-colors w-max flex items-center gap-3 group"
                                >
                                    <FiInstagram size={16} className="text-zinc-500 group-hover:text-[#cf655b] transition-colors duration-300" />
                                    <span>Instagram</span>
                                </motion.a>
                                <motion.a
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    href="mailto:contacto@eventoclic.com"
                                    className="font-montserrat text-sm text-zinc-300 hover:text-white transition-colors w-max flex items-center gap-3 group"
                                >
                                    <Mail size={16} className="text-zinc-500 group-hover:text-[#cf655b] transition-colors duration-300" />
                                    <span>Email</span>
                                </motion.a>
                            </div>

                        </div>
                    </div>

                    {/* --- MIDDLE: Giant Typography --- */}
                    <div className="w-full border-t border-white/5 pt-10 pb-4 flex items-center justify-center overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full text-center"
                        >
                            {/* Se quitó el margen negativo y se ajustó el leading para evitar cortes. Efecto Hover añadido. */}
                            <span className="font-veryvogue italic font-normal text-[14vw] leading-[1.1] tracking-tight text-white/[0.03] hover:text-[#cf655b]/25 transition-colors duration-700 select-none block cursor-default">
                                eventoclic
                            </span>
                        </motion.div>
                    </div>

                    {/* --- BOTTOM: Copyright & Legal --- */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-6 mt-2 relative z-10">
                        <p className="font-montserrat text-[11px] text-zinc-500 tracking-wide">
                            &copy; {new Date().getFullYear()} Evento Clic. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-8">
                            <a href="#" className="font-montserrat text-[10px] tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors">
                                Aviso de Privacidad
                            </a>
                            <a href="#" className="font-montserrat text-[10px] tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors">
                                Términos y Condiciones
                            </a>
                        </div>
                    </div>

                </div>
        </footer>
    );
}