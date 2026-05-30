// ============================================================
//  DATA.JS — Dados locais de fallback
//
//  Usado SOMENTE quando o Google Sheets não estiver acessível.
//  ✅ Planilha pública → dados vêm do Sheets
//  ⚠️ Planilha privada → dados vêm deste arquivo
//
//  COLUNAS:
//  NOME, FUNCAO, SUPERVISOR, GESTAO, LOJA, MES_PREVISTO,
//  ULT_FERIAS, VENCIMENTO, SINALIZACAO, DIAS_VENCER,
//  LANCADOS, MEDIA_VALOR, CONFLITO
//
//  SINALIZACAO: 🟢 PRAZO OK | 🟡 ATENÇÃO | 🟠 URGÊNCIA | 🔴 VENCIDO
//  LANCADOS   : PROCESSADO | LANÇADO | LANÇAR
//  CONFLITO   : OK | ⚠ CONFLITO
// ============================================================

const DADOS_LOCAIS = [
  {
    NOME:         "COLABORADOR EXEMPLO",
    FUNCAO:       "CAIXA",
    SUPERVISOR:   "SUPERVISOR EXEMPLO",
    GESTAO:       "GESTÃO EXEMPLO",
    LOJA:         "LOJA 01",
    MES_PREVISTO: "JUN./2026",
    ULT_FERIAS:   "01/06/2025",
    VENCIMENTO:   "01/06/2027",
    SINALIZACAO:  "🟢 PRAZO OK",
    DIAS_VENCER:  "400",
    LANCADOS:     "LANÇADO",
    MEDIA_VALOR:  "2100.00",
    CONFLITO:     "OK",
  },
  // {
  //   NOME:         "NOME COMPLETO",
  //   FUNCAO:       "CARGO",
  //   SUPERVISOR:   "NOME SUPERVISOR",
  //   GESTAO:       "NOME GESTOR",
  //   LOJA:         "LOJA XX",
  //   MES_PREVISTO: "MMM./AAAA",
  //   ULT_FERIAS:   "dd/mm/aaaa",
  //   VENCIMENTO:   "dd/mm/aaaa",
  //   SINALIZACAO:  "🟢 PRAZO OK",
  //   DIAS_VENCER:  "000",
  //   LANCADOS:     "PROCESSADO",
  //   MEDIA_VALOR:  "0.00",
  //   CONFLITO:     "OK",
  // },
];
