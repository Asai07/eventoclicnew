'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, MessageCircle } from 'lucide-react';

// --- DATOS DEL CATÁLOGO CON IMÁGENES DE UNSPLASH ---
const catalogModels = [
    {
        id: 'm1',
        title: 'Luisa & Edgar',
        category: 'bodas',
        tag: 'Boda',
        // Boda Clásica Elegante
        image: 'https://plus.unsplash.com/premium_photo-1675851211534-4acd0a2b69a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        colors: ['#fdf0ea', '#cf655b', '#2d5a27']
    },
    {
        id: 'm2',
        title: 'Ana & Diego',
        category: 'bodas',
        tag: 'Boda',
        // Botánica Minimalista / Naturaleza
        image: 'https://images.unsplash.com/photo-1591604442449-ecc9943efabf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        colors: ['#f4fbf6', '#2d5a27', '#cf655b']
    },
    {
        id: 'm3',
        title: 'Mis XV Valentina',
        category: 'xv',
        tag: 'XV Años',
        // Vestido Elegante / Editorial
        image: 'https://images.unsplash.com/photo-1714611302520-5afa2c3e26df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        colors: ['#fdfaf8', '#cf655b', '#1e1e1e']
    },
    {
        id: 'm4',
        title: 'Bautizo de Mateo',
        category: 'bautizos',
        tag: 'Bautizo',
        // Tonos puros, dorados, angelical
        image: 'https://plus.unsplash.com/premium_photo-1664372356925-a83100a601a5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        colors: ['#fffdfa', '#d4af37', '#8b5cf6']
    },
    {
        id: 'm5',
        title: 'Camila & José',
        category: 'bodas',
        tag: 'Boda',
        // Estilo Boho Chic / Pampas
        image: 'https://images.unsplash.com/photo-1679599441412-5e42d65e6c09?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        colors: ['#fdf5e6', '#d2b48c', '#8b4513']
    },
    {
        id: 'm6',
        title: 'Mis XV Sofía',
        category: 'xv',
        tag: 'XV Años',
        // Evento de noche / Neón / Fiesta
        image: 'https://images.unsplash.com/photo-1656918839048-cd1c3df3c0e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        colors: ['#1a1a2e', '#16213e', '#e94560']
    }
];

const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bodas', label: 'Bodas' },
    { id: 'xv', label: 'XV Años' },
    { id: 'bautizos', label: 'Bautizos' },
];

export default function CatalogSection() {
    const [activeCategory, setActiveCategory] = useState('todos');

    // Filtrar los modelos según la categoría seleccionada
    const filteredModels = catalogModels.filter(model =>
        activeCategory === 'todos' ? true : model.category === activeCategory
    );

    return (
        <section className="relative w-full py-24 bg-[#fdfaf8] overflow-hidden min-h-[800px]">

            {/* === Blobs de fondo === */}
            <div className="absolute top-0 left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[#cf655b]/10 to-[#f07343]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#2d5a27]/5 to-[#cf655b]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">

                {/* --- 1. ENCABEZADO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-zinc-300"></span>
                        <span className="font-montserrat text-zinc-500 font-semibold text-xs tracking-[0.2em] uppercase">
                            Catálogo
                        </span>
                        <span className="w-8 h-[1px] bg-zinc-300"></span>
                    </div>

                    <h2 className="font-veryvogue font-normal text-4xl md:text-5xl lg:text-6xl text-zinc-900 leading-[1.1] mb-6">
                        Modelos pensados para <span className="italic text-[#cf655b]">bodas y eventos.</span>
                    </h2>
                    <p className="font-montserrat text-zinc-500 text-lg max-w-2xl">
                        Cada diseño se personaliza con tus colores, textos y fotografías. Explora algunos de los modelos disponibles.
                    </p>
                </motion.div>

                {/* --- 2. FILTROS (Pills) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`relative px-6 py-2.5 rounded-full font-montserrat font-semibold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer overflow-hidden border
                                ${activeCategory === cat.id
                                    ? 'text-white border-[#cf655b] shadow-lg shadow-[#cf655b]/20'
                                    : 'text-zinc-500 border-zinc-200 hover:border-zinc-300 hover:bg-white'
                                }
                            `}
                        >
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeCategoryIndicator"
                                    className="absolute inset-0 bg-[#cf655b] -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {cat.label}
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] 
                                    ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-400'}
                                `}>
                                    {cat.id === 'todos' ? catalogModels.length : catalogModels.filter(m => m.category === cat.id).length}
                                </span>
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* --- 3. GRID DE CATÁLOGO (Immersive Cards) --- */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
                >
                    <AnimatePresence>
                        {filteredModels.map((model) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                key={model.id}
                                className="group relative w-full aspect-[9/16] max-h-[600px] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-xl shadow-zinc-200/50 cursor-pointer"
                            >
                                {/* Imagen Principal (Unoptimized para que las URLs externas funcionen sin config extra) */}
                                <Image
                                    src={model.image}
                                    alt={`Modelo ${model.title}`}
                                    fill
                                    unoptimized
                                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Overlay Degradado y Glassmorphism Tenue en Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 md:p-8">

                                    {/* Top: Tag en esquina superior derecha */}
                                    <div className="flex justify-end items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                        <span className="bg-black/30 backdrop-blur-md text-white border border-white/20 font-montserrat font-semibold text-[9px] tracking-widest uppercase px-4 py-2 rounded-full">
                                            {model.tag}
                                        </span>
                                    </div>

                                    {/* Bottom: Título y CTAs */}
                                    <div className="flex flex-col translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">

                                        <h3 className="font-veryvogue italic text-4xl lg:text-5xl text-white mb-6 drop-shadow-md">
                                            {model.title}
                                        </h3>

                                        <div className="flex flex-col gap-3">
                                            {/* CTA WhatsApp Original */}
                                            <button className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] hover:bg-[#1e3f1b] text-white py-4 rounded-full font-montserrat font-semibold text-sm transition-colors shadow-lg shadow-[#2d5a27]/30">
                                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                                </svg>
                                                Cotizar por WhatsApp
                                            </button>

                                            {/* CTA Ver demo */}
                                            <button className="w-full flex items-center justify-center gap-2 bg-[#cf655b] hover:bg-[#b5584f] text-white py-4 rounded-full font-montserrat font-semibold text-sm transition-colors shadow-lg shadow-[#cf655b]/30">
                                                Ver demo
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}