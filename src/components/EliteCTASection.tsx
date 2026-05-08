'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export default function EliteCTASection() {
    return (
        <section className="relative w-full py-32 bg-[#fdfaf8] overflow-hidden flex items-center justify-center min-h-[600px]">

            {/* === BLOBS VIVOS (RESPIRANDO) === */}

            {/* Blob Esquina Superior Izquierda (Intenso Terracota/Naranja) */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[20%] -left-[10%] w-[50%] max-w-[600px] aspect-square bg-gradient-to-br from-[#cf655b] to-[#f07343] rounded-full blur-[120px] pointer-events-none z-0"
            />

            {/* Blob Esquina Inferior Derecha (Intenso Naranja/Durazno) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.85, 0.6],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2 // Desfasado para que no respiren al mismo ritmo
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[45%] max-w-[550px] aspect-square bg-gradient-to-tl from-[#faa671] to-[#cf655b] rounded-full blur-[110px] pointer-events-none z-0"
            />

            <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 relative z-10">

                {/* --- CONTENEDOR GLASSMORPHISM --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl shadow-[#cf655b]/10 flex flex-col items-center text-center overflow-hidden"
                >
                    {/* Brillo interior del panel */}
                    <div className="absolute inset-0 rounded-[3rem] ring-1 ring-white/60 pointer-events-none" />

                    {/* Etiqueta Superior */}
                    <div className="flex items-center gap-2 bg-[#fdf0ea] text-[#cf655b] font-montserrat font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8 shadow-sm">

                        <span>- Experiencia Completa -</span>

                    </div>

                    {/* Hook / Título (Very Vogue) */}
                    <h2 className="font-veryvogue italic text-5xl md:text-6xl lg:text-7xl text-zinc-900 leading-[1.1] mb-6 max-w-3xl drop-shadow-sm">
                        Tu evento no acepta moldes. <br />
                        <span className="text-[#cf655b]">Hazlo Elite.</span>
                    </h2>

                    {/* Subtítulo (Montserrat) */}
                    <p className="font-montserrat text-zinc-600 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                        Diseño exclusivo desde cero, códigos ilimitados, escaneo en puerta y control total. La tranquilidad de que la primera impresión de tu evento será impecable.
                    </p>

                    {/* CTA Principal */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer group flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-5 rounded-full font-montserrat font-semibold text-sm transition-all shadow-xl shadow-zinc-900/20"
                    >
                        Solicitar paquete Elite
                        <ArrowRight className="w-5 h-5 text-[#faa671] group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    {/* Nota extra */}
                    <p className="font-montserrat text-zinc-400 text-xs mt-6 tracking-wide">
                        Disponibilidad limitada. Consultoría de diseño incluida.
                    </p>

                </motion.div>

            </div>
        </section>
    );
}