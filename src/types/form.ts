export interface FormData {
  // Dados Pessoais
  nome: string;
  dataNascimento: string;
  estadoCivil: string;
  nacionalidade: string;
  naturalidade: string;
  cpf: string;
  rg: string;
  orgaoEmissor: string;
  dataEmissao: string;
  endereco: string;
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

  // Dados do Cônjuge (se casado)
  nomeConjuge?: string;
  cpfConjuge?: string;
  profissaoConjuge?: string;
  rendaMensalConjuge?: string;

  // Referências
  referenciaNome1: string;
  referenciaTelefone1: string;
  referenciaNome2: string;
  referenciaTelefone2: string;

  // Dados Bancários
  banco: string;
  agencia: string;
  conta: string;
  tipoConta: string;
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
