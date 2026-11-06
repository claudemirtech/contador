<div align="center">

# ⏱️ Contador Simples

**Uma aplicação web rápida, moderna e intuitiva para contagem de tarefas, repetições e eventos.**

Desenvolvido por [AtomicWeb](https://atomicweb.com.br/)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-24292e?logo=github)](https://atomicweb.com.br/contador/)

[🌐 Acessar Aplicação Online](https://atomicweb.com.br/contador/)

</div>

---

## 📌 Sobre o Projeto

O **Contador Simples** é uma ferramenta web minimalista, ágil e responsiva criada para facilitar o controle de contagens em diversas situações do dia a dia — como contagem de estoque, repetições de exercícios físicos, rodadas de jogos, controle de fluxo de pessoas ou conferência de processos.

Projetado com foco em usabilidade imediata, o contador suporta tanto toques/cliques na tela quanto **atalhos de teclado**, permitindo contagens ultrarrápidas sem tirar as mãos do teclado.

---

## ✨ Funcionalidades

- **Contagem Rápida e Intuitiva**: Botão de contagem de alto contraste com feedback visual.
- **Passo Personalizável**: Alterne facilmente entre incrementos de **+1**, **+5**, **+10**, **+50** ou **+100**.
- **Operação de Subtração**: Botão e atalho dedicados para decrementar o valor atual com base no passo selecionado.
- **Zerar Instantâneo**: Reinicie a contagem a zero a qualquer momento com confirmação visual.
- **Suporte a Atalhos de Teclado**: Opere todas as ações essenciais diretamente pelo teclado.
- **Design Totalmente Responsivo**: Otimizado para smartphones, tablets e monitores desktop.

---

## ⌨️ Atalhos de Teclado

Para máxima produtividade, você pode utilizar os seguintes atalhos no teclado:

| Ação | Teclas | Descrição |
| :--- | :---: | :--- |
| **Contar / Incrementar** | <kbd>Espaço</kbd> ou <kbd>↑</kbd> | Adiciona o valor do passo selecionado ao contador |
| **Subtrair / Decrementar** | <kbd>↓</kbd> | Subtrai o valor do passo selecionado do contador |
| **Zerar** | <kbd>R</kbd> ou <kbd>Delete</kbd> | Redefine o valor do contador para `0` |

> [!NOTE]
> Os atalhos são desativados automaticamente caso o foco esteja em algum campo de digitação (`input`, `textarea`, etc.).

---

## 🚀 Tecnologias

Este projeto foi construído utilizando ferramentas e padrões modernos de desenvolvimento web:

- **[React 19](https://react.dev/)**: Biblioteca componentizada para interfaces dinâmicas e reativas.
- **[Vite 7](https://vite.dev/)**: Ferramenta de build e servidor de desenvolvimento com Hot Module Replacement (HMR).
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework utilitário para estilização responsiva e ágil.
- **[ESLint 9](https://eslint.org/)**: Padronização e garantia de qualidade de código.
- **[GitHub Pages](https://pages.github.com/) & [GitHub Actions](https://github.com/features/actions)**: Pipeline de CI/CD para deploy estático automatizado.

---

## 💻 Começando / Como Executar

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
- Gerenciador de pacotes `npm` (incluso no Node.js)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/claudemirtech/contador.git
   cd contador
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra a URL exibida no terminal (geralmente [http://localhost:5173/contador/](http://localhost:5173/contador/)).

---

## 📦 Scripts Disponíveis

No diretório do projeto, você pode executar:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com Hot Reload |
| `npm run build` | Compila e otimiza a aplicação para produção na pasta `dist/` |
| `npm run preview` | Executa localmente uma prévia da versão de produção gerada |
| `npm run lint` | Executa o ESLint para verificar a qualidade e erros de código |
| `npm run deploy` | Executa o build e publica o resultado no GitHub Pages via `gh-pages` |

---

## 📁 Estrutura de Diretórios

```plaintext
contador/
├── .github/
│   └── workflows/
│       └── static.yml     # Workflow de CI/CD para deploy no GitHub Pages
├── public/                # Arquivos estáticos (favicons, imagens, manifest)
│   └── img/
├── src/
│   ├── assets/            # Imagens e logotipos (SVG, etc.)
│   ├── App.jsx            # Componente principal do contador e lógica de atalhos
│   ├── App.css            # Estilos específicos do componente
│   ├── index.css          # Estilos globais
│   └── main.jsx           # Ponto de entrada da aplicação React
├── index.html             # Documento HTML base e metadados Open Graph
├── package.json           # Dependências e scripts do projeto
├── vite.config.js         # Configurações do Vite
└── README.md              # Documentação do projeto
```

---

## 🚀 Deploy

O projeto conta com fluxo automatizado via **GitHub Actions** configurado em [`.github/workflows/static.yml`](.github/workflows/static.yml):
- A cada `push` na branch `main`, a esteira instala dependências, gera o build estático e publica automaticamente no GitHub Pages.
- O deploy manual também pode ser acionado via script `npm run deploy`.

---

## 📄 Licença

Este projeto está sob a licença **MIT** - consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---

<div align="center">

Desenvolvido por [Claudemir](https://github.com/claudemirtech) / [AtomicWeb](https://atomicweb.com.br/)

</div>
