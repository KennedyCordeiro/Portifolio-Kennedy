# Meu Portfólio

Este é um portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- ESLint
- Prettier

## Estrutura do Projeto

```
src/
  ├── app/              # Páginas da aplicação
  ├── components/       # Componentes reutilizáveis
  ├── styles/          # Estilos globais
  ├── types/           # Definições de tipos TypeScript
  ├── utils/           # Funções utilitárias
  └── assets/          # Imagens e outros recursos
```

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/meu-portfolio.git
```

2. Instale as dependências:

```bash
cd meu-portfolio
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código com Prettier

## Personalização

Para personalizar o portfólio:

1. Atualize as informações em `src/app/page.tsx`
2. Adicione seus projetos em `src/data/projects.ts`
3. Adicione suas habilidades em `src/data/skills.ts`
4. Personalize os estilos em `src/styles/globals.css`

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
