export interface FormField {
  name: keyof FormData;
  label: string;
  type: string;
  required: boolean;
  mask?: string;
  options?: string[];
  showWhen?: string;
}

export interface FormStep {
  title: string;
  fields: FormField[];
}

export interface FormData {
  // Dados Pessoais
  nome: string;
  dataNascimento: string;
  estadoCivil: string;
  nacionalidade: string;
  naturalidade: string;
  cpf: string;
  rg: string;
  rne: string;
  orgaoEmissor: string;
  dataEmissao: string;
  // Dados do Cônjuge
  nomeConjuge?: string;
  cpfConjuge?: string;
  dataNascimentoConjuge?: string;
  rendaMensalConjuge?: string;
  profissaoConjuge?: string;
  empresaConjuge?: string;
  // Endereço e Contato
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  celular: string;
  email: string;
  // Dados Profissionais
  profissao: string;
  empresa: string;
  cargo: string;
  rendaMensal: string;
  tempoServico: string;
  // Dados do Financiamento
  precoImovel: string;
  valorFinanciamento: string;
  prazoFinanciamento: string;
  usarFGTS: string;
  incluirITBI: string;
  bancosPreferencia: string;
}
