# Rattenna Tecnologia — arquivos para GitHub Pages

Este pacote contém o site completo e os arquivos de mídia usados pela página

## Arquivos incluídos

- `index.html` — conteúdo e estrutura da página
- `styles.css` — aparência e layout responsivo
- `app.js` — menu, animações e vídeo acionado pela visibilidade da seção final
- `rattenna-logo.svg` — logo principal
- `favicon.svg` — ícone próprio da marca para a aba do navegador
- `favicon-32x32.png` — ícone PNG para navegadores que não usam SVG
- `favicon.ico` — ícone compatível com navegadores clássicos
- `apple-touch-icon.png` — ícone para atalhos em iPhone e iPad
- `.nojekyll` — indica ao GitHub Pages que publique os arquivos estáticos diretamente
- `assets/rafaela-abreu.jpg` — foto usada no site
- `assets/rafaela-trabalhando.mp4` — vídeo original com o som do teclado
- `README.md` — instruções de publicação

## Como colocar no GitHub

1. Extraia o arquivo ZIP no computador
2. Abra a pasta `Rattenna-GitHub-Pages`
3. Envie o conteúdo dessa pasta para a raiz do repositório do site, junto com o `index.html`; mantenha a pasta `assets` no mesmo nível
4. No GitHub, deixe o Pages usando a branch `main` e a pasta raiz (`/`)
5. Aguarde a publicação e abra o endereço mostrado em **Settings → Pages**

Não envie apenas o ZIP e não apague outros arquivos do repositório que queira preservar

## Sobre o vídeo e o áudio

O vídeo não começa quando a página abre. Ele tenta iniciar com o som original quando a área do vídeo, perto do rodapé, fica visível; ao sair dessa área, pausa. Não há foto de capa nem controles visíveis. Alguns navegadores bloqueiam áudio automático até uma interação; se isso acontecer, toque no próprio vídeo ou selecione-o e pressione Enter/Espaço. O clipe fornecido é vertical comum, não 360°
