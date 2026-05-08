'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
    return (
        <section className="relative w-full py-24 bg-white overflow-hidden" id="cta-final">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                {/* --- CONTENEDOR PRINCIPAL VIBRANTE --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full bg-[#cf655b] rounded-[3.5rem] md:rounded-[4.5rem] overflow-hidden px-8 py-20 md:py-28 text-center shadow-[0_40px_80px_-20px_rgba(207,101,91,0.4)]"
                >

                    {/* === BLOBS INTERNOS "VIVOS" === */}
                    {/* Mancha Naranja Intensa (Superior Izquierda) */}
                    <motion.div
                        animate={{
                            x: [0, 30, 0],
                            y: [0, -20, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-[#faa671] rounded-full mix-blend-overlay filter blur-[80px] opacity-70 pointer-events-none"
                    />

                    {/* Mancha Blanca Brillante (Inferior Derecha) */}
                    <motion.div
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 30, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[70%] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-30 pointer-events-none"
                    />

                    {/* --- CONTENIDO --- */}
                    <div className="relative z-10 flex flex-col items-center">

                        {/* Sello de Cera / Emblema Animado */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="mb-10 relative group"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                                <span className="font-veryvogue italic text-4xl md:text-5xl text-white select-none">e</span>
                                {/* Texto circular decorativo (SVG) */}
                                <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100">
                                    <defs>
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text className="font-montserrat text-[7px] uppercase tracking-[0.2em] fill-white/60">
                                        <textPath xlinkHref="#circlePath">
                                            &nbsp;• Eventoclic • Experiencia Elite • Sin Estrés •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </motion.div>

                        {/* Título Principal */}
                        <h2 className="font-veryvogue font-normal text-5xl md:text-7xl lg:text-8xl text-white leading-[1.02] tracking-tight mb-8 text-balance max-w-4xl drop-shadow-lg">
                            ¿Listo para organizar tu evento <span className="italic font-medium text-[#fdf0ea]">sin estrés?</span>
                        </h2>

                        {/* Subtítulo */}
                        <p className="font-montserrat text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14 px-4">
                            Cuéntanos sobre tu evento y te ayudamos a elegir el plan ideal en menos de 5 minutos.
                        </p>

                        {/* Botones de Acción */}
                        <div className="flex flex-wrap gap-5 justify-center w-full px-4">
                            <motion.a
                                href="https://wa.me/521..." // Tu link de WhatsApp
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-3 bg-white text-[#cf655b] px-10 py-5 rounded-full font-montserrat font-bold text-sm md:text-base transition-all shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] cursor-pointer"
                            >
                                {/* SVG Original de WhatsApp */}
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Organizar mis invitados
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 border-2 border-white/40 hover:border-white/80 text-white px-10 py-5 rounded-full font-montserrat font-bold text-sm md:text-base transition-all backdrop-blur-sm cursor-pointer"
                            >
                                Ver los paquetes
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>

                        {/* Etiquetas de Garantía (Trust Badges) */}
                        <div className="mt-16 pt-10 border-t border-white/20 flex flex-wrap gap-4 md:gap-8 justify-center">
                            {['Sin contratos forzosos', 'Soporte VIP WhatsApp', 'Cambios sin costo'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/80 font-montserrat font-bold text-[10px] md:text-[11px] tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <Sparkles size={12} className="text-[#fdf0ea]" />
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}