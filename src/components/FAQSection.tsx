'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQ_ITEMS = [
    { q: '¿Mis invitados necesitan descargar alguna aplicación?', a: 'No. Ninguna. Tus invitados confirman desde WhatsApp o desde un link normal en su navegador — exactamente como abrir cualquier mensaje. Funciona en cualquier celular, incluso los más básicos.' },
    { q: '¿Los adultos mayores van a poder confirmar?', a: 'Sí, y es la pregunta que más recibimos. El formulario está diseñado para una sola pantalla: nombre, cuántas personas asistirán y un botón grande. Si alguno realmente no puede, tú mismo puedes confirmar por él desde tu Centro de Control.' },
    { q: '¿Cuál es la diferencia entre los paquetes?', a: 'Esencial incluye invitación digital sencilla. Control QR es solo sistema (sin invitación, si ya tienes una). Premium combina invitación + organización. Elite es diseño exclusivo + soporte VIP con llamada personalizada.' },
    { q: '¿Cómo funciona el QR el día del evento?', a: 'Tu equipo abre el "Modo Recepción" desde cualquier celular, escanea el QR de cada invitado en la entrada y el sistema valida el acceso al instante: nombre, mesa y pases confirmados.' },
    { q: '¿Puedo cambiar algo después de contratar?', a: 'Sí. Textos, fotos, secciones, incluso la fecha — todos los cambios son gratuitos hasta 3 días antes del evento. Solo nos avisas por WhatsApp.' },
    { q: '¿Puedo subir mi lista desde Excel?', a: 'Sí, es la forma más rápida. Te compartimos una plantilla simple; la llenas con nombres y pases, la subes y todos los códigos se generan automáticamente.' },
    { q: '¿Qué pasa si cambio la fecha del evento?', a: 'Se actualiza en minutos: la invitación, los recordatorios, los tickets con QR. No pierdes nada de lo ya configurado y no hay costo extra.' },
    { q: '¿Mis datos y los de mis invitados están seguros?', a: 'Sí. Tu evento vive en un subdominio privado, los datos están cifrados y no compartimos información con terceros. Al terminar tu evento, puedes pedir la eliminación completa.' },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        // ATENCIÓN: No hay overflow-hidden aquí. Esto es vital para el sticky.
        <section className="relative w-full py-[160px] max-md:py-[100px] bg-[#fffcf9]" id="preguntas">

            {/* Contenedor absoluto para los blobs: Evita el scroll horizontal sin romper el sticky */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#fdf0ea] to-transparent rounded-full blur-[150px] opacity-60" />
            </div>

            <div className="max-w-[1400px] mx-auto px-10 max-md:px-[22px] relative z-10">

                {/* ESTRUCTURA CLAVE: grid-cols-[1fr_1.5fr] con items-start tal como en tu código original */}
                <div className="grid grid-cols-[1fr_1.5fr] max-[1024px]:grid-cols-1 gap-20 max-md:gap-12 items-start">

                    {/* --- COLUMNA IZQUIERDA: Sticky Header --- */}
                    <div className="lg:sticky lg:top-40 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-10 h-[1px] bg-[#cf655b]/40"></span>
                            <span className="font-montserrat text-zinc-500 font-semibold text-xs tracking-[0.2em] uppercase">
                                Resuelve tus dudas
                            </span>
                        </div>

                        <h2 className="font-veryvogue font-normal text-[clamp(42px,5vw,72px)] text-zinc-900 leading-[1.05] tracking-tight mb-8 text-balance">
                            Preguntas <br />
                            <span className="italic text-[#cf655b]">Frecuentes</span>
                        </h2>

                        <p className="font-montserrat text-zinc-500 text-[19px] leading-relaxed max-w-[32ch] mb-12">
                            Todo lo que necesitas saber sobre cómo Evento Clic simplificará la planificación de tu día más importante.
                        </p>

                        <div className="hidden lg:block w-24 h-24 rounded-full border border-[#cf655b]/20 flex items-center justify-center text-zinc-300">
                            {/* Detalle geométrico para rellenar visualmente */}
                            <div className="w-12 h-[1px] bg-[#cf655b]/20 rotate-45 absolute" />
                            <div className="w-12 h-[1px] bg-[#cf655b]/20 -rotate-45 absolute" />
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Acordeón Interactivo con Framer Motion --- */}
                    <div className="flex flex-col w-full border-t border-[#cf655b]/20">
                        {FAQ_ITEMS.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border-b border-[#cf655b]/20 group"
                                >
                                    <button
                                        onClick={() => toggleQuestion(index)}
                                        className="w-full flex items-start justify-between gap-8 py-8 text-left cursor-pointer focus:outline-none bg-transparent"
                                    >
                                        <h3 className={`font-veryvogue text-[22px] md:text-[26px] leading-[1.3] transition-colors duration-300 pr-8 mt-1
                                            ${isOpen ? 'text-[#cf655b] italic' : 'text-zinc-800 group-hover:text-[#cf655b]'}
                                        `}>
                                            {item.q}
                                        </h3>

                                        {/* Ícono animado */}
                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 border
                                                ${isOpen
                                                    ? 'bg-[#cf655b] text-white border-[#cf655b]'
                                                    : 'bg-transparent text-zinc-400 border-zinc-200 group-hover:border-[#cf655b] group-hover:text-[#cf655b]'
                                                }
                                            `}
                                        >
                                            <Plus strokeWidth={1.5} size={20} />
                                        </motion.div>
                                    </button>

                                    {/* Contenido desplegable con Framer Motion en lugar del maxHeight en duro */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-10 pr-12">
                                                    <p className="font-montserrat text-zinc-600 text-[17px] md:text-[19px] leading-[1.65]">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}