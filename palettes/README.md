# Palettes

Site de página única que gera paletas de cores a partir de obras de arte.
Tudo roda no navegador, sem back-end e sem dependências. É só abrir o
`index.html` ou subir o arquivo em qualquer hospedagem estática.

## O que tem dentro

- 2.243 paletas, todas de obras reais, com no mínimo 2 e no máximo 6 cores.
- Botão de gerar nova paleta e botão de voltar, com histórico da sessão.
- Clique numa cor para copiar o hex.
- Tema claro e escuro (o círculo no canto). Segue o sistema na primeira visita.
- Seis idiomas (o triângulo no canto): inglês, português, espanhol, francês,
  japonês e chinês. A escolha fica salva.
- Teclado: espaço ou seta direita gera, seta esquerda volta, Esc fecha o menu.

## De onde vêm as cores

**2.200 paletas extraídas** das imagens de acervo aberto (CC0) do Art Institute
of Chicago e do Cleveland Museum of Art. A extração foi feita em OKLab sobre a
imagem de cada obra. Os dados vêm de https://github.com/meodai/art-colors (CC0).
Filtrei por variedade de cor e limitei a 3 obras por artista, o que deu 1.445
artistas diferentes.

**43 paletas aproximadas** de Mark Rothko e Gerhard Richter. As obras são reais,
mas a cor não foi extraída da imagem, porque os dois ainda têm direitos autorais
e nenhum museu libera essas imagens em acervo aberto. Em boa parte delas a cor
sai do próprio título registrado pelo museu, como em "Abstract Composition in
Brown, Green, Blue, Black, and Orange". O aviso na tela diz "Cores aproximadas"
nesses casos. Fontes: National Gallery of Art (dados CC0) e Tate.

## Estrutura do código

Está tudo em `index.html`. As partes principais, na ordem:

- `REAL` e `APPROX`: os dados das obras. Cores guardadas como hex concatenado,
  6 caracteres por cor, para o arquivo não inchar.
- `I18N`: textos de cada idioma. Para acrescentar um idioma, basta uma entrada
  nova nesse objeto; o menu se monta sozinho a partir das chaves.
- `caption()`: monta o aviso da obra no idioma corrente.
- `render()`: os 6 blocos existem desde o início e só mudam de cor e largura,
  o que deixa a troca de paleta contínua, sem a tela piscar.

## Para ir além

Os dados estão embutidos no HTML (uns 230 KB). Se quiser muito mais paletas,
vale trocar isso por uma chamada à API do museu no próprio navegador, extraindo
a cor via canvas na hora. Aí o acervo deixa de ser fixo.

## Créditos

Dados das obras: Art Institute of Chicago, Cleveland Museum of Art, National
Gallery of Art e Tate. Paletas extraídas: meodai/art-colors, CC0.
Nomes de obras, artistas e museus aparecem sempre no idioma original.
