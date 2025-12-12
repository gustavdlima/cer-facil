/**
 * Specialized Rehabilitation Center (CER) interface
 * Contains CNES code, name and rehabilitation modalities
 */

export interface CER {
  cnes: string;          
  nome: string;         
  modalidades: string[];
}

/**
 * Complete list of CERs (Specialized Rehabilitation Centers) in Paraíba state, Brazil
 * Data sourced from CNES (National Health Establishment Registry)
 * Modalities: auditiva (hearing), fisica (physical), intelectual (intellectual), visual (visual)
 */

export const cersParaiba: CER[] = [

  // Multi-modality centers (4 rehabilitation types)
  {
    cnes: "9585370", 
    nome: "CENTRO ESPECIALIZADO EM REABILITACAO CER IV",
    modalidades: ["auditiva", "fisica", "intelectual", "visual"]
  },
  {
    cnes: "2362619",
    nome: "CER IV CENTRO ESP EM REABILITACAO CAMPINA GRANDE",
    modalidades: ["auditiva", "fisica", "intelectual", "visual"]
  },
  {
    cnes: "2343479", // FUNAD - State foundation for people with disabilities
    nome: "FUNAD",
    modalidades: ["auditiva", "fisica", "intelectual", "visual"]
  },
  
  // Tri-modality centers (3 rehabilitation types)
  {
    cnes: "3360415",
    nome: "CER III CENTRO ESPECIALIZADO EM REALBILITACAO MARIA MOURA",
    modalidades: ["fisica", "intelectual", "visual"]
  },
  {
    cnes: "9562966",
    nome: "CER III DOUTOR ALOYSIO PEREIRA LIMA",
    modalidades: ["fisica", "intelectual", "visual"]
  },
  
  // Dual-modality centers (2 rehabilitation types)
  {
    cnes: "5925207",
    nome: "CENTRO DE REABILITACAO ANTONIO DE SOUZA MARANHAO",
    modalidades: ["auditiva", "fisica"]
  },
  {
    cnes: "2608073",
    nome: "CER CENTRO DE REABILITACAO DR JOSE DACIO", 
    modalidades: ["auditiva", "fisica"]
  },
  {
    cnes: "2612747", // APAE - Association of Parents and Friends of Exceptional Children
    nome: "APAE",
    modalidades: ["fisica", "intelectual"]
  },
  {
    cnes: "2606364",
    nome: "CENTRO DE ESPECIALIDADES DR MARIA DALUZ MARQUES BARRETO",
    modalidades: ["fisica", "intelectual"]
  },
  {
    cnes: "6528880",
    nome: "CENTRO DE REABILITACAO CER II",
    modalidades: ["fisica", "intelectual"]
  },
  {
    cnes: "3871002",
    nome: "CENTRO DE REABILITACAO E CUIDADO DA PESSOA COM DEFICIENCIA",
    modalidades: ["fisica", "intelectual"]
  },
  {
    cnes: "3015610",
    nome: "CENTRO ESPECIALIZADO EM REABILITACAO CER II",
    modalidades: ["fisica", "intelectual"]
  },
  {
    cnes: "2609061",
    nome: "POLICLINICA ESPECIALIDADES E REABILITACAO DR ANTONIO QUINHO",
    modalidades: ["fisica", "intelectual"]
  },
  {
    cnes: "2755718", // Institute for the blind in Paraíbaaaaaaaa
    nome: "INSTITUTO DOS CEGOS DA PARAIBA",
    modalidades: ["intelectual", "visual"]
  }
];

