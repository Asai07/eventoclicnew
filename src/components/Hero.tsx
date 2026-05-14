'use client';

import { useState, useEffect, MouseEvent, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check, Users, ClipboardList, User, Utensils, Ticket } from 'lucide-react';
// Importamos el componente correcto de blobs
import BackgroundBlobs from './BackgroundBlobs';

// --- DATOS DEL CARRUSEL ---
const SLIDES = [
    {
        id: 1, // Luisa y Edgar
        bg: '/hero/2.png',
        fg: '/hero/3.png',
        stats: { total: 260, mesa: 120, sinMesa: 100, adultos: 220, ninos: 40, trad: 170, veg: 50, inf: 40 },
        guest: { name: 'Espinoza Rocha', confBy: 'Valeria', pax: 3, time: '17:44' },
        topCardsYOffset: "top-[18%]",
        // CORRECCIÓN: justify-end los pega al fondo inferior, items-center los centra
        fgAlignment: "justify-end items-center",
        // Eliminamos el -translate-y-4 para asegurar que toquen el piso
        fgObjectAlignment: "object-bottom",
        fgImageHeight: "h-[75%]",
        allWidgetsAbove: false,
    },
    {
        id: 2, // Mariel
        bg: '/hero/5.png',
        fg: '/hero/6.png',
        stats: { total: 180, mesa: 180, sinMesa: 0, adultos: 160, ninos: 20, trad: 160, veg: 0, inf: 20 },
        guest: { name: 'Hinojosa Paz', confBy: 'Erick', pax: 5, time: '10:21' },
        topCardsYOffset: "top-[28%]",
        // CORRECCIÓN: Pegada completamente abajo
        fgAlignment: "justify-end items-center",
        fgObjectAlignment: "object-bottom",
        fgImageHeight: "h-[78%]",
        allWidgetsAbove: false,
    },

    {
        id: 3, // Mateo Bautizo
        bg: '/hero/8.png',
        fg: '/hero/10.png',
        title: 'MI BAUTISMO MATEO',
        stats: { total: 180, mesa: 180, sinMesa: 0, adultos: 160, ninos: 20, trad: 160, veg: 0, inf: 20 },
        guest: { name: 'Hinojosa Paz', confBy: 'Erick', pax: 5, time: '10:21' },
        fgAlignment: "justify-end items-end",
        // CORRECCIÓN: object-right lo pega, y overflow-hidden de la capa superior se encargará de recortarlo al ras.
        fgObjectAlignment: "object-right object-bottom -translate-x-4.5 -translate-y-5",
        fgImageHeight: "h-[72%]",
        allWidgetsAbove: true,
    }
];

// --- VARIANTS PARA TRANSICIÓN IMPRESIONANTE (3D Push/Scale) ---
const slideVariants = {
    // Definimos custom variants basadas en la dirección del carrusel
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%', // Deslizamiento lateral
        opacity: 0,
        scale: 0.8, // Entra desde atrás (más pequeño)
        // Agregamos una rotación sutil en Y para perspectiva
        rotateY: direction > 0 ? 30 : -30,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1, // Escala completa al centro
        rotateY: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom easeOutExpon
        },
    },
    exit: (direction: number) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.8, // Se va hacia atrás
        rotateY: direction < 0 ? 30 : -30,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    }),
};

// --- COMPONENTES DE TARJETAS (WIDGETS) ---
// Extraídos para limpiar el código principal

const TopCards = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <>
        {/* Notificación de Confirmación */}
        <div className={`absolute -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] min-w-[220px] pointer-events-auto ${slide.topCardsYOffset}`}>
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
        <div className={`absolute -right-4 md:-right-8 bg-white px-5 py-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex flex-col items-center pointer-events-auto ${slide.topCardsYOffset}`}>
            <div className="flex items-center gap-2 mb-2">
                <Users size={14} className="text-[#f97316]" />
                <p className="font-montserrat text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Total asistentes</p>
            </div>
            <p className="font-montserrat font-bold text-4xl text-[#1e293b]">{slide.stats.total}</p>
        </div>

        {/* Asignación de Mesas */}
        <div className="absolute bottom-[28%] -right-8 md:-right-14 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] pointer-events-auto">
            <div className="flex items-center gap-2 mb-3">
                <ClipboardList size={14} className="text-[#f43f5e]" />
                <p className="font-montserrat text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Asignación mesas</p>
            </div>
            <div className="flex gap-2">
                <div className="bg-[#fff7ed] border border-[#ffedd5] rounded-xl py-2 px-3 text-center">
                    <p className="font-montserrat text-[8px] font-bold text-[#ea580c] uppercase mb-1">Con mesa</p>
                    <p className="font-montserrat font-bold text-xl text-[#ea580c] leading-none">{slide.stats.mesa}</p>
                </div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl py-2 px-3 text-center">
                    <p className="font-montserrat text-[8px] font-bold text-zinc-500 uppercase mb-1">Sin asignar</p>
                    <p className="font-montserrat font-bold text-xl text-zinc-400 leading-none">{slide.stats.sinMesa}</p>
                </div>
            </div>
        </div>

        {/* Tipo de Invitado */}
        <div className="absolute bottom-[22%] -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] pointer-events-auto">
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
    </>
);

const BottomCard = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] whitespace-nowrap pointer-events-auto">
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
);

