'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Minus, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

// --- COMPONENTE TOOLTIP EDITORIAL ---
const FeatureText = ({ text }: { text: string }) => {
    // Expresión regular para separar el texto principal del texto entre paréntesis
    const match = text.match(/^(.*?)\s*\((.*?)\)(.*)$/);

    if (!match) return <span className="text-sm text-zinc-600 leading-relaxed">{text}</span>;

    const mainText = (match[1] + match[3]).trim();
    const rawTooltip = match[2].trim();
    // Capitalizamos la primera letra del tooltip por ortografía
    const tooltipText = rawTooltip.charAt(0).toUpperCase() + rawTooltip.slice(1);

    return (
        <span className="flex items-start text-sm text-zinc-600 leading-relaxed group relative">
            <span className="flex-1">{mainText}</span>
            <span className="inline-flex items-center justify-center ml-2 mt-0.5 cursor-help text-zinc-400 hover:text-[#cf655b] transition-colors">
                <HelpCircle size={16} strokeWidth={1.5} />
            </span>
            {/* Globo del Tooltip Mejorado */}
            <span className="absolute bottom-full right-0 md:left-1/2 md:-translate-x-1/2 mb-3 w-64 md:w-72 p-4 bg-zinc-900 text-white text-xs font-montserrat leading-relaxed rounded-2xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-2xl text-center">
                {tooltipText}
                {/* Flechita del globo */}
                <span className="absolute top-full right-4 md:left-1/2 md:-translate-x-1/2 border-[6px] border-transparent border-t-zinc-900" />
            </span>
        </span>
    );
};

