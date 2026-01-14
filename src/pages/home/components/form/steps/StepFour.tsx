import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/**

 * Este componente recebe TODOS os dados coletados no formulário através das "props"
 * Props são como "parâmetros" que um componente React recebe do componente pai
 *
 * DADOS DISPONÍVEIS:
 * 1. deficiencies (Array de strings)
 *    - Tipo: string[]
 *    - Exemplo: ["fisica", "auditiva", "visual"]
 *    - Descrição: Lista de deficiências selecionadas pelo usuário no Step 1
 *    - Valores possíveis: "fisica", "auditiva", "visual", "intelectual", "tea"
 *
 * 2. ageGroup (String)
 *    - Tipo: string
 *    - Exemplo: "adulto"
 *    - Descrição: Faixa etária selecionada pelo usuário no Step 2
 *    - Valores possíveis: "crianca", "adolescente", "adulto", "idoso"
 *
 * 3. location (String)
 *    - Tipo: string
 *    - Exemplo: "12345678" (CEP) ou "-23.5505,-46.6333" (coordenadas lat,lon)
 *    - Descrição: Localização do usuário obtida no Step 3
 *    - Pode ser: CEP (8 dígitos) ou coordenadas geográficas
 *
 * PRÓXIMOS PASSOS 
 * 1. FILTRAR RESULTADOS
 *    - Filtrar CERs que atendem as deficiências selecionadas
 *    - Ordenar por proximidade usando a localização
 *    - Considerar a faixa etária para recomendações
 *
 * (ESSA PARTE PRECISA SER FEITO PELA PESSOA RESPONSÁVEL POR SAIBA MAIS)
 * 2. EXIBIR RESULTADOS
 *    - Mostrar lista de CERs encontrados
 *    - Exibir informações: nome, endereço, distância, especialidades
 *    - Adicionar mapa com marcadores dos CERs
 *    - Botões para: ver detalhes, traçar rota, entrar em contato
 */

// Interface TypeScript: Define o "formato" dos dados que este componente recebe
interface StepFourProps {
  // Array de strings com as deficiências selecionadas
  deficiencies?: string[];

  // String com a faixa etária selecionada
  ageGroup?: string;

  // String com a localização (CEP ou coordenadas)
  location?: string;

  // Função para voltar ao step anterior
  onBack: () => void;
}

// Componente principal - recebe os dados através das props
export default function StepFour({
  deficiencies = [],
  ageGroup = "",
  location = "",
  onBack,
}: StepFourProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Resultados da Busca</CardTitle>
          <CardDescription>
            Encontramos os melhores CERs para você
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* ============================================================
              SEÇÃO 1: RESUMO DOS DADOS COLETADOS
              Mostra o que o usuário selecionou no formulário
          ============================================================ */}
          <div className="bg-muted p-4 rounded-lg space-y-2">
            <h3 className="font-semibold text-lg">Dados da sua busca:</h3>

            {/* Exibir deficiências selecionadas */}
            <div>
              <strong>Deficiências:</strong>
              <ul className="list-disc list-inside ml-4">
                {/* .map() percorre cada item do array e cria um elemento <li> */}
                {deficiencies.map((def, index) => (
                  <li key={index}>{def}</li>
                ))}
              </ul>
            </div>

            {/* Exibir faixa etária */}
            <div>
              <strong>Faixa etária:</strong> {ageGroup}
            </div>

            {/* Exibir localização */}
            <div>
              <strong>Localização:</strong> {location}
            </div>
          </div>

          {/* ============================================================
              SEÇÃO 2: ÁREA PARA EXIBIR OS RESULTADOS
              TODO: Substituir este conteúdo pela lista de CERs encontrados
          ============================================================ */}
          <div className="border-2 border-dashed border-primary/50 p-8 rounded-lg text-center">
            <p className="text-muted-foreground mb-4">
              📍 ÁREA DE RESULTADOS - IMPLEMENTAR AQUI
            </p>
            <p className="text-sm text-muted-foreground">
              Aqui você deve exibir:
            </p>
            <ul className="text-sm text-muted-foreground text-left max-w-md mx-auto mt-2 space-y-1">
              <li>• Lista de CERs encontrados</li>
              <li>• Informações de cada CER (nome, endereço, telefone)</li>
              <li>• Distância até cada CER</li>
              <li>• Especialidades atendidas</li>
              <li>• Botões de ação (ver detalhes, traçar rota)</li>
              <li>• Mapa com marcadores (opcional)</li>
            </ul>
          </div>

          {/* ============================================================
              EXEMPLO DE COMO EXIBIR UM CER (COMENTADO)
              Descomente e adapte quando tiver os dados da API
          ============================================================ */}
          {/*
          <div className="border rounded-lg p-4 space-y-2">
            <h4 className="font-bold text-lg">Nome do CER</h4>
            <p className="text-sm text-muted-foreground">Endereço completo</p>
            <p className="text-sm">Distância: 2.5 km</p>
            <div className="flex gap-2">
              <span className="text-xs bg-primary/10 px-2 py-1 rounded">Física</span>
              <span className="text-xs bg-primary/10 px-2 py-1 rounded">Auditiva</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="sm">Ver Detalhes</Button>
              <Button size="sm" variant="outline">Traçar Rota</Button>
            </div>
          </div>
          */}
        </CardContent>

        {/* Botões de navegação */}
        <CardContent className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button>Finalizar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
