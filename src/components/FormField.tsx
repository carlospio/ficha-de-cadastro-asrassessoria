import { useFormContext } from 'react-hook-form';
import { FormData } from '@/types/form';
import InputMask from 'react-input-mask';
import { validateCPF, validateRG, validatePhone, validateCellPhone, validateEmail, validateCurrency } from '@/utils/validation';

interface FormFieldProps {
  name: keyof FormData;
  label: string;
  type: string;
  required: boolean;
  mask?: string;
  options?: string[];
}

const getMask = (name: string, defaultMask?: string): string => {
  if (defaultMask) return defaultMask;

  switch (name) {
    case 'cpf':
      return '999.999.999-99';
    case 'rg':
      return '99.999.999-*';
    case 'telefone':
      return '(99) 9999-9999';
    case 'celular':
      return '(99) 99999-9999';
    case 'cep':
      return '99999-999';
    case 'dataNascimento':
    case 'dataEmissao':
      return '99/99/9999';
    default:
      return '';
  }
};

const getValidation = (name: string, required: boolean) => {
  const rules: any = {
    required: required ? 'Este campo é obrigatório' : false,
  };

  switch (name) {
    case 'cpf':
      rules.validate = validateCPF;
      break;
    case 'rg':
      rules.validate = validateRG;
      break;
    case 'telefone':
      rules.validate = validatePhone;
      break;
    case 'celular':
      rules.validate = validateCellPhone;
      break;
    case 'email':
      rules.validate = validateEmail;
      break;
    case 'precoImovel':
    case 'valorFinanciamento':
    case 'rendaMensal':
    case 'rendaMensalConjuge':
      rules.validate = validateCurrency;
      break;
  }

  return rules;
};

export default function FormField({ name, label, type, required, mask, options }: FormFieldProps) {
  const { register, formState: { errors } } = useFormContext<FormData>();
  const error = errors[name]?.message as string;
  const inputMask = getMask(name, mask);
  const validation = getValidation(name, required);

  const renderField = () => {
    if (type === 'select' && options) {
      return (
        <select
          {...register(name, validation)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
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

    if (type === 'checkbox') {
      return (
        <input
          type="checkbox"
          {...register(name, validation)}
          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
        />
      );
    }

    // Se for campo de data, usar text ao invés de date
    const inputType = type === 'date' ? 'text' : type;

    if (inputMask) {
      return (
        <InputMask
          mask={inputMask}
          {...register(name, validation)}
        >
          {(inputProps: any) => (
            <input
              {...inputProps}
              type={inputType}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
              placeholder={label ? `Digite ${label.toLowerCase()}` : ''}
            />
          )}
        </InputMask>
      );
    }

    return (
      <input
        type={inputType}
        {...register(name, validation)}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
        placeholder={label ? `Digite ${label.toLowerCase()}` : ''}
      />
    );
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {renderField()}
      {error && (
        <p className="mt-1 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
