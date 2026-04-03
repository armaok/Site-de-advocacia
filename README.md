# Teixeira & Okamura Advocacia — Site

Site institucional desenvolvido em Astro, publicado no Netlify.

---

## Como publicar um novo post no blog

1. Vá até a pasta `src/pages/blog/`
2. Clique em **"Add file"** → **"Create new file"**
3. Dê um nome como `nome-do-artigo.astro`
4. Copie o conteúdo do arquivo `plano-negou-aba-o-que-fazer.astro` e cole no novo arquivo
5. Edite o título, categoria, data, autor e o conteúdo do artigo
6. Adicione o novo post na lista dentro de `src/pages/blog/index.astro`
7. Clique em **"Commit changes"**
8. O Netlify publica automaticamente em 1-2 minutos

---

## Como editar os textos das páginas

- **Página inicial:** `src/pages/index.astro`
- **Sobre:** `src/pages/sobre.astro`
- **Atuação:** `src/pages/atuacao.astro`
- **Contato:** `src/pages/contato.astro`
- **Blog:** `src/pages/blog/index.astro`

Edite pelo GitHub clicando no arquivo → ícone de lápis → **"Commit changes"**.

---

## Informações do projeto

- **Framework:** Astro 4
- **Deploy:** Netlify (automático a cada commit)
- **Comando de build:** `npm run build`
- **Pasta de saída:** `dist/`

---

## Contato técnico

Para dúvidas sobre o código e estrutura do site, este projeto foi
desenvolvido em colaboração com Claude (Anthropic).
