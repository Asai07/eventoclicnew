'use client';
import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
    return (
        // El fondo base lo hacemos casi blanco roto para que los colores resalten
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#fffaf8]">

            {/* Blob Izquierdo (Rosado) */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#f8d6d4] to-[#f0b5b1] blur-[100px] opacity-70"
            />

            {/* Blob Derecho (Durazno/Naranja) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2 // Desfasado para que no se muevan igual
                }}
                className="absolute top-[10%] -right-[15%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-bl from-[#fee9dc] to-[#fcd2b8] blur-[120px] opacity-70"
            />
        </div>
    );
}