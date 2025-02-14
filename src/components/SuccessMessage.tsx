import React from 'react';

export default function SuccessMessage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Formulário Enviado com Sucesso!
        </h2>
        <p className="text-gray-600 mb-6">
          Em breve, nosso consultor entrará em contato com você.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Preencher Novo Formulário
        </button>
      </div>
    </div>
  );
}
