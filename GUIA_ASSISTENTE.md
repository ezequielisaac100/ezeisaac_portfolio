# Assistente do portfólio — V5

## O que já faz
- Responde a mensagens livres por palavras-chave e intenções (sem ligação a API).
- Apresenta serviços, prazos e preços *apenas quando configurados*.
- Recolhe nome e descrição de pedido e abre WhatsApp com texto preparado.
- Responde a perguntas frequentes editáveis e reconhece variações simples de escrita.

## Onde editar
`assistant-config.js`: altera `servicos`, `preco`, `prazo`, `termos` e `perguntas`.
`assistant.js`: lógica do chat e envio para WhatsApp.
`index.html`: textos do site.

## Limites
Este chat é uma demonstração funcional baseada em regras, não uma IA generativa. Não compreende qualquer pergunta, não aprende sozinho e não fecha contratos automaticamente. Para IA conversacional real é necessário um servidor/backend, uma base de conhecimento e uma chave API mantida exclusivamente no servidor. Não coloques chaves API no JavaScript público.

## Testes
Abre `index.html` no navegador. Experimenta: «Quanto custa um logótipo?», «Fazem posts para Instagram?», «Onde trabalhas?», «Quero um orçamento», «WhatsApp». Confirma o número antes de publicar.
