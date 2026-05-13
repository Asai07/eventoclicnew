'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
// Importamos Image de Next.js
import Image from 'next/image';
import { ArrowLeft, Ticket, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function EducationSection() {
    // null = Menú principal | 'codes' = Vista de Códigos | 'control' = Vista de Control
    const [activeView, setActiveView] = useState<'menu' | 'codes' | 'control'>('menu');

    // Variantes de animación para transiciones suaves
    const viewVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.98,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    return (
        <section className="relative w-full py-24 bg-[#fdfaf8] overflow-hidden min-h-[700px] flex items-center">

            {/* === Blobs de fondo persistentes === */}
            <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#f07343]/10 to-[#cf655b]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-[#2d5a27]/5 to-[#8b5cf6]/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                <AnimatePresence mode="wait">

                    {/* ========================================= */}
                    {/* VISTA 1: MENÚ SELECTOR PRINCIPAL          */}
                    {/* ========================================= */}
                    {activeView === 'menu' && (
                        <motion.div
                            key="menu"
                            variants={viewVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col items-center"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-[#cf655b]/40"></span>
                                <span className="font-montserrat text-[#cf655b] font-semibold text-xs tracking-[0.2em] uppercase">
                                    Entiende la diferencia
                                </span>
                                <span className="w-8 h-[1px] bg-[#cf655b]/40"></span>
                            </div>

                            <h2 className="font-veryvogue font-normal text-4xl md:text-5xl lg:text-6xl text-zinc-900 leading-[1.1] mb-12 text-center max-w-3xl">
                                La tecnología detrás de un <span className="italic text-[#cf655b]">evento perfecto</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-4xl">

                                {/* Opción 1: Códigos */}
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveView('codes')}
                                    className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-zinc-200/50 cursor-pointer border border-transparent hover:border-[#cf655b]/20 transition-all duration-500"
                                >
                                    <div className="w-14 h-14 rounded-full bg-[#fdf0ea] flex items-center justify-center text-[#cf655b] mb-8 transition-transform duration-500 group-hover:rotate-12">
                                        <Ticket strokeWidth={1.5} size={28} />
                                    </div>
                                    <h3 className="font-veryvogue italic text-3xl text-zinc-800 mb-4">
                                        ¿Qué son los códigos de invitación?
                                    </h3>
                                    <p className="font-montserrat text-zinc-500 text-sm leading-relaxed mb-8">
                                        Descubre cómo asignamos pases y organizamos a tus invitados según el tipo de código que elijas.
                                    </p>
                                    <span className="font-montserrat font-bold text-xs tracking-widest uppercase text-[#cf655b] group-hover:text-[#b5584f] transition-colors">
                                        Explorar códigos &rarr;
                                    </span>
                                </motion.div>

                                {/* Opción 2: Control */}
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveView('control')}
                                    className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-zinc-200/50 cursor-pointer border border-transparent hover:border-[#2d5a27]/20 transition-all duration-500"
                                >
                                    <div className="w-14 h-14 rounded-full bg-[#2d5a27]/10 flex items-center justify-center text-[#2d5a27] mb-8 transition-transform duration-500 group-hover:scale-110">
                                        <ShieldCheck strokeWidth={1.5} size={28} />
                                    </div>
                                    <h3 className="font-veryvogue italic text-3xl text-zinc-800 mb-4">
                                        ¿Por qué importa el control?
                                    </h3>
                                    <p className="font-montserrat text-zinc-500 text-sm leading-relaxed mb-8">
                                        Organizar un evento sin un sistema es mucho más estresante de lo que parece. Mira la diferencia.
                                    </p>
                                    <span className="font-montserrat font-bold text-xs tracking-widest uppercase text-[#2d5a27] group-hover:text-[#1e3f1b] transition-colors">
                                        Ver comparativa &rarr;
                                    </span>
                                </motion.div>

                            </div>
                        </motion.div>
                    )}

                    {/* ========================================= */}
                    {/* VISTA 2: CÓDIGOS DE INVITACIÓN (EDITADA)  */}
                    {/* ========================================= */}
                    {activeView === 'codes' && (
                        <motion.div
                            key="codes"
                            variants={viewVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col w-full max-w-5xl mx-auto"
                        >
                            <button
                                onClick={() => setActiveView('menu')}
                                className="self-start flex items-center gap-2 mb-8 font-montserrat text-sm font-medium text-zinc-500 hover:text-[#cf655b] transition-colors cursor-pointer group"
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Volver a opciones
                            </button>

                            <div className="text-center mb-12">
                                <h2 className="font-veryvogue italic font-normal text-4xl md:text-5xl text-zinc-900 mb-4">
                                    ¿Qué son los códigos de invitación?
                                </h2>
                                <p className="font-montserrat text-zinc-500 text-lg">
                                    Aquí está la clave para entender cómo Evento Clic controla a tus invitados.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                {/* Código General - Gráfico */}
                                <div className="bg-white border border-[#cf655b]/10 rounded-[2.5rem] shadow-xl shadow-[#cf655b]/5 flex flex-col overflow-hidden group">
                                    <div className="p-8 md:p-10 pb-0 md:pb-0">
                                        <h3 className="font-veryvogue text-3xl text-zinc-800 mb-6 transition-colors group-hover:text-[#cf655b]">
                                            Código general
                                        </h3>
                                        <p className="font-montserrat text-zinc-600 text-sm leading-relaxed mb-8">
                                            Un código para un grupo de personas (familia y/o amigos). Le das el mismo código a varias personas y el sistema les asigna sus pases correspondientes.
                                        </p>
                                    </div>

                                    {/* Contenedor de la Imagen - Estilo Gráfico */}
                                    <div className="mt-auto px-8 md:px-10 pb-8 md:pb-10 w-full flex justify-center items-center">
                                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#cf655b]/10 shadow-inner bg-zinc-50 flex items-center justify-center p-4">
                                            <Image
                                                src="/codigos/codigo-general.png"
                                                alt="Gráfico explicativo del Código General"
                                                fill
                                                className="object-contain p-2" // contain para no cortar el gráfico
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Código Personalizado - Gráfico */}
                                <div className="bg-white border border-[#6b46c1]/10 rounded-[2.5rem] shadow-xl shadow-[#6b46c1]/5 flex flex-col overflow-hidden group">
                                    <div className="p-8 md:p-10 pb-0 md:pb-0">
                                        <h3 className="font-veryvogue text-3xl text-zinc-800 mb-6 transition-colors group-hover:text-[#6b46c1]">
                                            Código personalizado
                                        </h3>
                                        <p className="font-montserrat text-zinc-600 text-sm leading-relaxed mb-8">
                                            Cada invitado tiene su propio código único. El sistema sabe exactamente quién es, cuántos pases tiene, qué mesa le corresponde y qué menú eligió.
                                        </p>
                                    </div>

                                    {/* Contenedor de la Imagen - Estilo Gráfico */}
                                    <div className="mt-auto px-8 md:px-10 pb-8 md:pb-10 w-full flex justify-center items-center">
                                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#6b46c1]/10 shadow-inner bg-zinc-50 flex items-center justify-center p-4">
                                            <Image
                                                src="/codigos/codigo-unico.png"
                                                alt="Gráfico explicativo del Código unico por invitado"
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ========================================= */}
                    {/* VISTA 3: EL IMPACTO DEL CONTROL           */}
                    {/* ========================================= */}
                    {activeView === 'control' && (
                        <motion.div
                            key="control"
                            variants={viewVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col w-full max-w-6xl mx-auto"
                        >
                            <button
                                onClick={() => setActiveView('menu')}
                                className="self-start flex items-center gap-2 mb-8 font-montserrat text-sm font-medium text-zinc-500 hover:text-[#2d5a27] transition-colors cursor-pointer group"
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Volver a opciones
                            </button>

                            <div className="text-center mb-12">
                                <h2 className="font-veryvogue italic font-normal text-4xl md:text-5xl text-zinc-900 mb-4">
                                    ¿Por qué el control de invitados es tan importante?
                                </h2>
                                <p className="font-montserrat text-zinc-500 text-lg">
                                    Organizar un evento sin un sistema es mucho más estresante de lo que parece.
                                </p>
                            </div>

                            {/* Split Card Layout */}
                            <div className="flex flex-col md:flex-row w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-zinc-200/60 ring-1 ring-zinc-100">

                                {/* Lado Izquierdo: Sin Control */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-[#fffaf9] relative overflow-hidden flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100">
                                    {/* Icono de fondo marca de agua */}
                                    <ShieldAlert className="absolute -left-10 -bottom-10 w-64 h-64 text-[#cf655b] opacity-[0.03] pointer-events-none" />

                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-3 h-3 rounded-full bg-[#cf655b] animate-pulse" />
                                        <h3 className="font-veryvogue text-3xl text-[#cf655b]">Sin control</h3>
                                    </div>

                                    <p className="font-montserrat text-zinc-600 leading-relaxed text-base lg:text-lg relative z-10">
                                        No sabes cuántos van a ir. Alguien trae personas extra. Un colado entra sin que te des cuenta. Pagas 120 platillos y aparecen 150. <span className="font-bold text-[#cf655b]">Caos en la entrada y no puedes disfrutar tu evento.</span>
                                    </p>
                                </div>

                                {/* Lado Derecho: Con Evento Clic */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-[#f4fbf6] relative overflow-hidden flex flex-col justify-center">
                                    {/* Icono de fondo marca de agua */}
                                    <ShieldCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-[#2d5a27] opacity-[0.03] pointer-events-none" />

                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-3 h-3 rounded-full bg-[#2d5a27]" />
                                        <h3 className="font-veryvogue text-3xl text-[#2d5a27]">Con Evento Clic</h3>
                                    </div>

                                    <p className="font-montserrat text-zinc-600 leading-relaxed text-base lg:text-lg relative z-10">
                                        Sabes exactamente quién confirmó, cuántos pases tiene cada quien y quién entró el día del evento. <span className="font-bold text-[#2d5a27]">Tú y tu familia disfrutan — el sistema hace el trabajo.</span>
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

            </div>
        </section>
    );
}