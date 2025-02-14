export interface FormData {
  // Dados Pessoais
  nome: string;
  dataNascimento: string;
  estadoCivil: string;
  nacionalidade: string;
  naturalidade?: string;
  cpf: string;
  rg: string;
  orgaoEmissor?: string;
  dataEmissao?: string;
  endereco: string;
  numero: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone: string;
  celular: string;
  email: string;

  // Dados Profissionais
  profissao: string;
  empresa: string;
  cargo: string;
  rendaMensal: string;
  tempoServico?: string;

  // Dados do Cônjuge (se casado)
  nomeConjuge?: string;
  cpfConjuge?: string;
  profissaoConjuge?: string;
  rendaMensalConjuge?: string;

  // Dados do Financiamento
  precoImovel: string;
  valorFinanciamento: string;
  prazoFinanciamento: string;
  incluirITBI: boolean;
  bancosPreferencia: string;
}

export type FormStep = {
  title: string;
  fields: Array<{
    name: keyof FormData;
    label: string;
    type: string;
    required: boolean;
    mask?: string;
    options?: string[];
  }>;
};
