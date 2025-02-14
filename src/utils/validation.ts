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
  
  // Remove R$, pontos e espaços, deixando apenas números e vírgula
  const cleanValue = value.replace(/[R$\s.]/g, '');
  
  // Verifica se é um valor monetário válido (com ou sem centavos)
  const currencyRegex = /^\d+(?:,\d{2})?$/;
  
  if (!currencyRegex.test(cleanValue)) {
    return 'Valor inválido';
  }
  
  // Converte para número (substituindo vírgula por ponto)
  const numericValue = Number(cleanValue.replace(',', '.'));
  
  // Verifica se é um valor positivo
  return numericValue > 0 ? true : 'O valor deve ser maior que zero';
};
