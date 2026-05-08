'use client';
import { motion } from 'framer-motion';

interface FloatingWidgetProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function FloatingWidget({ children, className = '', delay = 0 }: FloatingWidgetProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-20 ${className}`}
        >
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 + delay, ease: "easeInOut" }}
                className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-4"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}