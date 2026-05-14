import Link from 'next/link';
import Image from 'next/image'; // Agregamos la importación de Image

export default function Navbar() {
    const navLinks = [
        { name: 'Cómo funciona', href: '#como-funciona' },
        { name: 'Paquetes', href: '#paquetes' },
        { name: 'Catálogo', href: '#catalogo' },
        { name: 'Preguntas', href: '#preguntas' },
    ];

    return (
        // Quitamos el borde y el justify-between, añadimos relative para el centrado absoluto de los links
        <nav className="w-full py-6 flex items-center relative">

            {/* Logo en imagen alineado a la izquierda */}
            <Link href="/" className="flex items-center z-10 hover:opacity-80 transition-opacity">
                <Image
                    src="/logoevento.png"
                    alt="Logo Evento Clic"
                    width={180}
                    height={45}
                    priority // priority le dice a Next.js que cargue esta imagen lo más rápido posible
                    className="w-auto h-8 md:h-10 object-contain" // Altura responsiva (más pequeño en móvil, más grande en PC)
                />
            </Link>

            {/* Links centrados de forma absoluta en la pantalla */}
            <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            // Cambiamos el color de hover al naranja/rojo de la marca (#cf655b)
                            className="text-zinc-600 hover:text-[#cf655b] transition-colors text-sm font-medium font-montserrat relative group py-1"
                        >
                            {link.name}
                            {/* Línea animada usando el color de la marca */}
                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#cf655b] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    );
}