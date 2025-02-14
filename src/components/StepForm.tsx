import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormData } from '@/types/form';
import { formSteps } from '@/utils/formConfig';
import { sampleData } from '@/utils/sampleData';
import ProgressBar from './ProgressBar';
import FormField from './FormField';
import ReviewStep from './ReviewStep';
import SuccessMessage from './SuccessMessage';
import emailjs from '@emailjs/browser';
import { formatFormDataForEmail } from '@/utils/emailFormatter';

// Substitua estas constantes pelos seus valores do EmailJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || '';

export default function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const methods = useForm<FormData>();
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: FormData) => {
    if (currentStep === formSteps.length - 1) {
      setIsReviewing(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (isReviewing) {
      setIsReviewing(false);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleEdit = (step: number) => {
    setCurrentStep(step);
    setIsReviewing(false);
  };

  const handleFillSampleData = () => {
    reset(sampleData);
  };

  const handleFinalSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      const data = methods.getValues();
      const formattedData = formatFormDataForEmail(data);

      const templateParams = {
        to_name: 'ASR Assessoria',
        from_name: data.nome,
        message: formattedData,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <ProgressBar
          currentStep={isReviewing ? formSteps.length : currentStep}
          totalSteps={formSteps.length + 1}
        />
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8">
        {isReviewing ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Revisão dos Dados</h2>
            <ReviewStep data={methods.getValues()} onEdit={handleEdit} />
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {formSteps[currentStep].title}
              </h2>
              {currentStep === 0 && (
                <button
                  type="button"
                  onClick={handleFillSampleData}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Preencher Teste
                </button>
              )}
            </div>

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
                    className="ml-auto px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {currentStep === formSteps.length - 1 ? 'Revisar' : 'Próximo'}
                  </button>
                </div>
              </form>
            </FormProvider>
          </>
        )}

        {isReviewing && (
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Voltar
            </button>
            <button
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        )}

        {submitError && (
          <div className="mt-4 p-4 bg-red-50 rounded-md">
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        )}
      </div>
    </div>
  );
}
