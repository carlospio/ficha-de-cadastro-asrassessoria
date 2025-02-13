import { useFormContext } from 'react-hook-form';
import { FormData } from '@/types/form';

interface FormFieldProps {
  name: keyof FormData;
  label: string;
  type: string;
  required: boolean;
  mask?: string;
  options?: string[];
}

export default function FormField({ name, label, type, required, mask, options }: FormFieldProps) {
  const { register, formState: { errors } } = useFormContext<FormData>();

  const renderField = () => {
    if (type === 'select' && options) {
      return (
        <select
          {...register(name, { required: required ? `${label} é obrigatório` : false })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Selecione...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        {...register(name, {
          required: required ? `${label} é obrigatório` : false,
          pattern: type === 'email' ? {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'E-mail inválido'
          } : undefined
        })}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    );
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderField()}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
