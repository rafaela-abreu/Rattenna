# Plano — Rattenna Tecnologia

## Objetivo
Manter a página institucional responsiva da Rattenna Tecnologia, em português brasileiro, com foto, serviços, trajetória e contatos. A página é estática, sem login, banco de dados ou backend. Preservar o restante do site e preparar um pacote portátil para GitHub Pages.

## Conteúdo e decisões aprovadas
A página apresenta Rafaela Abreu como Engenheira e Arquiteta de Software, telefone 61 99443-1648 e e-mail rattenna@gmail.com, serviços informados e trajetória revisada gramaticalmente. A identidade visual atual usa fundo azul-royal escuro com acabamento metálico discreto, superfícies em azul-aço e tipografia branca/prata de alto contraste. Rosa e violeta permanecem apenas como assinatura pontual da marca; evitar brilho neon excessivo, órbitas decorativas e aparência de template genérico. Estrelinhas e nomes sobrepostos na foto permanecem removidos; as frases visíveis não terminam em ponto.

O vídeo original enviado pela usuária fica perto do rodapé, como clipe comum e não 360°. Preservar a faixa sonora do teclado. Configurar `autoplay loop playsinline preload="auto"`, sem silenciar, sem controles e sem foto de capa/poster, tentando iniciar com som ao entrar. A tentativa pode ser bloqueada por políticas do navegador até uma interação; não há como garantir áudio automático em todos os navegadores.

## Pacote para GitHub Pages
Preparar uma pasta portátil com `index.html`, `styles.css`, `app.js`, `rattenna-logo.svg`, `.nojekyll`, `README.md` e `assets/rafaela-abreu.jpg` + `assets/rafaela-trabalhando.mp4` com o áudio original. Usar caminhos relativos (`./styles.css`, `./app.js`, `./rattenna-logo.svg` e `./assets/...`) para funcionar na raiz ou sob o subcaminho de um repositório GitHub Pages. Não incluir servidor de Preview, metadados Manus nem documentos internos.

## Estrutura no projeto
- `index.html`: página semântica, metadata, navegação, contatos e vídeo perto do rodapé.
- `styles.css`: identidade visual e layout responsivo.
- `app.js`: menu móvel, navegação e animações suaves existentes.
- `rattenna-logo.svg`: wordmark e monograma RT.
- `assets/`: foto original da usuária e vídeo original com som.
- `server.mjs` e `manus-routes.json`: suporte à Preview Manus, não fazem parte do pacote estático para GitHub Pages.

## Publicação
Manter auto-publicação desativada e entregar o ZIP para a usuária publicar no próprio GitHub. Não fazer push para a conta/repositório GitHub da usuária nem publicar em domínio público.
