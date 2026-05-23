// ============================================================
//  DATA.JS — Dados locais de fallback
//
//  Este arquivo é usado SOMENTE quando o Google Sheets não
//  estiver disponível (planilha privada ou sem internet).
//
//  Como atualizar:
//  1. Abra este arquivo no Bloco de Notas (ou qualquer editor)
//  2. Edite os registros dentro de DADOS_LOCAIS abaixo
//  3. Salve o arquivo
//  4. Atualize o repositório no GitHub
//
//  Formato das colunas:
//  NOME         → Nome completo do colaborador
//  FUNCAO       → Cargo/função
//  SUPERVISOR   → Nome do supervisor
//  GESTAO       → Nome do gestor responsável
//  LOJA         → Identificador da loja (ex: LOJA 15)
//  MES_PREVISTO → Mês previsto para férias (ex: JAN./2026)
//  ULT_FERIAS   → Data das últimas férias (dd/mm/aaaa)
//  VENCIMENTO   → Data de vencimento do direito (dd/mm/aaaa)
//  DIAS_VENCER  → Dias até o vencimento (número inteiro)
//  STATUS       → OK | ATENÇÃO | URGENTE | VENCIDA
//  LANCADOS     → PROCESSADO | LANÇADO | VERIFICAR
// ============================================================

const DADOS_LOCAIS = [
  // Exemplo de registro — apague e substitua pelos seus dados:
  {
    NOME: "COLABORADOR EXEMPLO",
    FUNCAO: "CAIXA",
    SUPERVISOR: "SUPERVISOR EXEMPLO",
    GESTAO: "GESTÃO EXEMPLO",
    LOJA: "LOJA 01",
    MES_PREVISTO: "JAN./2026",
    ULT_FERIAS: "01/01/2024",
    VENCIMENTO: "01/01/2026",
    DIAS_VENCER: "120",
    STATUS: "OK",
    LANCADOS: "VERIFICAR",
  },
  // Adicione mais registros aqui seguindo o mesmo formato:
  // {
  //   NOME: "NOME DO COLABORADOR",
  //   FUNCAO: "CARGO",
  //   SUPERVISOR: "NOME SUPERVISOR",
  //   GESTAO: "NOME GESTAO",
  //   LOJA: "LOJA XX",
  //   MES_PREVISTO: "MMM./AAAA",
  //   ULT_FERIAS: "dd/mm/aaaa",
  //   VENCIMENTO: "dd/mm/aaaa",
  //   DIAS_VENCER: "000",
  //   STATUS: "OK",
  //   LANCADOS: "PROCESSADO",
  // },
];
