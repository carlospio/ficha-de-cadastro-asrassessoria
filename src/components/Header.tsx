'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary w-full top-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/ficha-de-cadastro-asrassessoria/logo-branco.png"
              alt="ASR Assessoria Logo"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <Link
              href="https://asrassessoria.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 font-medium transition-colors"
            >
              Site
            </Link>
            <Link
              href="https://asrassessoria.com.br/contato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 font-medium transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
