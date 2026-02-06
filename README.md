# CER Fácil

Esse projeto surgiu da necessidade de fornecer às pessoas com deficiência informações claras e com linguagem acessível sobre como acessar os serviços dos Centros Especializados em Reabilitação (CERs) e Oficinas Ortopédicas (OPMs) da Paraíba. O principal objetivo é fazer com que as pessoas que necessitam dos serviços tenham à sua disposição um site onde poderão consultar como fazer o primeiro acesso no seu CER de referência.

## Tecnologias (Stack)

- **[Bun](https://bun.com)** - Runtime JavaScript ultrarrápido
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI acessíveis e customizáveis
- **Leaflet & React Leaflet** - Mapas interativos

## Funcionalidades

- **Busca Personalizada**: Um formulário interativo no início da página ajuda o usuário a encontrar o CER ideal para sua necessidade.
- **Mapa Interativo**: Visualização geográfica de todos os CERs e OPMs da Paraíba.
- **Listagem Completa**: Cards informativos com detalhes de contato, endereço e especialidades de cada unidade.
- **Informações da Rede**: Conteúdo educativo sobre a Rede de Cuidado à Pessoa com Deficiência.

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

Inicie o servidor de desenvolvimento com Hot Module Reload (HMR):

```bash
bun dev
```

O servidor estará disponível em `http://localhost:3000`

## Troubleshooting / Erros Conhecidos

### ❌ Falha ao Carregar o Plugin Tailwind

Se você encontrar um erro indicando que o Bun não consegue localizar o plugin do Tailwind CSS (`bun-plugin-tailwind`), siga os passos abaixo:

**Erro:**
```
error: Failed to load plugins for Bun.Server:
error: Cannot find package 'bun-plugin-tailwind' from 'home/user/cer-facil'
```

**Solução:**

1. Garanta a instalação correta do plugin:

```bash
bun install bun-plugin-tailwind
```

2. Se houver problemas com a porta 3000 ocupada:

```bash
# 1. Identifique qual processo está usando a porta
sudo lsof -i :3000

# 2. Encerre o processo (se necessário)
sudo fuser -k 3000/tcp
```

3. Tente executar novamente:

```bash
bun dev
```

## Colaboradores(as) do Projeto

### Tutores

**Geraldo Eduardo Guedes de Brito**
**Robson da Fonseca Neves**

### Preceptores(as) e Orientadores(a) de Serviço

**Gustavo Alves de Lima Martiins**
**Hélio Soares da Silva**
**Mércia de Lourdes Ferreira**
**Weber Almeida Cavalcanti**

### Monitores(as)

**Ana Claudia de Araújo Coutinho**
**Ana Rita de Oliveira Figueira**
**Artie Luiz Gomes da Silva**
**Beatriz Vitorio Melo Silva**
**Darlan Berg Marcos da Silva**
**Davi Berg Marcos da Silva**
**Gustavo Henrique Verçosa Dias**
**João Bosco Duarte Filho**
**Maria Amanda Santos da Silva**
**Stephanie Patriota dos Santos**
