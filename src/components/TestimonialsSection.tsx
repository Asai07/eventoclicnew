'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
    // 9 Reseñas en total
    const allReviews = [
        {
            name: "Mariana & Roberto",
            event: "Boda en Valle de Bravo",
            text: "No tuvimos que preocuparnos por nada. El sistema de QR fue la sensación entre los invitados y nos ahorró horas de revisión manual.",
            image: "/images/review-1.jpg"
        },
        {
            name: "Sofía Galván",
            event: "XV Años de Isabella",
            text: "La confirmación por WhatsApp fue mágica. Mis tíos que no saben de tecnología pudieron confirmar sin problemas.",
            image: "/images/review-2.jpg"
        },
        {
            name: "Carlos Méndez",
            event: "Graduación ITAM",
            text: "Controlar el acceso de 500 personas parecía imposible, pero con Eventoclic el flujo en la entrada fue impecable.",
            image: "/images/review-3.jpg"
        },
        {
            name: "Lucía Pérez",
            event: "Bautizo de Mateo",
            text: "Súper fácil de usar. Me encantó poder ver en tiempo real quién ya estaba en el salón desde mi celular.",
            image: "/images/review-4.jpg"
        },
        {
            name: "Familia Garza",
            event: "Aniversario de Bodas",
            text: "Increíble cómo una plataforma tan sencilla de usar te quita tanto estrés de encima. El acomodo de mesas fue súper visual.",
            image: "/images/review-5.jpg"
        },
        {
            name: "Daniela Ruiz",
            event: "Boda en Monterrey",
            text: "Mis invitados amaron recibir su boleto digital. Le dio un toque súper premium y exclusivo a toda nuestra boda.",
            image: "/images/review-6.jpg"
        },
        {
            name: "Andrés Velasco",
            event: "Evento Corporativo",
            text: "Necesitábamos algo riguroso para que no entraran colados. El escáner funcionó rapidísimo, incluso sin buen internet.",
            image: "/images/review-7.jpg"
        },
        {
            name: "Valeria y Jorge",
            event: "Boda en Riviera Maya",
            text: "Pudimos enviar recordatorios a los que no habían confirmado con un solo botón. Nos ahorró muchísimas llamadas incómodas.",
            image: "/images/review-8.jpg"
        },
        {
            name: "Fernanda López",
            event: "Baby Shower",
            text: "Aunque era un evento más pequeño, me ayudó a llevar el control exacto de los platillos. Todo salió a la perfección.",
            image: "/images/review-9.jpg"
        }
    ];

    // Estado para controlar la página actual (0, 1 o 2)
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(allReviews.length / 3);

    // Función para avanzar
    const nextSlide = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    // Función para retroceder
    const prevSlide = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    // Auto-play opcional (cambia cada 8 segundos)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    // Obtenemos las 3 reseñas de la página actual
    const currentReviews = allReviews.slice(currentPage * 3, (currentPage * 3) + 3);

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden">

            {/* === Blobs de fondo === */}
            <div className="absolute -left-[10%] top-[20%] w-[45%] min-w-[400px] aspect-square bg-[#f8d6d4] rounded-full blur-[130px] opacity-40 pointer-events-none" />
            <div className="absolute -right-[5%] bottom-[10%] w-[40%] min-w-[400px] aspect-square bg-[#f07343] rounded-full blur-[140px] opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">

                {/* --- ENCABEZADO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-[#cf655b]/40"></span>
                        <span className="font-montserrat text-zinc-500 font-medium text-sm tracking-widest uppercase">
                            Historias reales
                        </span>
                        <span className="w-12 h-[1px] bg-[#cf655b]/40"></span>
                    </div>

                    <h2 className="font-veryvogue italic font-normal text-5xl md:text-7xl text-zinc-800 leading-[1.1]">
                        +1,000 eventos organizados. <br />
                        <span className="text-[#cf655b]">Estas son sus historias.</span>
                    </h2>
                </motion.div>

                {/* --- CARRUSEL DE RESEÑAS --- */}
                <div className="w-full relative min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 absolute w-full"
                        >
                            {currentReviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="group relative flex flex-col justify-between bg-white/70 backdrop-blur-md border border-white/60 p-8 rounded-[2.5rem] shadow-xl shadow-zinc-200/40 cursor-default transition-all duration-500 hover:bg-white hover:shadow-[#cf655b]/15 min-h-[380px]"
                                >
                                    <div>
                                        <Quote className="text-[#cf655b] opacity-20 mb-6 group-hover:opacity-100 transition-opacity duration-500" size={40} />
                                        <p className="font-montserrat text-zinc-700 text-lg leading-relaxed mb-8">
                                            "{review.text}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 border-t border-zinc-100 pt-6 mt-auto">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-2 ring-[#f8d6d4] group-hover:ring-[#cf655b]">
                                            <Image
                                                src={review.image}
                                                alt={review.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-veryvogue italic text-xl text-zinc-800">
                                                {review.name}
                                            </h4>
                                            <p className="font-montserrat text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                                                {review.event}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- CONTROLES DEL CARRUSEL --- */}
                <div className="mt-12 flex items-center justify-center gap-8">
                    <button
                        onClick={prevSlide}
                        className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:text-[#cf655b] hover:border-[#cf655b] transition-all hover:scale-110 active:scale-95"
                    >
                        <ChevronLeft strokeWidth={1.5} />
                    </button>

                    {/* Indicadores de página (Puntos) */}
                    <div className="flex items-center gap-3">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentPage(idx)}
                                className={`cursor-pointer h-2 transition-all duration-500 rounded-full ${currentPage === idx
                                        ? "w-8 bg-[#cf655b]"
                                        : "w-2 bg-zinc-300 hover:bg-zinc-400"
                                    }`}
                                aria-label={`Ir a página ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:text-[#cf655b] hover:border-[#cf655b] transition-all hover:scale-110 active:scale-95"
                    >
                        <ChevronRight strokeWidth={1.5} />
                    </button>
                </div>

            </div>
        </section>
    );
}