export default function ComparisonSection() {
    const [showCards, setShowCards] = useState(false);
    // Estado para controlar qué tarjeta está expandida de forma individual
    const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

    const toggleCard = (index: number) => {
        setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
    };

    // DATOS DE LA TABLA COMPARATIVA
    const tableFeatures = [
        { name: "Precio MXN", es: "$699", qr: "$899", pr: "$1,499", el: "$2,999" },
        { name: "Invitación digital", es: "Catálogo", qr: "-", pr: "Catálogo", el: "Diseñada para ti" },
        { name: "Fotografías", es: "3", qr: "1", pr: "9", el: "12" },
        { name: "Secciones a elegir", es: "3", qr: "-", pr: "6", el: "Flexible" },
        { name: "Confirmación de asistencia", es: "WhatsApp", qr: "Sí", pr: "Sí", el: "Sí" },
        { name: "Tipo de códigos", es: "Generales x5", qr: "Personalizados", pr: "Generales x10", el: "Sí" },
        { name: "Tickets QR automáticos", es: "-", qr: "Sí", pr: "-", el: "Sí" },
        { name: "Centro de Control", es: "-", qr: "Sí", pr: "Básico", el: "Sí" },
        { name: "Envío y Recordatorios automáticos", es: "-", qr: "Sí", pr: "-", el: "Sí" },
        { name: "Control de acceso en puerta", es: "-", qr: "Sí", pr: "Check manual", el: "Sí" },
        { name: "Exportación de lista", es: "-", qr: "Sí", pr: "Excel básico", el: "Sí" },
        { name: "Estadísticas en tiempo real", es: "-", qr: "Sí", pr: "-", el: "Sí" },
        { name: "Tiempo de entrega", es: "48 h", qr: "48 h", pr: "72 h", el: "8 días hábiles" },
        { name: "Visibilidad previa al evento", es: "3 meses", qr: "3 meses", pr: "6 meses", el: "8 meses" },
    ];

    // DATOS DE LOS PAQUETES (CARDS)
    const packages = [
        {
            name: "Esencial Express",
            price: "$699 MXN",
            oldPrice: "$999 MXN",
            desc: "Ideal si necesitas invitar rápido y sin complicaciones",
            includes: [
                "Invitacion digital de catálogo personalizada",
                "Entrega en 48 horas hábiles",
                "Hasta 3 fotografías",
                "Confirmación de asistencia por WhatsApp con códigos por grupos (hasta 5 códigos)",
                "Contador regresivo",
                "3 secciones a elegir (sugerencia de regalos, código de vestimenta, mención a padres, mención a padrinos, selección de música, 1 sección de avisos)",
                "Visible 3 meses antes del evento"
            ],
            excludes: ["Centro de Control", "Tickets QR", "Control de acceso el día del evento"]
        },
        {
            name: "Control QR",
            price: "$899 MXN",
            desc: "Ideal si ya tienes invitación y quieres cero colados",
            includes: [
                "Formulario digital para confirmar asistencia",
                "Códigos únicos ilimitados por familia o invitado",
                "Pases estrictamente limitados por código",
                "Boletos digitales con QR automáticos al confirmar",
                "Centro de Control completo (estadísticas, avisos, gestión)",
                "Envío de invitaciones desde el Centro de Control",
                "Recordatorios a quienes no han confirmado",
                "Comunicación directa con asistentes confirmados",
                "Escaneo QR el dia del evento para controlar acceso",
                "Exportación avanzada: invitados, mesas, menús",
                "Entrega en 48 horas hábiles",
                "Visible 3 meses antes del evento"
            ],
            excludes: ["Invitacion digital (se vende por separado)"]
        },
        {
            name: "Premium",
            badge: "★ MÁS ELEGIDO",
            price: "$1,499 MXN",
            desc: "Ideal si quieres invitación bonita + confirmaciones sin caos",
            includes: [
                "Invitacion digital de catálogo personalizada con tus colores y fotos",
                "Hasta 9 fotografías",
                "Contador regresivo",
                "6 secciones a elegir (sugerencia de regalos, código de vestimenta, mención a padres, mención a padrinos, selección de música, sección de avisos, sugerencia de hospedaje, transporte y/o maquillaje)",
                "Entrega en 72 horas hábiles",
                "Confirmación de asistencia desde la invitación",
                "Hasta 10 códigos generales según asignación de pases",
                "Centro de Control para ver quien confirmó y quien no",
                "Lista de invitados exportable a Excel",
                "Modo recepción básico el dia del evento (check manual)",
                "Visible 6 meses antes del evento"
            ],
            excludes: ["Tickets QR", "Recordatorios automáticos", "Códigos personalizados por invitado"]
        },
        {
            name: "Elite",
            badge: "★ EXPERIENCIA COMPLETA",
            price: "$2,999 MXN",
            desc: "Ideal si quieres control total + invitación diseñada solo para ti",
            includes: [
                "Invitacion digital diseñada exclusivamente para tu evento",
                "Hasta 12 fotografías",
                "Contador regresivo",
                "Secciones a elegir (sugerencia de regalos, código de vestimenta extendido, mención a padres, mención a padrinos, selección de música, sección de avisos, sugerencia de hospedaje, transporte y/o maquillaje)",
                "Entrega en 8 días hábiles",
                "Códigos únicos ilimitados por familia o invitado",
                "Pases estrictamente limitados por código",
                "Boletos digitales con QR automáticos al confirmar",
                "Centro de Control completo (estadísticas, avisos, gestion)",
                "Envío de invitaciones desde el Centro de Control",
                "Recordatorios automáticos a invitados que no han confirmado",
                "Escaneo QR el dia del evento + control de acceso en puerta",
                "Estadísticas del evento en tiempo real",
                "Exportación avanzada: invitados, mesas y menus",
                "Visible 8 meses antes del evento"
            ],
            excludes: []
        }
    ];

    const renderTableValue = (val: string, highlightColor?: string) => {
        if (val === "-") return <Minus className="w-5 h-5 text-zinc-300 mx-auto" strokeWidth={1.5} />;
        if (val === "Sí") return <Check className={`w-5 h-5 mx-auto ${highlightColor || 'text-[#cf655b]'}`} strokeWidth={2.5} />;
        return <span className={`text-sm font-medium ${highlightColor || 'text-zinc-600'}`}>{val}</span>;
    };

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#f07343]/10 to-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#cf655b]/10 to-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">

                {/* --- ENCABEZADO DE TABLA --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-[1px] bg-zinc-300"></span>
                        <span className="font-montserrat text-zinc-500 font-semibold text-xs tracking-[0.2em] uppercase">
                            Comparativa
                        </span>
                        <span className="w-10 h-[1px] bg-zinc-300"></span>
                    </div>

                    <h2 className="font-veryvogue italic font-normal text-5xl md:text-6xl text-zinc-900 leading-[1.1] mb-6">
                        ¿Qué incluye <span className="text-[#cf655b]">cada paquete?</span>
                    </h2>
                    <p className="font-montserrat text-zinc-500 text-lg max-w-2xl">
                        Una vista rápida para que elijas sin dudas. Transparencia total en lo que obtienes.
                    </p>
                </motion.div>

                {/* --- TABLA COMPARATIVA --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-5xl overflow-x-auto custom-scrollbar pb-8 mb-8"
                >
                    <div className="min-w-[800px] w-full border border-zinc-200/60 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm">
                        <div className="grid grid-cols-5 bg-zinc-50/50 border-b border-zinc-200/60">
                            <div className="p-6 font-montserrat font-bold text-xs uppercase tracking-widest text-zinc-400">Características</div>
                            <div className="p-6 text-center font-veryvogue italic text-2xl text-zinc-800">Esencial</div>
                            <div className="p-6 text-center font-veryvogue italic text-2xl text-[#6b46c1] bg-[#6b46c1]/5">Control QR</div>
                            <div className="p-6 text-center font-veryvogue italic text-2xl text-[#cf655b]">Premium</div>
                            <div className="p-6 text-center font-veryvogue italic text-2xl text-[#2d5a27] bg-[#2d5a27]/5">Elite</div>
                        </div>

                        {tableFeatures.map((row, i) => (
                            <div key={i} className="grid grid-cols-5 border-b border-zinc-100 last:border-0 transition-colors hover:bg-zinc-50/50">
                                <div className="p-5 flex items-center font-montserrat text-sm text-zinc-600 font-medium">{row.name}</div>
                                <div className="p-5 flex items-center justify-center text-center">{renderTableValue(row.es, 'text-zinc-500')}</div>
                                <div className="p-5 flex items-center justify-center text-center bg-[#6b46c1]/[0.02]">{renderTableValue(row.qr, 'text-[#6b46c1]')}</div>
                                <div className="p-5 flex items-center justify-center text-center">{renderTableValue(row.pr, 'text-[#cf655b]')}</div>
                                <div className="p-5 flex items-center justify-center text-center bg-[#2d5a27]/[0.02]">{renderTableValue(row.el, 'text-[#2d5a27]')}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* --- CTA PARA DESPLEGAR TARJETAS --- */}
                <motion.button
                    onClick={() => setShowCards(!showCards)}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="font-montserrat font-semibold text-sm tracking-widest uppercase text-zinc-500 group-hover:text-[#cf655b] transition-colors">
                        {showCards ? "Ocultar detalles completos" : "Ver detalles completos por paquete"}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-[#cf655b] group-hover:text-[#cf655b] group-hover:bg-[#fdf0ea] transition-all">
                        {showCards ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                </motion.button>

                {/* --- SECCIÓN OCULTA: TARJETAS EXPANDIBLES --- */}
                <AnimatePresence>
                    {showCards && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full overflow-hidden"
                        >
                            {/* pt-8 protege las etiquetas superiores del overflow */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12 pt-8 mt-4">
                                {packages.map((pkg, idx) => {
                                    const isExpanded = expandedCards[idx];
                                    const visibleCount = 4; // Elementos visibles antes de expandir

                                    return (
                                        <div
                                            key={idx}
                                            className={`relative bg-white rounded-[2rem] p-8 flex flex-col shadow-xl transition-all duration-500 hover:-translate-y-2
                                                ${pkg.badge ? 'border-2 border-[#cf655b] shadow-[#cf655b]/10' : 'border border-zinc-100 shadow-zinc-200/50'}
                                            `}
                                        >
                                            {/* Etiqueta Integrada al Flujo (Ya no se corta) */}
                                            {pkg.badge ? (
                                                <div className="bg-[#fdf0ea] text-[#cf655b] font-montserrat font-bold text-[9px] md:text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full self-center mb-4 text-center">
                                                    {pkg.badge}
                                                </div>
                                            ) : (
                                                <div className="h-[28px] mb-4" /> // Espaciador para alinear las tarjetas
                                            )}

                                            <h3 className="font-veryvogue italic text-3xl text-zinc-900 mb-2 text-center px-2">
                                                {pkg.name}
                                            </h3>
                                            <p className="font-montserrat text-zinc-500 text-xs text-center min-h-[40px] mb-6">
                                                {pkg.desc}
                                            </p>

                                            <div className="flex flex-col items-center justify-center border-y border-zinc-100 py-6 mb-6">
                                                <span className="font-veryvogue text-4xl text-[#cf655b] mb-1">
                                                    {pkg.price}
                                                </span>
                                                {pkg.oldPrice && (
                                                    <span className="font-montserrat text-xs text-zinc-400 line-through">
                                                        Regular: {pkg.oldPrice}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Lista de Características con "Ver más" */}
                                            <div className="flex-grow flex flex-col">
                                                <p className="font-montserrat font-bold text-[10px] tracking-widest uppercase text-zinc-800 mb-4">Incluye:</p>

                                                <ul className="space-y-4 mb-2">
                                                    {/* Mostrar siempre los primeros 'visibleCount' */}
                                                    {pkg.includes.slice(0, visibleCount).map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <Check className="w-4 h-4 text-[#2d5a27] flex-shrink-0 mt-0.5" strokeWidth={3} />
                                                            <FeatureText text={feature} />
                                                        </li>
                                                    ))}

                                                    {/* Contenido Expandible */}
                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden flex flex-col gap-4 mt-4"
                                                            >
                                                                {pkg.includes.slice(visibleCount).map((feature, i) => (
                                                                    <li key={`exp-${i}`} className="flex items-start gap-3">
                                                                        <Check className="w-4 h-4 text-[#2d5a27] flex-shrink-0 mt-0.5" strokeWidth={3} />
                                                                        <FeatureText text={feature} />
                                                                    </li>
                                                                ))}

                                                                {pkg.excludes.length > 0 && (
                                                                    <>
                                                                        <p className="font-montserrat font-bold text-[10px] tracking-widest uppercase text-zinc-400 mt-4 mb-0">No incluye:</p>
                                                                        {pkg.excludes.map((feature, i) => (
                                                                            <li key={`exc-${i}`} className="flex items-start gap-3 opacity-60">
                                                                                <Minus className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                                                                                <span className="text-sm text-zinc-500 leading-relaxed">{feature}</span>
                                                                            </li>
                                                                        ))}
                                                                    </>
                                                                )}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </ul>

                                                {/* Botón Ver Más / Ver Menos */}
                                                {(pkg.includes.length > visibleCount || pkg.excludes.length > 0) && (
                                                    <button
                                                        onClick={() => toggleCard(idx)}
                                                        className="mt-auto self-center flex items-center gap-1 font-montserrat font-semibold text-[10px] tracking-widest uppercase text-[#cf655b] hover:text-[#b5584f] transition-colors py-4 cursor-pointer"
                                                    >
                                                        {isExpanded ? (
                                                            <>Ver menos <ChevronUp size={14} /></>
                                                        ) : (
                                                            <>Ver características completas <ChevronDown size={14} /></>
                                                        )}
                                                    </button>
                                                )}
                                            </div>

                                            <button className={`w-full py-4 rounded-full font-montserrat font-semibold text-sm transition-all mt-4 cursor-pointer
                                                ${pkg.badge
                                                    ? 'bg-[#cf655b] text-white hover:bg-[#b5584f] shadow-lg shadow-[#cf655b]/30'
                                                    : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                                                }
                                            `}>
                                                Elegir {pkg.name}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}