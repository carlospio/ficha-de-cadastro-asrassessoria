import { cpf as cpfValidator } from 'cpf-cnpj-validator';

export const validateCPF = (value: string) => {
  if (!value) return 'CPF é obrigatório';
  const cleanCPF = value.replace(/[^\d]/g, '');
  return cpfValidator.isValid(cleanCPF) ? true : 'CPF inválido';
};

export const validateRG = (value: string) => {
  if (!value) return 'RG é obrigatório';
  const cleanRG = value.replace(/[^\d]/g, '');
  return cleanRG.length >= 7 ? true : 'RG inválido';
};

export const validatePhone = (value: string) => {
  if (!value) return true; // Phone is optional
  const cleanPhone = value.replace(/[^\d]/g, '');
  return cleanPhone.length >= 10 ? true : 'Telefone inválido';
};

export const validateCellPhone = (value: string) => {
  if (!value) return 'Celular é obrigatório';
  const cleanPhone = value.replace(/[^\d]/g, '');
  return cleanPhone.length === 11 ? true : 'Celular inválido';
};

export const validateEmail = (value: string) => {
  if (!value) return 'E-mail é obrigatório';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? true : 'E-mail inválido';
};

export const validateCurrency = (value: string) => {
  if (!value) return 'Valor é obrigatório';
  const cleanValue = value.replace(/[^\d,]/g, '');
  return cleanValue.length > 0 ? true : 'Valor inválido';
};
