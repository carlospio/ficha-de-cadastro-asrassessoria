'use client';

import { FormData } from '@/types/form';
import { formSteps } from '@/utils/formConfig';

interface ReviewStepProps {
  data: FormData;
  onEdit: (step: number) => void;
}

export default function ReviewStep({ data, onEdit }: ReviewStepProps) {
  return (
    <div className="space-y-6">
      {formSteps.map((step, stepIndex) => (
        <div key={step.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
            <button
              onClick={() => onEdit(stepIndex)}
              className="text-sm text-primary hover:text-primary/80 underline"
            >
              Editar
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {step.fields.map((field) => {
              const value = data[field.name];
              if (!value && field.required === false) return null;
              
              return (
                <div key={field.name} className="space-y-1">
                  <p className="text-sm text-gray-500">{field.label}</p>
                  <p className="text-base font-medium">{value || '-'}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
