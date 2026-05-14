'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

export default function ControlCenterSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
        <section className="w-full relative py-24 overflow-hidden bg-[#fdfaf8]">

            {/* === Blobs de fondo === */}
            <div className="absolute -left-[5%] top-[10%] w-[40%] min-w-[300px] aspect-square bg-[#d05c53] rounded-full blur-[120px] opacity-20 pointer-events-none" />
            <div className="absolute right-[5%] top-[50%] w-[35%] min-w-[300px] aspect-square bg-[#faa671] rounded-full blur-[130px] opacity-20 pointer-events-none" />
            <div className="absolute left-[15%] bottom-[5%] w-[40%] min-w-[300px] aspect-square bg-[#f07343] rounded-full blur-[140px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-[1px] bg-[#cf655b]/40"></span>
                        <span className="font-montserrat text-zinc-600 font-semibold text-sm tracking-wide">
                            Sistema Anticolados
                        </span>
                        <span className="w-10 h-[1px] bg-[#cf655b]/40"></span>
                    </div>

                    <h2 className="font-veryvogue italic font-normal text-5xl md:text-6xl text-zinc-800 leading-[1.1] mb-6 max-w-3xl">
                        El <span className="text-[#cf655b]">Centro de Control</span> que te dice exactamente qué está pasando.
                    </h2>

                    <p className="font-montserrat text-zinc-600 text-lg max-w-2xl">
                        Desde la confirmación hasta el escaneo en puerta, todo queda en un solo lugar: sin mil listas desorganizadas, sin caos y sin sorpresas el día del evento.                    </p>
                </motion.div>

                {/* --- BENTO GRID DE TARJETAS --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
                >
                    {/* Tarjeta 1 */}
                    <motion.div variants={cardVariants} className="group bg-white rounded-[2rem] p-6 lg:p-8 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-[#cf655b]/10 transition-all duration-300 flex flex-col cursor-pointer">
                        {/* Solución: Quitar aspect-ratio, usar w-full h-auto en Image */}
                        <div className="w-full rounded-2xl overflow-hidden mb-8 flex justify-center items-center">
                            <Image src="/centrocontrol/1.webp" alt="Confirmaciones" width={800} height={600} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="font-veryvogue italic text-3xl text-zinc-800 mb-3">Confirmaciones inteligentes</h3>
                        <p className="font-montserrat text-zinc-500 text-sm leading-relaxed">Tus invitados confirman en segundos y tú lo ves en tiempo real.</p>
                    </motion.div>

                    {/* Tarjeta 2 */}
                    <motion.div variants={cardVariants} className="group bg-white rounded-[2rem] p-6 lg:p-8 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-[#cf655b]/10 transition-all duration-300 flex flex-col cursor-pointer">
                        <div className="w-full rounded-2xl overflow-hidden mb-8 flex justify-center items-center">
                            <Image src="/centrocontrol/2.webp" alt="Lista centralizada" width={800} height={600} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="font-veryvogue italic text-3xl text-zinc-800 mb-3">Lista centralizada</h3>
                        <p className="font-montserrat text-zinc-500 text-sm leading-relaxed">Familias, acompañantes, mesas y gestor de envíos en un solo centro de control.</p>
                    </motion.div>

                    {/* Tarjeta 3 (Wide - Ocupa 2 columnas en Desktop) */}
                    <motion.div variants={cardVariants} className="group md:col-span-2 bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-[#cf655b]/10 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 lg:gap-12 cursor-pointer overflow-hidden">

                        {/* Columna Izquierda (Texto) */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="font-veryvogue italic text-4xl text-zinc-800 mb-4">Tickets QR únicos</h3>
                            <p className="font-montserrat text-zinc-500 text-base leading-relaxed mb-8">
                                El día de tu evento, cada invitado presenta su ticket con QR. Solo entran quienes tú invitaste.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "El invitado recibe su ticket digital con QR al confirmar.",
                                    "En la entrada, tu equipo escanea con el modo recepción.",
                                    "Check-in validado: nombre, mesa y pases al instante."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="font-montserrat text-zinc-600 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Columna Derecha (Imagen) */}
                        <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden">
                            {/* Solución: object-contain para asegurar que no se corte sin importar el alto de la columna de texto */}
                            <Image src="/centrocontrol/3.webp" alt="Escáner QR" width={800} height={800} className="w-full h-auto max-h-[400px] object-contain transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </motion.div>

                    {/* Tarjeta 4 */}
                    <motion.div variants={cardVariants} className="group bg-white rounded-[2rem] p-6 lg:p-8 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-[#cf655b]/10 transition-all duration-300 flex flex-col cursor-pointer">
                        <div className="w-full rounded-2xl overflow-hidden mb-8 flex justify-center items-center">
                            <Image src="/centrocontrol/4.webp" alt="Recordatorios" width={800} height={500} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="font-veryvogue italic text-3xl text-zinc-800 mb-3">Envío y recordatorios de invitaciones</h3>
                        <p className="font-montserrat text-zinc-500 text-sm leading-relaxed">Envía tus invitaciones y da seguimiento a quienes aún no han respondido, todo desde tu Centro de Control.</p>
                    </motion.div>

                    {/* Tarjeta 5 */}
                    <motion.div variants={cardVariants} className="group bg-white rounded-[2rem] p-6 lg:p-8 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-[#cf655b]/10 transition-all duration-300 flex flex-col cursor-pointer">
                        <div className="w-full rounded-2xl overflow-hidden mb-8 flex justify-center items-center">
                            <Image src="/centrocontrol/5.webp" alt="Logística" width={800} height={500} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="font-veryvogue italic text-3xl text-zinc-800 mb-3">Logística bajo control</h3>
                        <p className="font-montserrat text-zinc-500 text-sm leading-relaxed">Menús, alergias, mesas y detalles clave en un solo lugar.</p>
                    </motion.div>

                </motion.div>

                {/* --- BOTONES INFERIORES --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center items-center gap-4"
                >
                    <button className="cursor-pointer flex items-center gap-2 bg-[#cf655b] hover:bg-[#b5584f] text-white px-8 py-4 rounded-full font-montserrat font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#cf655b]/30">
                        Organizar a mis invitados
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    <button className="cursor-pointer bg-[#f3efe9] hover:bg-[#e8e2da] text-zinc-800 px-8 py-4 rounded-full font-montserrat font-semibold text-sm transition-all hover:scale-105 active:scale-95">
                        Ver cómo funciona
                    </button>
                </motion.div>

            </div>
        </section>
    );
}