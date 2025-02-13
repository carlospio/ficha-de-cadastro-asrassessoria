import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormData } from '@/types/form';
import { formSteps } from '@/utils/formConfig';
import ProgressBar from './ProgressBar';
import FormField from './FormField';

export default function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;

  const onSubmit = (data: FormData) => {
    if (currentStep === formSteps.length - 1) {
      console.log('Form submitted:', data);
      // Aqui você pode enviar os dados para sua API
      alert('Formulário enviado com sucesso!');
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <ProgressBar
          currentStep={currentStep}
          totalSteps={formSteps.length}
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {formSteps[currentStep].title}
        </h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {formSteps[currentStep].fields.map((field) => (
                <FormField
                  key={field.name}
                  {...field}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Voltar
                </button>
              )}
              <button
                type="submit"
                className="ml-auto px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {currentStep === formSteps.length - 1 ? 'Enviar' : 'Próximo'}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
