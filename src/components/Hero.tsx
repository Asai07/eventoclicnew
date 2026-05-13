'use client';

import { useState, useEffect, MouseEvent, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check, Users, ClipboardList, User, Utensils, Ticket } from 'lucide-react';

// --- DATOS DEL CARRUSEL ---
const SLIDES = [
    {
        id: 1,
        bg: '/hero/2.png',
        fg: '/hero/3.png', // Pareja
        stats: { total: 260, mesa: 120, sinMesa: 100, adultos: 220, ninos: 40, trad: 170, veg: 50, inf: 40 },
        guest: { name: 'Espinoza Rocha', confBy: 'Valeria', pax: 3, time: '17:44' }
    },
    {
        id: 2,
        bg: '/hero/5.png',
        fg: '/hero/6.png', // Quinceañera
        stats: { total: 180, mesa: 180, sinMesa: 0, adultos: 160, ninos: 20, trad: 160, veg: 0, inf: 20 },
        guest: { name: 'Hinojosa Paz', confBy: 'Erick', pax: 5, time: '10:21' }
    },
    {
        id: 3,
        bg: '/hero/8.png',
        fg: '/hero/9.png', // Bebé
        stats: { total: 120, mesa: 105, sinMesa: 15, adultos: 90, ninos: 40, trad: 90, veg: 0, inf: 40 },
        guest: { name: 'Serrano Alonso', confBy: 'Norma', pax: 3, time: '20:50' }
    }
];

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-play del carrusel
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[activeSlide];

    // --- FÍSICAS 3D (PARALLAX) ---
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

    // Inclinación 3D
    const rotateX = useTransform(mouseYSpring, [0, 1], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [0, 1], ["-8deg", "8deg"]);

    // Movimiento lateral (parallax)
    const translateXFg = useTransform(mouseXSpring, [0, 1], ["15px", "-15px"]);
    const translateYFg = useTransform(mouseYSpring, [0, 1], ["10px", "-10px"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width;
        const mouseY = (e.clientY - rect.top) / rect.height;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <section className="pt-12 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">

            {/* === BLOBS DE FONDO DEL HERO === */}
            <div className="absolute -top-[15%] -left-[10%] w-[50%] max-w-[500px] aspect-square bg-[#cf655b]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-[20%] -right-[10%] w-[45%] max-w-[450px] aspect-square bg-[#faa671]/20 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute -bottom-[10%] left-[20%] w-[40%] max-w-[400px] aspect-square bg-[#f07343]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* --- COLUMNA IZQUIERDA: Copy Editorial --- */}
            <div className="flex flex-col gap-6 max-w-xl z-20 relative pl-4 lg:pl-0">
                <h1 className="text-5xl lg:text-7xl leading-[1.05] text-zinc-900 font-veryvogue italic font-normal drop-shadow-sm">
                    El sistema que organiza a tus invitados y{' '}
                    <span className="text-[#cf655b]">controla</span> quién entra a tu evento
                </h1>

                <p className="font-montserrat text-lg text-zinc-600 leading-relaxed max-w-md">
                    Confirmaciones inteligentes, códigos únicos y acceso con QR. Todo en un solo panel. Sin caos el día del evento.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                    <button className="flex items-center gap-2 bg-[#cf655b] hover:bg-[#b5584f] text-white px-8 py-4 rounded-full font-montserrat font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#cf655b]/30 cursor-pointer">
                        Organizar a mis invitados
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>

                    <button className="bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white text-zinc-800 px-8 py-4 rounded-full font-montserrat font-semibold text-sm transition-all hover:scale-105 cursor-pointer shadow-lg shadow-zinc-200/20">
                        Ver cómo funciona
                    </button>
                </div>

                <div className="flex items-center gap-3 mt-8">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === i ? "w-8 bg-[#cf655b]" : "w-3 bg-zinc-300"}`}
                        />
                    ))}
                </div>
            </div>

            {/* --- COLUMNA DERECHA: Escenario 3D Parallax --- */}
            <div
                className="relative w-full h-[600px] md:h-[680px] flex items-center justify-center [perspective:1500px]"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative w-[85%] max-w-[420px] h-[90%] rounded-[2.5rem] shadow-2xl shadow-zinc-300/50"
                >
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={slide.id}
                            initial={{ x: 300, opacity: 0, rotateY: -15 }}
                            animate={{ x: 0, opacity: 1, rotateY: 0 }}
                            exit={{ x: -300, opacity: 0, rotateY: 15 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 w-full h-full [transform-style:preserve-3d] rounded-[2.5rem]"
                        >
                            {/* 1. CAPA FONDO (translateZ: 0px) */}
                            {/* Muestra la imagen completa (con sus títulos reales) sin oscurecer */}
                            <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-100">
                                <Image src={slide.bg} alt="Fondo" fill className="object-cover" priority />
                            </div>

                            {/* 2. CAPA TARJETAS (translateZ: 30px) */}
                            {/* Las tarjetas son sólidas (blancas) y están estratégicamente posicionadas hacia los bordes */}
                            <motion.div
                                style={{ x: translateXFg, y: translateYFg, translateZ: 30 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Confirmación de Invitado */}
                                <div className="absolute top-[18%] -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] min-w-[220px]">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="font-montserrat font-bold text-sm text-zinc-800">{slide.guest.name}</p>
                                        <span className="text-[9px] text-zinc-400">{slide.guest.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-2">
                                        <Check size={12} className="text-[#2d5a27]" strokeWidth={3} />
                                        <p className="font-montserrat text-[10px] text-[#2d5a27] font-semibold">Confirmado por: {slide.guest.confBy}</p>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-zinc-100">
                                        <p className="font-montserrat text-[10px] text-zinc-500">Asistirán <span className="font-bold text-zinc-800">{slide.guest.pax} persona(s)</span></p>
                                        <div className="flex items-center gap-1 bg-[#fff1f2] text-[#f43f5e] px-2 py-0.5 rounded text-[10px] font-bold">
                                            <Ticket size={10} /> {slide.guest.pax}
                                        </div>
                                    </div>
                                </div>

                                {/* Total de Asistentes */}
                                <div className="absolute top-[12%] -right-4 md:-right-8 bg-white px-5 py-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex flex-col items-center">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users size={14} className="text-[#f97316]" />
                                        <p className="font-montserrat text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Total asistentes</p>
                                    </div>
                                    <p className="font-montserrat font-bold text-4xl text-[#1e293b]">
                                        {slide.stats.total}
                                    </p>
                                </div>

                                {/* Asignación de Mesas */}
                                <div className="absolute bottom-[28%] -right-8 md:-right-14 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                                    <div className="flex items-center gap-2 mb-3">
                                        <ClipboardList size={14} className="text-[#f43f5e]" />
                                        <p className="font-montserrat text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Asignación mesas</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-[#fff7ed] border border-[#ffedd5] rounded-xl py-2 px-3 text-center">
                                            <p className="font-montserrat text-[8px] font-bold text-[#ea580c] uppercase mb-1">Con mesa</p>
                                            <p className="font-montserrat font-bold text-xl text-[#ea580c] leading-none">{slide.stats.mesa}</p>
                                        </div>
                                        <div className="bg-zinc-50 border border-zinc-100 rounded-xl py-2 px-3 text-center">
                                            <p className="font-montserrat text-[8px] font-bold text-zinc-500 uppercase mb-1">Sin asignar</p>
                                            <p className="font-montserrat font-bold text-xl text-zinc-400 leading-none">{slide.stats.sinMesa}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tipo de Invitado */}
                                <div className="absolute bottom-[22%] -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                                    <div className="flex items-center gap-2 mb-3">
                                        <User size={14} className="text-blue-500" />
                                        <p className="font-montserrat text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Tipo invitado</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-[#eff6ff] border border-blue-100 rounded-xl py-2 px-3 text-center min-w-[65px]">
                                            <p className="font-montserrat text-[8px] font-bold text-blue-500 uppercase mb-1">Adultos</p>
                                            <p className="font-montserrat font-bold text-xl text-blue-600 leading-none">{slide.stats.adultos}</p>
                                        </div>
                                        <div className="bg-[#f0fdfa] border border-teal-100 rounded-xl py-2 px-3 text-center min-w-[65px]">
                                            <p className="font-montserrat text-[8px] font-bold text-teal-500 uppercase mb-1">Niños</p>
                                            <p className="font-montserrat font-bold text-xl text-teal-600 leading-none">{slide.stats.ninos}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Menú General */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] whitespace-nowrap">
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <Utensils size={14} className="text-[#f59e0b]" />
                                        <p className="font-montserrat text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Menú General</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl py-2 px-3 text-center min-w-[65px]">
                                            <p className="font-montserrat text-[8px] font-bold text-[#d97706] uppercase mb-1">Tradicional</p>
                                            <p className="font-montserrat font-bold text-lg text-[#d97706] leading-none">{slide.stats.trad}</p>
                                        </div>
                                        <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl py-2 px-3 text-center min-w-[65px]">
                                            <p className="font-montserrat text-[8px] font-bold text-[#d97706] uppercase mb-1">Vegetariano</p>
                                            <p className="font-montserrat font-bold text-lg text-[#d97706] leading-none">{slide.stats.veg}</p>
                                        </div>
                                        <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl py-2 px-3 text-center min-w-[65px]">
                                            <p className="font-montserrat text-[8px] font-bold text-[#d97706] uppercase mb-1">Infantil</p>
                                            <p className="font-montserrat font-bold text-lg text-[#d97706] leading-none">{slide.stats.inf}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 3. CAPA PERSONA (translateZ: 60px) */}
                            {/* Al tener translateZ(60), queda por ENCIMA de las tarjetas (translateZ: 30) */}
                            <motion.div
                                style={{ x: translateXFg, y: translateYFg, translateZ: 60 }}
                                // flex items-end garantiza que queden PEGADOS AL BORDE INFERIOR
                                className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none flex items-end justify-center overflow-hidden"
                            >
                                <Image
                                    src={slide.fg}
                                    alt="Personajes"
                                    width={800} height={1000}
                                    // h-[78%] las hace ~22% más pequeñas. object-bottom asegura que los pies/vestido toquen el límite de la caja
                                    className="w-auto h-[78%] object-contain object-bottom transition-all duration-700"
                                    priority
                                />
                            </motion.div>

                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}