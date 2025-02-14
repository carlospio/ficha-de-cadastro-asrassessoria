import { FormStep } from '@/types/form';

export const formSteps: FormStep[] = [
  {
    title: 'Dados Pessoais',
    fields: [
      { name: 'nome', label: 'Nome Completo', type: 'text', required: true },
      { name: 'dataNascimento', label: 'Data de Nascimento', type: 'date', required: true, mask: '99/99/9999' },
      { name: 'estadoCivil', label: 'Estado Civil', type: 'select', required: true, options: [
        'Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'
      ]},
      { name: 'nacionalidade', label: 'Nacionalidade', type: 'text', required: true },
      { name: 'naturalidade', label: 'Naturalidade', type: 'text', required: false },
      { name: 'cpf', label: 'CPF', type: 'text', required: true, mask: '999.999.999-99' },
      { name: 'rg', label: 'RG', type: 'text', required: true },
      { name: 'orgaoEmissor', label: 'Órgão Emissor', type: 'text', required: false },
      { name: 'dataEmissao', label: 'Data de Emissão', type: 'date', required: false, mask: '99/99/9999' },
      // Campos do cônjuge (serão mostrados condicionalmente)
      { name: 'nomeConjuge', label: 'Nome do Cônjuge', type: 'text', required: true, showWhen: 'conjugeFields' },
      { name: 'cpfConjuge', label: 'CPF do Cônjuge', type: 'text', required: true, mask: '999.999.999-99', showWhen: 'conjugeFields' },
      { name: 'dataNascimentoConjuge', label: 'Data de Nascimento do Cônjuge', type: 'date', required: true, mask: '99/99/9999', showWhen: 'conjugeFields' },
    ]
  },
  {
    title: 'Endereço e Contato',
    fields: [
      { name: 'endereco', label: 'Endereço', type: 'text', required: true },
      { name: 'numero', label: 'Número', type: 'text', required: true },
      { name: 'complemento', label: 'Complemento', type: 'text', required: false },
      { name: 'bairro', label: 'Bairro', type: 'text', required: false },
      { name: 'cidade', label: 'Cidade', type: 'text', required: false },
      { name: 'estado', label: 'Estado', type: 'text', required: false },
      { name: 'cep', label: 'CEP', type: 'text', required: false, mask: '99999-999' },
      { name: 'telefone', label: 'Telefone', type: 'tel', required: false, mask: '(99) 9999-9999' },
      { name: 'celular', label: 'Celular', type: 'tel', required: true, mask: '(99) 99999-9999' },
      { name: 'email', label: 'E-mail', type: 'email', required: true },
    ]
  },
  {
    title: 'Dados Profissionais',
    fields: [
      { name: 'profissao', label: 'Profissão', type: 'text', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', required: true },
      { name: 'cargo', label: 'Cargo', type: 'text', required: false },
      { name: 'rendaMensal', label: 'Renda Mensal', type: 'text', required: true },
      { name: 'tempoServico', label: 'Tempo de Serviço', type: 'text', required: false },
    ]
  },
  {
    title: 'Dados do Financiamento',
    fields: [
      { name: 'precoImovel', label: 'Preço do Imóvel', type: 'text', required: true },
      { name: 'valorFinanciamento', label: 'Valor do Financiamento', type: 'text', required: true },
      { name: 'prazoFinanciamento', label: 'Prazo do Financiamento', type: 'text', required: true },
      { name: 'incluirITBI', label: 'Incluir ITBI', type: 'select', required: true, options: ['Sim', 'Não'] },
      { name: 'bancosPreferencia', label: 'Bancos de Preferência', type: 'text', required: false },
    ]
  }
];
