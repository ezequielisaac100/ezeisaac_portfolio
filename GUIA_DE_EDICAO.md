# Ezequiel Isaac — website v3

## Como abrir
Abra `index.html` no navegador ou utilize Live Server no VS Code.

## Alterar projectos
Edite `projects.js` (a lista `window.PORTFOLIO_PROJECTS`). Cada entrada é um projecto independente. Campos: `title`, `category` (`social`, `branding`, `campaign`, `corporate`), `images` (nomes dos ficheiros em `assets/`), `desc` e `kind`.

Para adicionar um novo projecto, duplique um objecto da lista e substitua os dados e as imagens. O primeiro ecrã do carrossel reúne até quatro imagens; as seguintes mostram cada arte separadamente.

## Trocar imagens
Guarde imagens JPG/PNG/WebP em `assets/` e altere os nomes em `projects.js`. Prefira artes originais de alta resolução. Os recortes actuais provêm do PDF fornecido e não substituem os originais.

## Estilo
`refinement.css` reúne os ajustes de apresentação desta versão. `style.css` mantém a base. Para alterar cores, tipografia, arredondamento e espaçamentos, comece por `refinement.css`.

## Funcionalidades
Tema claro/escuro, menu mobile, filtros, carrossel horizontal com toque/rato/teclado, indicador de progresso, visita automática interrompível, links de contacto.

## Publicação
Pode publicar a pasta num alojamento estático. Antes, confirme textos, identificação dos projectos, imagens, direitos de utilização e contactos.
