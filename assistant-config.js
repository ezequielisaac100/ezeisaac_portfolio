// Base de conhecimento editável. Valores de exemplo NÃO são apresentados como preços finais.
// Este assistente funciona sem servidor, por correspondência de intenções.
// Para IA generativa real, ligar um backend seguro; nunca inserir chaves de API neste ficheiro.
window.ASSISTANT_CONFIG = {
 nome:'Ezequiel Isaac', whatsapp:'244932612766', email:'ezeisaac027@gmail.com', local:'Luanda, Angola', experiencia:'desde 2023',
 mensagemInicial:'Olá! Sou o assistente do Ezequiel Isaac. Posso apresentar os serviços, ajudar com preços e prazos ou preparar um pedido de orçamento. O que precisas?',
 servicos:[
  {id:'social',nome:'Social media',descricao:'Artes para redes sociais, campanhas e carrosséis.',preco:null,prazo:null,termos:['social','instagram','facebook','post','publicação','publicacoes','carrossel','conteúdo','redes sociais']},
  {id:'branding',nome:'Identidade visual',descricao:'Logótipos, identidade visual e aplicações da marca.',preco:null,prazo:null,termos:['logotipo','logótipo','logo','branding','marca','identidade visual']},
  {id:'campanhas',nome:'Flyers e campanhas',descricao:'Flyers, cartazes, banners e peças promocionais.',preco:null,prazo:null,termos:['flyer','cartaz','banner','campanha','evento','publicidade']},
  {id:'corporativo',nome:'Design corporativo',descricao:'Materiais institucionais e artes para impressão.',preco:null,prazo:null,termos:['corporativo','institucional','impressão','cartão de visita','brochura','desdobrável']}
 ],
 perguntas:[
  {termos:['portfolio','portfólio','trabalhos','projectos','projetos'],resposta:'Podes ver os trabalhos na secção Projectos. Estão organizados por cliente e por tipo de serviço, com as artes disponíveis em carrossel.'},
  {termos:['onde','localização','localizacao','cidade'],resposta:'O Ezequiel trabalha a partir de Luanda, Angola, e pode conversar sobre projectos à distância.'},
  {termos:['pagamento','pagar','sinal'],resposta:'As condições de pagamento são definidas na proposta comercial. Posso encaminhar o teu pedido para confirmação.'},
  {termos:['revisão','revisoes','alterações','alteracoes'],resposta:'O número de revisões depende do serviço contratado. Esse ponto fica definido antes do início do projecto.'}
 ]
};
