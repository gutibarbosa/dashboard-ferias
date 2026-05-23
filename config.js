// ============================================================
//  CONFIG.JS — Configurações do Dashboard de Férias
//  Edite este arquivo para personalizar o dashboard
// ============================================================

const CONFIG = {

  // ── Título e identidade ──────────────────────────────────
  titulo: "Dashboard de Gestão de Férias",
  empresa: "Gestão Executiva",
  logoTexto: "F",

  // ── Google Sheets (conexão ao vivo) ──────────────────────
  // Para conectar ao vivo:
  //   1. Abra sua planilha no Google Sheets
  //   2. Clique em "Compartilhar" → "Qualquer pessoa com o link pode ver"
  //   3. Cole o ID da planilha abaixo (está na URL da planilha)
  //
  // URL da planilha:
  // https://docs.google.com/spreadsheets/d/SEU_ID_AQUI/edit
  //                                         ^^^^^^^^^^^^
  sheetId: "1dQK1gT0fDjs5afbaPGesDc2U1bmhcPxUWdw2yaR4spA",

  // GID da aba (0 = primeira aba; veja na URL ao clicar na aba)
  sheetGid: "0",

  // Intervalo de atualização automática em minutos (0 = desativar)
  atualizacaoAutomaticaMinutos: 5,

  // ── Regras de status de vencimento ───────────────────────
  // Define quantos dias antes do vencimento muda o status
  diasUrgente: 30,    // laranja — menos de X dias
  diasAtencao: 60,    // amarelo — menos de X dias

  // ── Tabela: itens por página ──────────────────────────────
  itensPorPagina: 15,

  // ── Conflito operacional ──────────────────────────────────
  // Alerta quando X ou mais pessoas do mesmo cargo/loja estão
  // de férias no mesmo mês
  limiteConflito: 2,

};