// --- COMPONENTE PRINCIPAL ---
export default function Hero() {
    // Usamos una tupla de estado para rastrear el índice y la dirección (importante para la animación)
    const [[activeSlide, direction], setPage] = useState([0, 0]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Función para cambiar de slide (paginar)
    const paginate = (newDirection: number) => {
        let nextSlide = activeSlide + newDirection;
        if (nextSlide < 0) nextSlide = SLIDES.length - 1;
        if (nextSlide >= SLIDES.length) nextSlide = 0;
        setPage([nextSlide, newDirection]);
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000);
        return () => clearInterval(timer);
    }, [activeSlide]);

    const slide = SLIDES[activeSlide];

    // --- FÍSICAS 3D (PARALLAX CON EL MOUSE) ---
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

    // Inclinación del contenedor principal
    const rotateX = useTransform(mouseYSpring, [0, 1], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [0, 1], ["-8deg", "8deg"]);

    // Parallax interno suave para las capas (widgets y personaje)
    const parallaxX = useTransform(mouseXSpring, [0, 1], ["15px", "-15px"]);
    const parallaxY = useTransform(mouseYSpring, [0, 1], ["10px", "-10px"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Normalizar posición del mouse a rango 0-1
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        // Regresar suavemente al centro al quitar el mouse
        x.set(0.5);
        y.set(0.5);
    };

    return (
        // CORRECCIÓN: Regresamos a tus clases originales para el contenedor principal
        <section className="relative pt-12 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh] overflow-hidden lg:overflow-visible">

            {/* === BLOBS DE FONDO DEL HERO (Basados en tu código original pero animados) === */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], x: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[15%] -left-[10%] w-[50%] max-w-[500px] aspect-square bg-[#cf655b]/20 rounded-full blur-[120px] pointer-events-none -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[20%] -right-[10%] w-[45%] max-w-[450px] aspect-square bg-[#faa671]/20 rounded-full blur-[130px] pointer-events-none -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.08, 1], x: [0, -15, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-[10%] left-[20%] w-[40%] max-w-[400px] aspect-square bg-[#f07343]/15 rounded-full blur-[100px] pointer-events-none -z-10"
            />

            {/* --- COLUMNA IZQUIERDA (CONTENIDO) --- */}
            <div className="flex flex-col gap-6 max-w-xl z-20 relative pl-4 md:pl-8 lg:pl-0">
                <h1 className="text-5xl lg:text-7xl leading-[1.05] text-zinc-900 font-veryvogue italic font-normal">
                    El sistema que organiza a tus invitados y{' '}
                    <span className="text-[#cf655b]">controla</span> quién entra a tu evento
                </h1>

                <p className="font-montserrat text-lg text-zinc-600 leading-relaxed max-w-md">
                    Confirmaciones inteligentes, códigos únicos y acceso con QR. Todo en un solo centro de control.<br /><strong><em>Sin caos el día del evento.</em></strong>
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

                {/* Indicadores de paginación */}
                <div className="flex items-center gap-3 mt-8">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                // Calculamos dirección al hacer click
                                const dir = i > activeSlide ? 1 : -1;
                                setPage([i, dir]);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === i ? "w-8 bg-[#cf655b]" : "w-3 bg-zinc-300"}`}
                        />
                    ))}
                </div>
            </div>

            {/* --- COLUMNA DERECHA (ESCENARIO 3D) --- */}
            <div
                className="relative w-full h-[600px] md:h-[680px] flex items-center justify-center [perspective:1200px]"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Contenedor principal con rotación 3D */}
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative w-[85%] max-w-[420px] h-[90%] rounded-[2.5rem] shadow-2xl shadow-zinc-300/50"
                >
                    {/* AnimatePresence para manejar la entrada y salida de slides */}
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={slide.id}
                            custom={direction}
                            variants={slideVariants} // Aplicamos las nuevas variantes 3D
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 w-full h-full [transform-style:preserve-3d]"
                        >
                            {/* CAPA 0: FONDO DEL SLIDE (Z: 0) */}
                            <div className="absolute inset-0 z-0 rounded-[2.5rem] overflow-hidden bg-zinc-100">
                                <Image src={slide.bg} alt="Fondo" fill className="object-cover" priority />
                            </div>

                            {/* CAPA 1: WIDGETS TRASEROS (Z: 30) */}
                            <motion.div
                                style={{ z: 30, x: parallaxX, y: parallaxY }}
                                className="absolute inset-0 pointer-events-none [transform-style:preserve-3d]"
                            >
                                {!slide.allWidgetsAbove && <TopCards slide={slide} />}
                            </motion.div>

                            {/* CAPA 2: PERSONAJE (Z: 60) */}
                            <motion.div
                                style={{ z: 60, x: parallaxX, y: parallaxY }}
                                className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                            >
                                <div className={`absolute inset-0 w-full h-full flex flex-col ${slide.fgAlignment}`}>
                                    <Image
                                        src={slide.fg}
                                        alt="Personaje"
                                        width={800} height={1000}
                                        // CORRECCIÓN: Aplicar alineación estricta en className
                                        className={`w-auto ${slide.fgImageHeight} ${slide.fgObjectAlignment} transition-all duration-700`}
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* CAPA 3: WIDGETS FRONTALES (Z: 90) */}
                            <motion.div
                                style={{ z: 90, x: parallaxX, y: parallaxY }}
                                className="absolute inset-0 pointer-events-none [transform-style:preserve-3d]"
                            >
                                {slide.allWidgetsAbove && <TopCards slide={slide} />}
                                <BottomCard slide={slide} />
                            </motion.div>

                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}