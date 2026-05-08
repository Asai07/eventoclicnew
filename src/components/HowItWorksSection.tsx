'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, CodeXml, CheckCircle2, QrCode, DoorOpen } from 'lucide-react';

export default function HowItWorksSection() {
    const steps = [
        {
            num: "1",
            icon: Mail,
            title: "Recibe la invitación",
            desc: "Le llega por WhatsApp, email o enlace.",
        },
        {
            num: "2",
            icon: CodeXml,
            title: "Ingresa su código único",
            desc: "Accede a su invitación personalizada.",
        },
        {
            num: "3",
            icon: CheckCircle2,
            title: "Confirma su asistencia",
            desc: "Elige si asistirá y cuántos lo acompañan.",
        },
        {
            num: "4",
            icon: QrCode,
            title: "Recibe su ticket QR",
            desc: "Le llega su código QR único.",
        },
        {
            num: "5",
            icon: DoorOpen,
            title: "Accede al evento",
            desc: "Mostrará su QR en la entrada.",
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 70, damping: 15 }
        },
    };

    return (
        <section className="w-full relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                {/* --- ENCABEZADO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-[1px] bg-[#cf655b]/40"></span>
                        <span className="font-montserrat text-zinc-600 font-semibold text-sm tracking-wide">
                            Así funciona la experiencia para tus invitados
                        </span>
                        <span className="w-10 h-[1px] bg-[#cf655b]/40"></span>
                    </div>

                    <h2 className="font-veryvogue italic font-normal text-5xl md:text-6xl text-zinc-800 leading-[1.1] mb-6">
                        <span className="text-[#cf655b]">Cómo funciona</span> Evento Clic en 5 pasos
                    </h2>

                    <p className="font-montserrat text-zinc-500 text-lg md:text-xl">
                        No necesitas saber nada de tecnología. (ni tu, ni tus invitados) <span className="text-[#cf655b] font-medium">¡En serio!</span>
                    </p>
                </motion.div>

                {/* --- GRID DE 5 PASOS --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    // En desktop forzamos 5 columnas, en tablet 3 y en móvil 1 o 2.
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-full items-stretch"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                // Animación en hover para la tarjeta entera
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative bg-[#fdfaf8] rounded-[2rem] p-8 flex flex-col items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#cf655b]/10 cursor-default border border-transparent hover:border-[#cf655b]/5"
                            >
                                {/* Número Pequeño Superior */}
                                <div className="w-8 h-8 rounded-full bg-[#fdf0ea] text-[#cf655b] flex items-center justify-center font-montserrat font-semibold text-sm mb-8 transition-transform duration-300 group-hover:scale-110">
                                    {step.num}
                                </div>

                                {/* Ícono con Círculo Desfasado */}
                                <div className="relative mb-8">
                                    {/* Círculo durazno de fondo desfasado */}
                                    <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-[#fdf0ea] transition-transform duration-500 group-hover:scale-125 group-hover:bg-[#fce6dc]" />
                                    {/* Ícono principal */}
                                    <Icon className="relative z-10 text-zinc-800 w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.5} />
                                </div>

                                {/* Título */}
                                <h3 className="font-veryvogue italic text-2xl text-zinc-800 leading-tight mb-4 pr-2">
                                    {step.title}
                                </h3>

                                {/* Divisor Minimalista */}
                                <div className="w-6 h-[2px] bg-[#cf655b]/30 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-[#cf655b]" />

                                {/* Descripción */}
                                <p className="font-montserrat text-zinc-500 text-sm leading-relaxed relative z-10">
                                    {step.desc}
                                </p>

                                {/* Número Gigante de Marca de Agua (Watermark) */}
                                <div className="absolute -bottom-6 -right-2 font-veryvogue italic text-[10rem] leading-none text-[#cf655b] opacity-[0.04] select-none transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2 pointer-events-none z-0">
                                    {step.num}
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}