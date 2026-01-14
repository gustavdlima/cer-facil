// data.js
export const CORES_REGIOES = [
  '#1E3A8A',  // Azul marinho profundo
  '#DC2626',  // Vermelho vivo
  '#059669',  // Verde esmeralda
  '#D97706',  // Âmbar quente
  '#580073',  // Violeta vibrante
  '#EA580C',  // Laranja forte
  '#0891B2',  // Ciano brilhante
  '#573e3e',  // Marrom
  '#10B981',  // Verde lima
  '#F59E0B',  // Amarelo mostarda
  '#8B5CF6',  // Roxo lilás
  '#F97316',  // Laranja queimado
  '#0EA5E9',  // Azul céu claro
  '#BE123C',  // Rosa magenta
  '#14B8A6',  // Turquesa teal
  '#FBBF24'   // Amarelo ouro
];

export const MACROS_PB = {
  // 1ª MACRO - Sede: João Pessoa (Litoral, Zona da Mata, Vale do Mamanguape)
  1: {
    "1": {
      "nome": "Mata Atlântica",
      "municipios": [
        "Alhandra",
        "Bayeux",
        "Caaporã",
        "Cabedelo",
        "Conde",
        "Cruz do Espírito Santo",
        "João Pessoa",
        "Lucena",
        "Mari",
        "Pitimbu",
        "Riachão do Poço",
        "Santa Rita",
        "Sapé",
        "Sobrado"
      ]
    },
    "2": {
      "nome": "Piemonte da Borborema",
      "municipios": [
        "Alagoinha",
        "Araçagi",
        "Araruna",
        "Bananeiras",
        "Belém",
        "Borborema",
        "Campo de Santana",
        "Cacimba de Dentro",
        "Caiçara",
        "Casserengue",
        "Cuitegi",
        "Dona Inês",
        "Duas Estradas",
        "Guarabira",
        "Lagoa de Dentro",
        "Logradouro",
        "Mulungu",
        "Pilões",
        "Pilõezinhos",
        "Pirpirituba",
        "Riachão",
        "Serra da Raiz",
        "Serraria",
        "Sertãozinho",
        "Solânea",
        "Tacima"
      ]
    },
    "12": {
      "nome": "Vale do Paraíba",
      "municipios": [
        "Caldas Brandão",
        "Gurinhém",
        "Ingá",
        "Itabaiana",
        "Itatuba",
        "Juarez Távora",
        "Juripiranga",
        "Mogeiro",
        "Pedras de Fogo",
        "Pilar",
        "Riachão do Bacamarte",
        "Salgado de São Félix",
        "São José dos Ramos",
        "São Miguel de Taipu"
      ]
    },
    "14": {
      "nome": "Vale do Mamanguape",
      "municipios": [
        "Baía da Traição",
        "Capim",
        "Cuité de Mamanguape",
        "Curral de Cima",
        "Itapororoca",
        "Jacaraú",
        "Mamanguape",
        "Marcação",
        "Mataraca",
        "Pedro Régis",
        "Rio Tinto"
      ]
    }
  },

  // 2ª MACRO - Sede: Campina Grande (Agreste, Borborema, Curimataú, Cariri)
  2: {
    "3": {
      "nome": "Renascer do Brejo",
      "municipios": [
        "Alagoa Grande",
        "Alagoa Nova",
        "Algodão de Jandaíra",
        "Arara",
        "Areia",
        "Areial",
        "Esperança",
        "Lagoa Seca",
        "Matinhas",
        "Montadas",
        "Remígio",
        "São Sebastião de Lagoa de Roça"
      ]
    },
    "4": {
      "nome": "Curimataú e Seridó Paraibano",
      "municipios": [
        "Baraúna",
        "Barra de Santa Rosa",
        "Cubati",
        "Cuité",
        "Damião",
        "Frei Martinho",
        "Nova Floresta",
        "Nova Palmeira",
        "Pedra Lavrada",
        "Picuí",
        "São Vicente do Seridó",
        "Seridó",
        "Sossêgo"
      ]
    },
    "5": {
      "nome": "Cariri Ocidental",
      "municipios": [
        "Amparo",
        "Camalaú",
        "Caraúbas",
        "Congo",
        "Coxixola",
        "Gurjão",
        "Monteiro",
        "Ouro Velho",
        "Parari",
        "Prata",
        "São João do Cariri",
        "São João do Tigre",
        "São José dos Cordeiros",
        "São Sebastião do Umbuzeiro",
        "Serra Branca",
        "Sumé",
        "Zabelê"
      ]
    },
    "15": {
      "nome": "Cariri Oriental",
      "municipios": [
        "Alcantil",
        "Aroeiras",
        "Barra de Santana",
        "Barra de São Miguel",
        "Boqueirão",
        "Cabaceiras",
        "Caturité",
        "Gado Bravo",
        "Natuba",
        "Queimadas",
        "Riacho de Santo Antônio",
        "Santa Cecília",
        "São Domingos do Cariri",
        "Umbuzeiro"
      ]
    },
    "16": {
      "nome": "Borborema",
      "municipios": [
        "Assunção",
        "Boa Vista",
        "Campina Grande",
        "Fagundes",
        "Juazeirinho",
        "Livramento",
        "Massaranduba",
        "Olivedos",
        "Pocinhos",
        "Puxinanã",
        "Santo André",
        "Serra Redonda",
        "Soledade",
        "Taperoá",
        "Tenório"
      ]
    }
  },

  // 3ª MACRO - Sede: Patos/Sertão (Sertão, Alto Sertão)
  3: {
    "6": {
      "nome": "Sertão Patos",
      "municipios": [
        "Areia de Baraúnas",
        "Cacimba de Areia",
        "Cacimbas",
        "Catingueira",
        "Condado",
        "Desterro",
        "Emas",
        "Junco do Seridó",
        "Mãe d'Água",
        "Malta",
        "Maturéia",
        "Passagem",
        "Patos",
        "Quixabá",
        "Salgadinho",
        "Santa Luzia",
        "Santa Teresinha",
        "São José de Espinharas",
        "São José do Bonfim",
        "São José do Sabugi",
        "São Mamede",
        "Teixeira",
        "Várzea",
        "Vista Serrana"
      ]
    },
    "7": {
      "nome": "Sertão Vale do Piancó",
      "municipios": [
        "Aguiar",
        "Boa Ventura",
        "Conceição",
        "Coremas",
        "Curral Velho",
        "Diamante",
        "Ibiara",
        "Igaracy",
        "Itaporanga",
        "Nova Olinda",
        "Olho d'Água",
        "Pedra Branca",
        "Piancó",
        "Santa Inês",
        "Santana de Mangueira",
        "Santana dos Garrotes",
        "São José de Caiana",
        "Serra Grande"
      ]
    },
    "8": {
      "nome": "Alto Sertão",
      "municipios": [
        "Belém do Brejo do Cruz",
        "Bom Sucesso",
        "Brejo do Cruz",
        "Brejo dos Santos",
        "Catolé do Rocha",
        "Jericó",
        "Mato Grosso",
        "Riacho dos Cavalos",
        "São Bento",
        "São José do Brejo do Cruz"
      ]
    },
    "9": {
      "nome": "Sertão Univale",
      "municipios": [
        "Bernardino Batista",
        "Bom Jesus",
        "Bonito de Santa Fé",
        "Cachoeira dos Índios",
        "Cajazeiras",
        "Carrapateira",
        "Joca Claudino",
        "Monte Horebe",
        "Poço Dantas",
        "Poço de José de Moura",
        "Santa Helena",
        "Santarém",
        "São João do Rio do Peixe",
        "São José de Piranhas",
        "Triunfo",
        "Uiraúna"
      ]
    },
    "10": {
      "nome": "Vale dos Dinossauros",
      "municipios": [
        "Aparecida",
        "Lastro",
        "Marizópolis",
        "Nazarezinho",
        "Santa Cruz",
        "São Francisco",
        "São José da Lagoa Tapada",
        "Sousa",
        "Vieirópolis"
      ]
    },
    "11": {
      "nome": "Sertão da Décima Primeira Região",
      "municipios": [
        "Água Branca",
        "Imaculada",
        "Juru",
        "Manaíra",
        "Princesa Isabel",
        "São José de Princesa",
        "Tavares"
      ]
    },
    "13": {
      "nome": "Terra de Maringá",
      "municipios": [
        "Cajazeirinhas",
        "Lagoa",
        "Paulista",
        "Pombal",
        "São Bentinho",
        "São Domingos"
      ]
    }
  }
}