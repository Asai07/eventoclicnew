import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import FloatingWidget from './FloatingWidget';

export default function Hero() {
    return (
        // 1. Agregamos "relative" aquí para que los blobs se contengan en el Hero
        <section className="relative pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

            {/* === BLOBS DE FONDO DEL HERO === */}
            <div className="absolute -top-[15%] -left-[10%] w-[50%] max-w-[500px] aspect-square bg-[#cf655b]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-[20%] -right-[10%] w-[45%] max-w-[450px] aspect-square bg-[#faa671]/20 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute -bottom-[10%] left-[20%] w-[40%] max-w-[400px] aspect-square bg-[#f07343]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* Columna Izquierda: Copy y CTA */}
            <div className="flex flex-col gap-6 max-w-xl relative z-10">
                <h1 className="text-5xl lg:text-7xl leading-[1.1] text-zinc-800 font-veryvogue italic font-normal">
                    El sistema que organiza a tus invitados y{' '}
                    <span className="text-[#cf655b]">controla</span> quién entra a tu evento
                </h1>

                <p className="text-lg text-zinc-600 leading-relaxed max-w-md">
                    Confirmaciones, códigos únicos y acceso con QR. Todo en un solo panel. Sin revisar Whatsapp a media noche.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 bg-[#cf655b] hover:bg-[#b5584f] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#cf655b]/30 cursor-pointer">
                        Organizar a mis invitados
                        <FiArrowRight className="w-5 h-5" />
                    </button>

                    <button className="bg-white/50 hover:bg-white/80 backdrop-blur-sm text-zinc-800 px-8 py-4 rounded-full font-medium transition-all cursor-pointer">
                        Ver cómo funciona
                    </button>
                </div>
            </div>

            {/* Columna Derecha: Imagen y Widgets */}
            <div className="relative w-full h-[600px] rounded-[2rem] flex items-center justify-center z-10">
                {/* Máscara de imagen */}
                <div className="relative w-[85%] h-full rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                        src="/tu-imagen-pareja.jpg" // Reemplazar con la ruta real
                        alt="Pareja de bodas"
                        fill
                        className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute top-8 w-full text-center text-white text-3xl font-serif tracking-widest">
                        LUISA & EDGAR
                    </h3>
                </div>

                {/* Widgets Flotantes */}
                <FloatingWidget delay={0.2} className="-left-10 top-1/4">
                    <div className="text-sm">
                        <p className="font-bold text-zinc-800">Espinoza Rocha</p>
                        <p className="text-xs text-green-600">✓ Confirmado por: Valeria</p>
                        <p className="text-xs text-zinc-500 mt-1">Asistirán <span className="font-bold">3 persona(s)</span></p>
                    </div>
                </FloatingWidget>

                <FloatingWidget delay={0.4} className="-right-8 top-1/3">
                    <div className="text-sm text-center">
                        <p className="text-xs text-zinc-500 font-medium mb-1">TOTAL DE ASISTENTES</p>
                        <p className="text-3xl font-bold text-[#1e3a8a]">260</p>
                    </div>
                </FloatingWidget>

                <FloatingWidget delay={0.6} className="-left-4 bottom-1/4">
                    <div className="text-sm">
                        <p className="text-xs text-zinc-500 font-medium mb-2 text-center">TIPO DE INVITADO</p>
                        <div className="flex gap-4 text-center">
                            <div>
                                <p className="text-[10px] text-blue-500 font-bold">ADULTOS</p>
                                <p className="text-xl font-bold text-blue-600">220</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-teal-500 font-bold">NIÑOS</p>
                                <p className="text-xl font-bold text-teal-600">40</p>
                            </div>
                        </div>
                    </div>
                </FloatingWidget>
            </div>

        </section>
    );
}