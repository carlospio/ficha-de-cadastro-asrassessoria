import { FormData } from '@/types/form';

export const formatFormDataForEmail = (data: FormData): string => {
  const sections = [
    {
      title: 'Dados Pessoais',
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
    }
  ];

  // Adiciona seção do cônjuge apenas se for casado ou união estável
  if (data.estadoCivil === 'Casado(a)' || data.estadoCivil === 'União Estável') {
    sections[0].fields.push(
      { label: 'Nome do Cônjuge', value: data.nomeConjuge ?? '' },
      { label: 'CPF do Cônjuge', value: data.cpfConjuge ?? '' },
      { label: 'Data de Nascimento do Cônjuge', value: data.dataNascimentoConjuge ?? '' }
    );
  }

  sections.push(
    {
      title: 'Endereço e Contato',
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
      title: 'Dados Profissionais',
      fields: [
        { label: 'Profissão', value: data.profissao },
        { label: 'Empresa', value: data.empresa },
        { label: 'Cargo', value: data.cargo },
        { label: 'Renda Mensal', value: data.rendaMensal },
        { label: 'Tempo de Serviço', value: data.tempoServico },
      ]
    },
    {
      title: 'Dados do Financiamento',
      fields: [
        { label: 'Preço do Imóvel', value: data.precoImovel },
        { label: 'Valor do Financiamento', value: data.valorFinanciamento },
        { label: 'Prazo do Financiamento', value: data.prazoFinanciamento },
        { label: 'Incluir ITBI', value: data.incluirITBI ? 'Sim' : 'Não' },
        { label: 'Bancos de Preferência', value: data.bancosPreferencia },
      ]
    }
  );

  let emailContent = 'FICHA DE CADASTRO - ASR ASSESSORIA\n\n';

  sections.forEach(section => {
    emailContent += `\n${section.title}\n`;
    emailContent += ''.padEnd(section.title.length, '=') + '\n\n';

    section.fields.forEach(field => {
      if (field.value) {
        emailContent += `${field.label}: ${field.value}\n`;
      }
    });

    emailContent += '\n';
  });

  return emailContent;
};
