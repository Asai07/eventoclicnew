'use client';

import { motion, Variants } from 'framer-motion';
import { CalendarClock, Ticket, QrCode, ShieldCheck } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: CalendarClock,
            title: "Confirmaciones en tiempo real",
        },
        {
            icon: Ticket,
            title: "Códigos únicos por familia",
        },
        {
            icon: QrCode,
            title: "Tickets QR personalizados",
        },
        {
            icon: ShieldCheck,
            title: "Control de acceso sin complicaciones",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        },
    };

    return (
        <section className="relative w-full bg-white py-16 overflow-hidden">



            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col">

                {/* Contenedor principal de la tarjeta */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full rounded-[2.5rem] bg-[#fcf5f2] p-6 md:p-8 lg:p-10 shadow-lg shadow-[#fee9dc]/40 overflow-hidden"
                >
                    {/* === Blobs Internos de la Tarjeta === */}
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[30%] min-w-[250px] max-w-[350px] aspect-square bg-[#d05c53] rounded-full blur-[80px] opacity-40 pointer-events-none" />
                    <div className="absolute right-[10%] -bottom-16 w-[25%] min-w-[200px] max-w-[300px] aspect-square bg-[#faa671] rounded-full blur-[70px] opacity-40 pointer-events-none" />
                    <div className="absolute -right-12 -top-12 w-[30%] min-w-[250px] max-w-[350px] aspect-square bg-[#f07343] rounded-full blur-[80px] opacity-40 pointer-events-none" />

                    {/* Brillo interior (Inner Glow) */}
                    <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/60 pointer-events-none z-20" />

                    {/* Grid de las tarjetas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group flex flex-col bg-white/90 backdrop-blur-md rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-[#d05c53]/15 transition-all duration-300"
                                >
                                    <motion.div
                                        className="text-[#d05c53] mb-3"
                                        whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Icon size={46} strokeWidth={1.2} />
                                    </motion.div>

                                    <h3 className="font-veryvogue italic text-[1.4rem] leading-tight text-zinc-800 pr-2 mt-1">
                                        {feature.title}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Texto inferior */}
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center font-montserrat text-zinc-500 text-sm md:text-base font-medium tracking-wide mt-10"
                >
                    Hemos sido parte de más de 1,000 Bodas · XV años · Bautizos · Graduaciones en todo México
                </motion.p>

            </div>
        </section>
    );
}