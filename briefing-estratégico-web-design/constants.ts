
import { Question, Section } from './types';

export const SECTIONS: Section[] = [
  { id: 1, title: 'Direcionamento de Mercado' },
  { id: 2, title: 'Estrutura Atual do Negócio' },
  { id: 3, title: 'Objetivos de Faturamento' },
  { id: 4, title: 'Oferta e Monetização' },
  { id: 5, title: 'Posicionamento e Comunicação' },
  { id: 6, title: 'Funil e Vendas' },
  { id: 7, title: 'Tráfego Pago' },
  { id: 8, title: 'Equipe e Expansão' },
  { id: 9, title: 'Métricas' },
  { id: 10, title: 'Execução e Comprometimento' },
  { id: 11, title: 'Visão de Expansão' },
  { id: 12, title: 'Considerações Finais' }
];

export const QUESTIONS: Question[] = [
  // Section 1
  { id: 1, section: 1, label: 'Hoje, quais tipos de clientes você atende?', type: 'paragraph', required: true },
  { id: 2, section: 1, label: 'Quais tipos de clientes você deseja atender nos próximos 12 meses?', type: 'multiSelect', options: ['Pequenos negócios', 'Infoprodutores iniciantes', 'Infoprodutores avançados', 'Especialistas (médicos, advogados, mentores etc.)', 'E-commerces', 'Empresas médias', 'Marcas pessoais'], required: true },
  { id: 3, section: 1, label: 'Qual faixa de faturamento você deseja que seu cliente ideal tenha?', type: 'select', options: ['Até 10k/mês', '10k–30k/mês', '30k–100k/mês', 'Acima de 100k/mês'], required: true },
  { id: 4, section: 1, label: 'Você prefere trabalhar com:', type: 'select', options: ['Maior volume e ticket menor', 'Menos clientes e ticket premium'], required: true },
  { id: 5, section: 1, label: 'Se pudesse escolher apenas um público para dominar nos próximos 2 anos, qual seria? Por quê?', type: 'paragraph', required: true },
  { id: 6, section: 1, label: 'Você estaria disposta a nichar sua comunicação para dominar um mercado específico?', type: 'select', options: ['Sim', 'Não', 'Depende da estratégia'], required: true },

  // Section 2
  { id: 7, section: 2, label: 'Há quanto tempo você atua como Web Designer?', type: 'short', required: true },
  { id: 8, section: 2, label: 'Descreva detalhadamente todos os serviços que você presta hoje.', type: 'paragraph', required: true },
  { id: 9, section: 2, label: 'Quais serviços você realmente quer focar e escalar?', type: 'paragraph', required: true },
  { id: 10, section: 2, label: 'Você possui hoje:', type: 'multiSelect', options: ['Produto principal estruturado', 'Order bump', 'Upsell', 'Serviço recorrente', 'Oferta de entrada', 'Nenhuma estrutura definida'], required: true },
  { id: 11, section: 2, label: 'Explique como sua oferta está estruturada atualmente.', type: 'paragraph', required: true },
  { id: 12, section: 2, label: 'Seu modelo atual de vendas funciona como?', type: 'paragraph', required: true },
  { id: 13, section: 2, label: 'Maior faturamento mensal já alcançado:', type: 'short', required: true },
  { id: 14, section: 2, label: 'Menor faturamento nos últimos 6 meses:', type: 'short', required: true },
  { id: 15, section: 2, label: 'Você depende exclusivamente desse negócio?', type: 'select', options: ['Sim', 'Não', 'Parcialmente'], required: true },

  // Section 3
  { id: 16, section: 3, label: 'Quanto você deseja faturar em 60 dias?', type: 'short', required: true },
  { id: 17, section: 3, label: 'Em 90 dias?', type: 'short', required: true },
  { id: 18, section: 3, label: 'Em 180 dias?', type: 'short', required: true },
  { id: 19, section: 3, label: 'Em 360 dias?', type: 'short', required: true },
  { id: 20, section: 3, label: 'O que precisa mudar para esses números acontecerem?', type: 'paragraph', required: true },
  { id: 21, section: 3, label: 'Você está disposta a mudar estrutura, posicionamento e oferta para alcançar isso?', type: 'select', options: ['Sim', 'Não', 'Depende do plano'], required: true },

  // Section 4
  { id: 22, section: 4, label: 'Descreva sua oferta principal hoje.', type: 'paragraph', required: true },
  { id: 23, section: 4, label: 'Ticket mínimo já vendido:', type: 'short', required: true },
  { id: 24, section: 4, label: 'Ticket máximo já vendido:', type: 'short', required: true },
  { id: 25, section: 4, label: 'Ticket que você gostaria de vender:', type: 'short', required: true },
  { id: 26, section: 4, label: 'Sua oferta possui:', type: 'multiSelect', options: ['Garantia', 'Escassez', 'Bônus', 'Condição especial', 'Nenhum desses'], required: true },
  { id: 27, section: 4, label: 'Principal objeção que você recebe:', type: 'paragraph', required: true },
  { id: 28, section: 4, label: 'Sua taxa média de conversão hoje:', type: 'short', required: true },
  { id: 29, section: 4, label: 'Como seria sua oferta ideal estruturada?', type: 'paragraph', required: true },
  { id: 30, section: 4, label: 'Faça seu pitch de venda em 30 segundos:', type: 'paragraph', required: true },

  // Section 5
  { id: 31, section: 5, label: 'Como você gostaria de se posicionar no Instagram?', type: 'paragraph', required: true },
  { id: 32, section: 5, label: 'Você quer ser vista como:', type: 'select', options: ['Especialista premium', 'Autoridade técnica', 'Estrategista', 'Prestadora acessível', 'Outro'], required: true },
  { id: 33, section: 5, label: 'Qual transformação clara você promete após seu serviço?', type: 'paragraph', required: true },
  { id: 34, section: 5, label: 'Como você gostaria que o público enxergasse seu trabalho?', type: 'paragraph', required: true },
  { id: 35, section: 5, label: 'Quantos stories você consegue postar por dia?', type: 'short', required: true },
  { id: 36, section: 5, label: 'Quantos reels por semana?', type: 'short', required: true },
  { id: 37, section: 5, label: 'Você está disposta a postar 2 reels por dia se for estratégico?', type: 'select', options: ['Sim', 'Não', 'Preciso me adaptar'], required: true },
  { id: 38, section: 5, label: 'Quais são seus diferenciais reais?', type: 'paragraph', required: true },
  { id: 39, section: 5, label: 'Cite 3 concorrentes diretas:', type: 'paragraph', required: true },

  // Section 6
  { id: 40, section: 6, label: 'Como os leads chegam até você hoje?', type: 'paragraph', required: true },
  { id: 41, section: 6, label: 'Como você gostaria que seu funil ideal funcionasse?', type: 'paragraph', required: true },
  { id: 42, section: 6, label: 'Você prefere vender por:', type: 'select', options: ['WhatsApp', 'Formulário + reunião', 'Direct', 'Outro'], required: true },
  { id: 43, section: 6, label: 'Existe script estruturado de vendas?', type: 'select', options: ['Sim', 'Não'], required: true },
  { id: 44, section: 6, label: 'Quem faz o fechamento hoje?', type: 'short', required: true },
  { id: 45, section: 6, label: 'Quantos leads por dia você gostaria de receber?', type: 'short', required: true },
  { id: 46, section: 6, label: 'Quantos fechamentos por semana seriam ideais?', type: 'short', required: true },
  { id: 47, section: 6, label: 'Você possui CRM ou pipeline estruturado?', type: 'select', options: ['Sim', 'Não'], required: true },

  // Section 7
  { id: 48, section: 7, label: 'Você roda tráfego pago hoje?', type: 'select', options: ['Sim', 'Não'], required: true },
  { id: 49, section: 7, label: 'Quanto investe mensalmente?', type: 'short', required: true },
  { id: 50, section: 7, label: 'Quanto estaria disposta a investir com estrutura organizada?', type: 'short', required: true },
  { id: 51, section: 7, label: 'Você gostaria de:', type: 'select', options: ['Ter gestor', 'Aprender', 'Ter alguém interno'], required: true },
  { id: 52, section: 7, label: 'Qual ROAS seria satisfatório para você?', type: 'short', required: true },

  // Section 8
  { id: 53, section: 8, label: 'Você possui equipe hoje? Quantas pessoas?', type: 'paragraph', required: true },
  { id: 54, section: 8, label: 'Quantos colaboradores você gostaria de ter imediatamente?', type: 'short', required: true },
  { id: 55, section: 8, label: 'Quais funções você gostaria de estruturar?', type: 'multiSelect', options: ['Designer auxiliar', 'Social media', 'Social seller', 'Closer', 'Gestor de tráfego', 'Atendimento', 'Suporte'], required: true },
  { id: 56, section: 8, label: 'Você se sente sobrecarregada hoje?', type: 'select', options: ['Sim', 'Não', 'Às vezes'], required: true },

  // Section 9
  { id: 57, section: 9, label: 'Você acompanha métricas semanalmente?', type: 'select', options: ['Sim', 'Não', 'Apenas parcialmente'], required: true },
  { id: 58, section: 9, label: 'Você sabe exatamente sua taxa de conversão hoje?', type: 'select', options: ['Sim', 'Não'], required: true },
  { id: 59, section: 9, label: 'Você sabe qual é o seu CAC (Custo de Aquisição por Cliente)?', type: 'select', options: ['Sim', 'Não'], required: true },
  { id: 60, section: 9, label: 'Você sabe qual é seu lucro líquido real mensal?', type: 'select', options: ['Sim', 'Não'], required: true },
  { id: 61, section: 9, label: 'Quais métricas você acompanha atualmente?', type: 'paragraph', required: true },
  { id: 62, section: 9, label: 'Você gostaria de ter um painel estratégico com controle de métricas claras?', type: 'select', options: ['Sim', 'Não', 'Nunca pensei nisso'], required: true },

  // Section 10
  { id: 63, section: 10, label: 'Você executa decisões estratégicas com rapidez ou tende a adiar?', type: 'paragraph', required: true },
  { id: 64, section: 10, label: 'Se for necessário mudar sua rotina atual para escalar seu negócio, você está disposta?', type: 'select', options: ['Sim', 'Não', 'Depende do impacto'], required: true },
  { id: 65, section: 10, label: 'Você está disposta a sair da zona de conforto para atingir os resultados que declarou?', type: 'select', options: ['Sim', 'Não', 'Preciso me preparar'], required: true },
  { id: 66, section: 10, label: 'Em uma escala de 0 a 10, qual é seu nível real de comprometimento?', type: 'short', required: true },
  { id: 67, section: 10, label: 'Se o plano exigir mais exposição, posicionamento forte e constância de conteúdo, você executa?', type: 'select', options: ['Sim', 'Não', 'Com orientação'], required: true },

  // Section 11
  { id: 68, section: 11, label: 'Se tudo der certo nos próximos 12 meses, como sua operação estará estruturada?', type: 'paragraph', required: true },
  { id: 69, section: 11, label: 'Como você imagina seu dia ideal de trabalho?', type: 'paragraph', required: true },
  { id: 70, section: 11, label: 'Quantos clientes ativos você gostaria de ter daqui a 1 ano?', type: 'short', required: true },
  { id: 71, section: 11, label: 'Qual ticket médio você gostaria que fosse padrão no seu negócio?', type: 'short', required: true },
  { id: 72, section: 11, label: 'Você deseja construir uma estrutura que funcione sem depender exclusivamente de você?', type: 'select', options: ['Sim', 'Não', 'Ainda não pensei nisso'], required: true },

  // Section 12
  { id: 73, section: 12, label: 'Existe alguma informação estratégica relevante que não foi perguntada?', type: 'paragraph', required: true },
  { id: 74, section: 12, label: 'Existe algum medo ou insegurança que você acredita que pode impactar sua execução?', type: 'paragraph', required: true }
];
