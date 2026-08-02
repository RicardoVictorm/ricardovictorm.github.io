# Ricardo Victor Machado de Almeida — Portfólio pessoal

Site pessoal e portfólio profissional bilíngue hospedado no GitHub Pages.

## Conteúdo

- Home profissional responsiva em português e inglês
- Seletor de idioma `PT | EN` integrado ao cabeçalho
- Trajetória profissional e acadêmica
- Projetos selecionados
- Produção científica e propriedade intelectual
- Competências técnicas
- Currículo em português e résumé em inglês, preparados para impressão/PDF
- SEO bilíngue com `hreflang`, Open Graph, JSON-LD, sitemap e robots.txt
- Tema claro/escuro com preferência preservada entre os idiomas
- Navegação mobile e recursos básicos de acessibilidade

## Tecnologias

HTML5, CSS3 e JavaScript puro. Não há dependências, processo de build ou servidor externo.

## Publicação

O repositório tem o nome especial `ricardovictorm.github.io`, portanto a branch `main` pode ser publicada diretamente pelo GitHub Pages.

Em **Settings → Pages**, use:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

Endereços principais:

- Português: https://ricardovictorm.github.io/
- English: https://ricardovictorm.github.io/en.html

## Estrutura

```text
.
├── index.html
├── en.html
├── curriculo.html
├── resume.html
├── 404.html
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── assets
    ├── css
    │   ├── styles.css
    │   └── language.css
    ├── js/main.js
    └── img/favicon.svg
```

## Atualização

Os textos em português estão em `index.html` e `curriculo.html`. Os textos em inglês estão em `en.html` e `resume.html`. A identidade visual está centralizada em `assets/css/styles.css`, enquanto o seletor de idioma usa `assets/css/language.css`.
