'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-12">
              <Image
                src="/logo-white.png"
                alt="ASR Assessoria Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

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
