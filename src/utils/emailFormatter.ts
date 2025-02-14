import { FormData } from '@/types/form';

export const formatFormDataForEmail = (data: FormData): string => {
  const sections = [
    {
      title: 'DADOS PESSOAIS',
      fields: [
        { label: 'Nome Completo', value: data.nome },
        { label: 'Data de Nascimento', value: data.dataNascimento },
        { label: 'Estado Civil', value: data.estadoCivil },
        { label: 'Nacionalidade', value: data.nacionalidade },
        { label: 'Naturalidade', value: data.naturalidade },
        { label: 'CPF', value: data.cpf },
        { label: 'RG', value: data.rg },
        { label: 'Órgão Emissor', value: data.orgaoEmissor },
        { label: 'Data de Emissão', value: data.dataEmissao },
      ]
    },
    {
      title: 'ENDEREÇO E CONTATO',
      fields: [
        { label: 'Endereço', value: data.endereco },
        { label: 'Número', value: data.numero },
        { label: 'Complemento', value: data.complemento },
        { label: 'Bairro', value: data.bairro },
        { label: 'Cidade', value: data.cidade },
        { label: 'Estado', value: data.estado },
        { label: 'CEP', value: data.cep },
        { label: 'Telefone', value: data.telefone },
        { label: 'Celular', value: data.celular },
        { label: 'E-mail', value: data.email },
      ]
    },
    {
      title: 'DADOS PROFISSIONAIS',
      fields: [
        { label: 'Profissão', value: data.profissao },
        { label: 'Empresa', value: data.empresa },
        { label: 'Cargo', value: data.cargo },
        { label: 'Renda Mensal', value: data.rendaMensal },
        { label: 'Tempo de Serviço', value: data.tempoServico },
      ]
    },
    {
      title: 'DADOS DO CÔNJUGE',
      fields: [
        { label: 'Nome do Cônjuge', value: data.nomeConjuge },
        { label: 'CPF do Cônjuge', value: data.cpfConjuge },
        { label: 'Profissão do Cônjuge', value: data.profissaoConjuge },
        { label: 'Renda Mensal do Cônjuge', value: data.rendaMensalConjuge },
      ]
    },
    {
      title: 'DADOS DO FINANCIAMENTO',
      fields: [
        { label: 'Preço estimado do imóvel', value: data.precoImovel },
        { label: 'Valor pretendido para financiamento', value: data.valorFinanciamento },
        { label: 'Prazo do financiamento', value: data.prazoFinanciamento },
        { label: 'Incluir ITBI', value: data.incluirITBI ? 'Sim' : 'Não' },
        { label: 'Bancos de preferência', value: data.bancosPreferencia },
      ]
    }
  ];

  let emailBody = 'FICHA DE CADASTRO - ASR ASSESSORIA\n\n';

  sections.forEach(section => {
    emailBody += `${section.title}\n`;
    emailBody += ''.padEnd(50, '-') + '\n';
    
    section.fields.forEach(field => {
      if (field.value) {
        emailBody += `${field.label}: ${field.value}\n`;
      }
    });
    
    emailBody += '\n';
  });

  return emailBody;
};
