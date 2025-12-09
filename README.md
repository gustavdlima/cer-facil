# CER Fácil

CERS e Oficina Ortopédica

## Tecnologias

- **[Bun](https://bun.com)** - Runtime JavaScript ultrarrápido
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI acessíveis e customizáveis

## Pré-requisitos

Certifique-se de ter o **Bun** instalado em sua máquina:

```bash
# Verificar se o Bun está instalado
bun --version

# Se não tiver instalado, instale com:
curl -fsSL https://bun.sh/install | bash
```

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd cer-facil
```

2. Instale as dependências:

```bash
bun install
```

## Executando o Projeto

Inicia o servidor de desenvolvimento com Hot Module Reload (HMR):

```bash
bun dev
```

O servidor estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
cer-facil/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   └── ui/           # Componentes shadcn/ui
│   ├── pages/            # Páginas da aplicação
│   │   └── home/         # Página Home
│   ├── lib/              # Utilitários e helpers
│   ├── App.tsx           # Componente raiz
│   ├── frontend.tsx      # Entry point React
│   ├── index.ts          # Servidor Bun
│   └── index.html        # Template HTML
├── styles/               # Estilos globais
└── package.json          # Dependências e scripts
```
