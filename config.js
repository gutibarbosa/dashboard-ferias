// ============================================================
//  CONFIG.JS — Configurações do Dashboard de Férias
//  Edite este arquivo para personalizar o dashboard
// ============================================================

const CONFIG = {

  // ── Título e identidade ──────────────────────────────────
  titulo: "Dashboard de Gestão de Férias",
  empresa: "Gestão Executiva",
  logoTexto: "F",

  // ── Google Sheets — ABA 1: BASE DE DADOS ─────────────────
  sheetId:  "1dQK1gT0fDjs5afbaPGesDc2U1bmhcPxUWdw2yaR4spA",
  sheetGid: "0",

  // ── Google Sheets — ABA 2: ATIVO ─────────────────────────
  sheetIdAtivo:  "1dQK1gT0fDjs5afbaPGesDc2U1bmhcPxUWdw2yaR4spA",
  sheetGidAtivo: "1076783807",

  // ── Para conectar ao vivo ─────────────────────────────────
  // 1. Abra a planilha no Google Sheets
  // 2. Clique em "Compartilhar" → "Qualquer pessoa com o link"
  // 3. Permissão: "Visualizador" → Salvar
  // Pronto! O dashboard carrega os dados automaticamente.

  // Intervalo de atualização automática em minutos (0 = desativar)
  atualizacaoAutomaticaMinutos: 5,

  // ── Sinalização de vencimento (referência) ───────────────
  //  🟢 PRAZO OK  → mais de 60 dias
  //  🟡 ATENÇÃO   → 31 a 60 dias
  //  🟠 URGÊNCIA  → 0 a 30 dias
  //  🔴 VENCIDO   → menor que 0 dias
  diasUrgente: 30,
  diasAtencao: 60,

  // ── Tabela: itens por página ──────────────────────────────
  itensPorPagina: 15,

  // ── Conflito operacional ──────────────────────────────────
  // Alerta quando X ou mais pessoas do mesmo cargo/loja
  // estiverem de férias no mesmo mês
  limiteConflito: 2,

  // ── Alertas financeiros ───────────────────────────────────
  // Dispara alerta quando custo superar X × a média
  // 1.5 = 150% da média
  limiteAlertaFinanceiro: 1.5,

};
