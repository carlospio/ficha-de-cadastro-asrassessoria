import { FormData } from '@/types/form';

export const sampleData: FormData = {
  // Dados Pessoais
  nome: 'João da Silva',
  dataNascimento: '1990-05-15',
  estadoCivil: 'Casado(a)',
  nacionalidade: 'Brasileiro',
  naturalidade: 'São Paulo',
  cpf: '123.456.789-00',
  rg: '12.345.678-9',
  orgaoEmissor: 'SSP',
  dataEmissao: '2010-01-01',
  
  // Endereço
  endereco: 'Rua das Flores',
  numero: '123',
  complemento: 'Apto 45',
  bairro: 'Centro',
  cidade: 'São Paulo',
  estado: 'SP',
  cep: '01234-567',
  telefone: '(11) 3456-7890',
  celular: '(11) 98765-4321',
  email: 'joao.silva@email.com',
  
  // Dados Profissionais
  profissao: 'Engenheiro',
  empresa: 'Empresa ABC Ltda',
  cargo: 'Gerente de Projetos',
  rendaMensal: 'R$ 8.000,00',
  tempoServico: '5 anos',
  
  // Dados do Cônjuge
  nomeConjuge: 'Maria da Silva',
  cpfConjuge: '987.654.321-00',
  profissaoConjuge: 'Advogada',
  rendaMensalConjuge: 'R$ 7.000,00',
  
  // Dados do Financiamento
  precoImovel: 'R$ 500.000,00',
  valorFinanciamento: 'R$ 400.000,00',
  prazoFinanciamento: '30 anos',
  incluirITBI: true,
  bancosPreferencia: 'Caixa Econômica Federal, Banco do Brasil',
};
