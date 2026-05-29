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
  // URL completa da aba:
  // https://docs.google.com/spreadsheets/d/1dQK1gT0fDjs5afbaPGesDc2U1bmhcPxUWdw2yaR4spA/edit?gid=0
  sheetId: "1dQK1gT0fDjs5afbaPGesDc2U1bmhcPxUWdw2yaR4spA",
  sheetGid: "0",

  // ── Google Sheets — ABA 2: ATIVO ─────────────────────────
  // URL completa da aba:
  // https://docs.google.com/spreadsheets/d/1dQK1gT0fDjs5afbaPGesDc2U1bmhcPxUWdw2yaR4spA/edit?gid=1076783807
  sheetIdAtivo: "1dQK1gT0fDjs5afbaPGesDc2U1bmhcPxUWdw2yaR4spA",
  sheetGidAtivo: "1076783807",

  // ── Para conectar ao vivo ─────────────────────────────────
  // 1. Abra a planilha no Google Sheets
  // 2. Clique em "Compartilhar" (canto superior direito)
  // 3. Clique em "Alterar para qualquer pessoa com o link"
  // 4. Permissão: "Visualizador"  →  Salvar
  // Pronto! O dashboard vai carregar os dados automaticamente.

  // Intervalo de atualização automática em minutos (0 = desativar)
  atualizacaoAutomaticaMinutos: 5,

  // ── Regras de sinalização de vencimento ──────────────────
  // (usado para alertas visuais — referência)
  diasUrgente: 30,   // 🟠 VENCENDO — menos de X dias para vencer
  diasAtencao: 60,   // 🟡 ATENÇÃO  — menos de X dias para vencer

  // ── Tabela: itens por página ──────────────────────────────
  itensPorPagina: 15,

  // ── Conflito operacional ──────────────────────────────────
  // Alerta quando X ou mais pessoas do mesmo cargo/loja
  // estiverem de férias no mesmo mês
  limiteConflito: 2,

  // ── Alerta financeiro ────────────────────────────────────
  // Percentual acima da média para disparar alertas (1.5 = 150%)
  limiteAlertaFinanceiro: 1.5,

};
