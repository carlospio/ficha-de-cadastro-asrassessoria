"use client"
import StepForm from '@/components/StepForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              Ficha de Cadastro
            </h1>
            <p className="mt-2 text-sm text-white">
              Preencha todos os campos obrigatórios marcados com *
            </p>
          </div>
          
          <StepForm />
        </div>
      </div>
    </main>
  );
}
