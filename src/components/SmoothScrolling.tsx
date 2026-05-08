'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.08, // El nivel de suavidad (mientras más bajo, más suave y "pesado")
                duration: 1.2, // Duración base del scroll
                smoothWheel: true,
                wheelMultiplier: 1, // Velocidad de la rueda del ratón
            }}
        >
            {children}
        </ReactLenis>
    );
}