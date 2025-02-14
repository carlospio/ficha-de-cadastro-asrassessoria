'use client';

export default function Footer() {
  return (
    <footer className="bg-primary/10 mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} ASR Assessoria. Todos os direitos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}
