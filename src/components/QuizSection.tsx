'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import {
    ArrowRight, ArrowLeft, Check, X,
    CheckCircle2, LayoutGrid, FileText, Star
} from 'lucide-react';

export default function QuizSection() {
    const quizData = [
        {
            id: 'esencial',
            icon: CheckCircle2,
            question: "Necesito invitar rápido y económico",
            desc: "No me complico — quiero algo bonito que pueda compartir ya.",
            result: {
                name: "Esencial Express",
                tag: "",
                price: "$699 MXN",
                oldPrice: "$999 MXN",
                intro: "Ideal si necesitas invitar rápido y sin complicaciones",
                gallery: Array.from({ length: 8 }, (_, i) => `/escencial/${i + 1}.png`),
                includes: [
                    "Invitación digital de catálogo personalizada",
                    "Entrega en 48 horas hábiles",
                    "Hasta 3 fotografías",
                    "Confirmación de asistencia por WhatsApp con códigos por grupos (hasta 5 códigos)",
                    "Contador regresivo",
                    "3 secciones a elegir (sugerencia de regalos, código de vestimenta, mención a padres, mención a padrinos, selección de música, 1 sección de avisos)",
                    "Visible 3 meses antes del evento"
                ],
                excludes: [
                    "Centro de Control",
                    "Tickets QR",
                    "Control de acceso el día del evento"
                ]
            }
        },
        {
            id: 'control',
            icon: LayoutGrid,
            question: "Ya tengo invitación, quiero cero colados",
            desc: "Mi problema es el acceso — quiero saber exactamente quién entra.",
            result: {
                name: "Control QR",
                tag: "",
                price: "$899 MXN",
                intro: "Ideal si ya tienes invitación y quieres cero colados",
                gallery: Array.from({ length: 4 }, (_, i) => `/controlqr/${i + 1}.png`),
                includes: [
                    "Formulario digital para confirmar asistencia",
                    "Códigos únicos ilimitados por familia o invitado",
                    "Pases estrictamente limitados por código",
                    "Boletos digitales con QR automáticos al confirmar",
                    "Centro de Control completo (estadísticas, avisos, gestión)",
                    "Envío de invitaciones desde el Centro de Control",
                    "Recordatorios a quienes no han confirmado",
                    "Comunicación directa con asistentes confirmados",
                    "Escaneo QR el día del evento para controlar acceso",
                    "Exportación avanzada: invitados, mesas, menús",
                    "Entrega en 48 horas hábiles",
                    "Visible 3 meses antes del evento"
                ],
                excludes: [
                    "Invitación digital (se vende por separado)"
                ]
            }
        },
        {
            id: 'premium',
            icon: FileText,
            question: "Quiero invitación + saber quién confirmó",
            desc: "No quiero estar rastreando respuestas por WhatsApp una por una.",
            result: {
                name: "Premium",
                tag: "★ MÁS ELEGIDO",
                price: "$1,499 MXN",
                intro: "Ideal si quieres invitación bonita + confirmaciones sin caos",
                gallery: Array.from({ length: 10 }, (_, i) => `/premium/${i + 1}.png`),
                includes: [
                    "Invitación digital de catálogo personalizada con tus colores y fotos",
                    "Hasta 9 fotografías",
                    "Contador regresivo",
                    "6 secciones a elegir (regalos, código de vestimenta, padres, padrinos, música, avisos, hospedaje, transporte y/o maquillaje)",
                    "Entrega en 72 horas hábiles",
                    "Confirmación de asistencia desde la invitación",
                    "Hasta 10 códigos generales según asignación de pases",
                    "Centro de Control para ver quién confirmó y quién no",
                    "Lista de invitados exportable a Excel",
                    "Modo recepción básico el día del evento (check manual)",
                    "Visible 6 meses antes del evento"
                ],
                excludes: [
                    "Tickets QR",
                    "Recordatorios automáticos",
                    "Códigos personalizados por invitado"
                ]
            }
        },
        {
            id: 'elite',
            icon: Star,
            question: "Quiero control total y algo único",
            desc: "Mi evento es importante — quiero la experiencia completa, sin estrés.",
            result: {
                name: "Elite",
                tag: "★ EXPERIENCIA COMPLETA",
                price: "$2,999 MXN",
                intro: "Ideal si quieres control total + invitación diseñada solo para ti",
                gallery: Array.from({ length: 11 }, (_, i) => `/elite/${i + 1}.png`),
                includes: [
                    "Invitación digital diseñada exclusivamente para tu evento",
                    "Hasta 12 fotografías",
                    "Contador regresivo",
                    "Secciones a elegir (regalos, vestimenta extendido, padres, padrinos, música, avisos, hospedaje, transporte y/o maquillaje)",
                    "Entrega en 8 días hábiles",
                    "Códigos únicos ilimitados por familia o invitado",
                    "Pases estrictamente limitados por código",
                    "Boletos digitales con QR automáticos al confirmar",
                    "Centro de Control completo (estadísticas, avisos, gestión)",
                    "Envío de invitaciones desde el Centro de Control",
                    "Recordatorios automáticos a invitados que no han confirmado",
                    "Escaneo QR el día del evento + control de acceso en puerta",
                    "Estadísticas del evento en tiempo real",
                    "Exportación avanzada: invitados, mesas y menús",
                    "Visible 8 meses antes del evento"
                ],
                excludes: []
            }
        }
    ];

    // Estados
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    // --- EFECTO AUTOPLAY DE LA GALERÍA ---
    useEffect(() => {
        if (selectedOption === null) return;
        const galleryLength = quizData[selectedOption].result.gallery.length;

        const timer = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % galleryLength);
        }, 5000);

        return () => clearInterval(timer);
    }, [selectedOption, quizData]);

    // Animaciones
    const fadeVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const handleSelectPackage = (index: number) => {
        setSelectedOption(index);
        setActiveImageIndex(0);
    };

    return (
        <section className="relative w-full py-24 bg-[#fdfaf8] overflow-hidden min-h-[800px] flex items-center">

            {/* === Blobs de fondo === */}
            <div className="absolute -left-[10%] top-[10%] w-[40%] min-w-[300px] aspect-square bg-[#d05c53] rounded-full blur-[130px] opacity-[0.15] pointer-events-none" />
            <div className="absolute right-[5%] top-[50%] w-[35%] min-w-[300px] aspect-square bg-[#faa671] rounded-full blur-[120px] opacity-[0.20] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                <AnimatePresence mode="wait">
                    {selectedOption === null && (
                        <motion.div
                            key="quiz-grid"
                            variants={fadeVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col items-center"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-[#cf655b]/40"></span>
                                <span className="font-montserrat text-[#cf655b] font-semibold text-xs tracking-[0.2em] uppercase">
                                    Descubre tu plan ideal
                                </span>
                                <span className="w-8 h-[1px] bg-[#cf655b]/40"></span>
                            </div>

                            <h2 className="font-veryvogue font-normal text-4xl md:text-5xl lg:text-6xl text-zinc-900 leading-[1.1] mb-16 text-center">
                                ¿Qué es lo más <span className="italic text-[#cf655b]">importante</span> para ti?
                            </h2>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl"
                            >
                                {quizData.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            variants={fadeVariants}
                                            onClick={() => handleSelectPackage(index)}
                                            className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-zinc-200/40 hover:shadow-2xl hover:shadow-[#cf655b]/15 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#cf655b]/10 flex flex-col h-full"
                                        >
                                            <div className="w-12 h-12 rounded-full border border-[#cf655b]/20 flex items-center justify-center mb-6 text-[#cf655b] group-hover:bg-[#fdf0ea] transition-colors duration-300">
                                                <Icon strokeWidth={1.5} size={24} />
                                            </div>

                                            <h3 className="font-veryvogue text-2xl lg:text-3xl text-zinc-800 mb-3 leading-tight pr-4">
                                                {item.question}
                                            </h3>

                                            <p className="font-montserrat text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                                                {item.desc}
                                            </p>

                                            <div className="flex items-center gap-2 mt-auto">
                                                <span className="font-montserrat font-bold text-xs tracking-widest uppercase text-[#cf655b]">
                                                    Ver recomendación
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-[#cf655b] transition-transform duration-300 group-hover:translate-x-2" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}

                    {selectedOption !== null && (
                        <motion.div
                            key="quiz-result"
                            variants={fadeVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedOption(null)}
                                className="self-start flex items-center gap-2 mb-8 font-montserrat text-sm font-medium text-zinc-500 hover:text-[#cf655b] transition-colors cursor-pointer group"
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Volver a las opciones
                            </button>

                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-xl shadow-zinc-200/50">

                                {/* --- LADO IZQUIERDO: GALERÍA DE IMÁGENES --- */}
                                <div className="w-full flex flex-col gap-4">
                                    <div className="relative w-full aspect-[4/5] lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-inner">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeImageIndex}
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={quizData[selectedOption].result.gallery[activeImageIndex]}
                                                    alt={`${quizData[selectedOption].result.name} - Vista ${activeImageIndex + 1}`}
                                                    fill
                                                    className="object-cover object-center"
                                                    priority
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Carrusel Horizontal de Miniaturas */}
                                    {/* CAMBIO AQUÍ: Se reemplazó "scrollbar-hide" por "custom-scrollbar-x" */}
                                    <div className="flex gap-3 overflow-x-auto py-4 px-2 custom-scrollbar-x pb-4">
                                        {quizData[selectedOption].result.gallery.map((imgSrc, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveImageIndex(idx)}
                                                className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 border-2 cursor-pointer
                                                    ${activeImageIndex === idx
                                                        ? 'border-[#cf655b] shadow-[0_8px_15px_-3px_rgba(207,101,91,0.4)] scale-110 opacity-100'
                                                        : 'border-transparent opacity-50 hover:opacity-100'
                                                    }`}
                                            >
                                                <Image
                                                    src={imgSrc}
                                                    alt={`Miniatura ${idx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* --- LADO DERECHO: DETALLES DEL PAQUETE --- */}
                                {/* CAMBIO AQUÍ: Sigue conservando su clase custom-scrollbar para el scroll vertical */}
                                <div
                                    data-lenis-prevent="true"
                                    className="flex flex-col h-full py-4 lg:py-6 pr-2 lg:pr-6 max-h-[80vh] overflow-y-auto custom-scrollbar"
                                >
                                    {quizData[selectedOption].result.tag && (
                                        <span className="self-start inline-block px-4 py-1.5 rounded-full bg-[#fdf0ea] text-[#cf655b] font-montserrat font-bold text-[10px] tracking-widest uppercase mb-4">
                                            {quizData[selectedOption].result.tag}
                                        </span>
                                    )}

                                    <h3 className="font-veryvogue italic text-4xl lg:text-5xl text-zinc-900 mb-2">
                                        {quizData[selectedOption].result.name}
                                    </h3>
                                    <p className="font-montserrat text-zinc-500 text-sm mb-6">
                                        {quizData[selectedOption].result.intro}
                                    </p>

                                    <div className="flex items-end gap-3 mb-8 border-b border-zinc-100 pb-8">
                                        <span className="font-veryvogue text-4xl text-[#cf655b]">
                                            {quizData[selectedOption].result.price}
                                        </span>
                                        {quizData[selectedOption].result.oldPrice && (
                                            <span className="font-montserrat text-sm text-zinc-400 line-through mb-1">
                                                Regular: {quizData[selectedOption].result.oldPrice}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-zinc-800 mb-4">
                                            Incluye:
                                        </h4>
                                        <ul className="space-y-3">
                                            {quizData[selectedOption].result.includes.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-[#2d5a27] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                                    <span className="font-montserrat text-sm text-zinc-600 leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {quizData[selectedOption].result.excludes.length > 0 && (
                                        <div className="mb-10">
                                            <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-zinc-400 mb-4">
                                                No incluye:
                                            </h4>
                                            <ul className="space-y-3">
                                                {quizData[selectedOption].result.excludes.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <X className="w-5 h-5 text-zinc-300 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                                        <span className="font-montserrat text-sm text-zinc-400 leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <button className="mt-auto self-start bg-[#cf655b] hover:bg-[#b5584f] text-white px-8 py-4 rounded-full font-montserrat font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#cf655b]/30 cursor-pointer">
                                        Seleccionar este paquete
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}