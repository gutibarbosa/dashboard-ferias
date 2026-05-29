// ============================================================
//  DATA.JS — Dados locais de fallback
//
//  Este arquivo é usado SOMENTE quando o Google Sheets não
//  estiver acessível (planilha privada ou sem internet).
//
//  ✅ Quando a planilha estiver pública → dados vêm do Sheets
//  ⚠️ Quando privada → dados vêm deste arquivo
//
//  Como atualizar:
//  1. Abra este arquivo no Bloco de Notas
//  2. Edite os registros dentro de DADOS_LOCAIS abaixo
//  3. Salve o arquivo
//  4. No GitHub: clique no arquivo → lápis ✏️ → cole → Commit
//
//  COLUNAS DA NOVA BASE:
//  NOME, FUNCAO, SUPERVISOR, GESTAO, LOJA,
//  MES_PREVISTO, ULT_FERIAS, VENCIMENTO,
//  SINALIZACAO, DIAS_VENCER, LANCADOS,
//  MEDIA_VALOR, STATUS_COLAB, CONFLITO
//
//  SINALIZACAO válidos : 🟢 APTO | 🟡 ATENÇÃO | 🟠 VENCENDO | 🔴 VENCIDO | ⚪ NÃO APTO
//  LANCADOS válidos    : PROCESSADO | LANÇADO | VERIFICAR
//  STATUS_COLAB válidos: ATIVO | DESLIGADO
//  CONFLITO válidos    : OK | ⚠ CONFLITO
//
//  IMPORTANTE: Sempre coloque vírgula no final de cada bloco { },
//  exceto no ÚLTIMO registro.
// ============================================================

const DADOS_LOCAIS = [
  // ── Substitua pelos seus dados reais ─────────────────────
  {
    NOME: "COLABORADOR EXEMPLO",
    FUNCAO: "CAIXA",
    SUPERVISOR: "SUPERVISOR EXEMPLO",
    GESTAO: "GESTÃO EXEMPLO",
    LOJA: "LOJA 01",
    MES_PREVISTO: "JAN./2026",
    ULT_FERIAS: "01/01/2024",
    VENCIMENTO: "01/01/2026",
    SINALIZACAO: "🟢 APTO",
    DIAS_VENCER: "120",
    LANCADOS: "VERIFICAR",
    MEDIA_VALOR: "2000.00",
    STATUS_COLAB: "ATIVO",
    CONFLITO: "OK",
  },
  // {
  //   NOME: "NOME COMPLETO",
  //   FUNCAO: "CARGO",
  //   SUPERVISOR: "NOME SUPERVISOR",
  //   GESTAO: "NOME GESTOR",
  //   LOJA: "LOJA XX",
  //   MES_PREVISTO: "MMM./AAAA",
  //   ULT_FERIAS: "dd/mm/aaaa",
  //   VENCIMENTO: "dd/mm/aaaa",
  //   SINALIZACAO: "🟢 APTO",
  //   DIAS_VENCER: "000",
  //   LANCADOS: "PROCESSADO",
  //   MEDIA_VALOR: "0.00",
  //   STATUS_COLAB: "ATIVO",
  //   CONFLITO: "OK",
  // },
];
