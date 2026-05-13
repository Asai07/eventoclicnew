'use client';

import { motion, Variants } from 'framer-motion';
import { Utensils, TrendingUp, LayoutGrid, UserX, ArrowRight } from 'lucide-react';

export default function DilemmaSection() {
    // Variantes para animaciones en cascada
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
    };

    const stats = [
        {
            icon: Utensils,
            title: "No sabes cuántos platillos ordenar",
            stat: "~30%",
            sub: "Les faltan o sobran",
        },
        {
            icon: TrendingUp,
            title: "Invitados extra el día del evento",
            stat: "1 de 3",
            sub: "eventos tiene este problema",
        },
        {
            icon: LayoutGrid,
            title: "Mesas y logística que cambian a última hora",
            stat: "48 h",
            sub: "antes del evento, todo se vuelve un caos",
        },
        {
            icon: UserX,
            title: "Invitados que olvidan confirmar",
            stat: "~40%",
            sub: "no confirman formalmente",
        },
    ];

    return (
        <section className="w-full relative py-24 overflow-hidden bg-white">

            {/* === Blobs de fondo === */}
            <div className="absolute -left-[10%] top-[10%] w-[40%] min-w-[300px] aspect-square bg-[#d05c53] rounded-full blur-[120px] opacity-[0.15] pointer-events-none" />
            <div className="absolute right-[5%] top-[40%] w-[35%] min-w-[250px] aspect-square bg-[#faa671] rounded-full blur-[110px] opacity-[0.15] pointer-events-none" />
            <div className="absolute left-[20%] bottom-[5%] w-[40%] min-w-[300px] aspect-square bg-[#f07343] rounded-full blur-[120px] opacity-[0.12] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                {/* --- 1. ENCABEZADO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-[#cf655b]/40"></span>
                        <span className="font-montserrat text-zinc-500 font-medium text-sm tracking-wide">
                            El gran dilema cuándo organizas un evento importante
                        </span>
                    </div>

                    <h2 className="font-veryvogue italic font-normal text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-zinc-800 max-w-4xl">
                        Invitar es fácil. Saber <span className="text-[#cf655b]">quién realmente vendrá... no tanto.</span>
                    </h2>
                </motion.div>

                {/* --- 2. CONTENIDO CENTRAL --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20"
                >
                    <p className="font-montserrat text-zinc-600 text-lg md:text-xl max-w-2xl text-center mb-12">
                        Cuando las confirmaciones llegan tarde — o no llegan — todo tu evento se vuelve incierto.
                    </p>

                    {/* ¡CORRECCIÓN CLAVE AQUÍ! Redefinimos el Grid para pantallas LG */}
                    {/* Cambiamos 'lg:grid-cols-2' por 'lg:grid-cols-[2fr_3fr]'.
                        Esto divide el espacio en 5 partes: el video toma 2/5 (40%) y las tarjetas toman 3/5 (60%). */}
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 w-full items-stretch">

                        {/* --- CONTENEDOR DEL VIDEO ACTUALIZADO (Columna Estrecha) --- */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full rounded-[2.5rem] overflow-hidden group shadow-xl shadow-zinc-900/10 cursor-pointer aspect-[9/16]"
                        >
                            <video
                                src="/videos/presentacion-eventoclic.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                            />
                        </motion.div>

                        {/* Grid de 4 Tarjetas de Datos (Columna Ancha) */}
                        {/* Esta columna ahora ocupa el 60% del ancho en LG,
                            lo que estira las tarjetas hacia abajo para armonizar con el video alto. */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full"
                        >
                            {stats.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-[#f7ece5] rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-[#cf655b]/10 h-full cursor-default"
                                    >
                                        <div>
                                            <div className="w-12 h-12 rounded-full border border-[#cf655b]/30 flex items-center justify-center mb-6">
                                                <Icon className="text-[#cf655b] w-6 h-6" strokeWidth={1.5} />
                                            </div>
                                            <h4 className="font-veryvogue italic font-normal text-xl leading-snug text-zinc-800 mb-6 pr-4">
                                                {item.title}
                                            </h4>
                                        </div>

                                        <div>
                                            <span className="block font-veryvogue italic text-4xl text-[#cf655b] mb-1">
                                                {item.stat}
                                            </span>
                                            <span className="block font-montserrat text-xs font-medium text-zinc-400 uppercase tracking-wider">
                                                {item.sub}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                    </div>
                </motion.div>

                {/* --- 3. CTA BOTTOM BANNER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative w-full rounded-[3rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-zinc-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-[#fcf0ea] to-white opacity-80 pointer-events-none" />
                    <div className="absolute top-0 right-[20%] w-[300px] h-[300px] bg-[#cf655b]/10 rounded-full blur-[80px] pointer-events-none" />

                    <h3 className="relative z-10 font-veryvogue italic font-normal text-4xl md:text-5xl text-zinc-800 leading-tight max-w-xl text-center md:text-left">
                        ¿Cuántas personas asistirán realmente a tu evento?
                    </h3>

                    <button className="relative z-10 flex-shrink-0 flex items-center gap-3 bg-[#cf655b] hover:bg-[#b5584f] text-white px-8 py-5 rounded-full font-montserrat font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#cf655b]/30 cursor-pointer">
                        Organizar a mis invitados
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}