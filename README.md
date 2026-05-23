# 📊 Dashboard de Gestão de Férias

Dashboard web para visualização e gestão de férias de colaboradores,
com conexão ao Google Sheets e suporte offline via `data.js`.

---

## 📁 Estrutura de arquivos

```
dashboard-ferias/
├── index.html   → O dashboard (não precisa editar)
├── config.js    → ⚙️ Configurações (título, Sheet ID, etc.)
├── data.js      → 📝 Dados locais de fallback (edite aqui)
└── README.md    → Este guia
```

---

## ⚙️ Como configurar (`config.js`)

Abra `config.js` no Bloco de Notas e edite:

```js
sheetId: "SEU_ID_AQUI",   // ID da sua planilha Google Sheets
sheetGid: "0",             // GID da aba (0 = primeira aba)
```

**Onde encontrar o ID da planilha:**
```
https://docs.google.com/spreadsheets/d/  1dQK1gT0fDjs5...  /edit
                                          ^^^^^^^^^^^^^^^^
                                          Este é o sheetId
```

**Para conectar ao vivo (Google Sheets):**
1. Abra a planilha
2. Clique em **Compartilhar** → **Alterar para qualquer pessoa com o link**
3. Permissão: **Visualizador**
4. Salve

---

## 📝 Como atualizar os dados offline (`data.js`)

Se a planilha não estiver pública, o dashboard usa o `data.js` como fallback.

1. Abra `data.js` no **Bloco de Notas**
2. Edite os registros dentro de `DADOS_LOCAIS`:

```js
const DADOS_LOCAIS = [
  {
    NOME: "MARIA SILVA",
    FUNCAO: "CAIXA",
    SUPERVISOR: "JOÃO SOUZA",
    GESTAO: "GESTÃO SUL",
    LOJA: "LOJA 15",
    MES_PREVISTO: "JAN./2026",
    ULT_FERIAS: "01/01/2024",
    VENCIMENTO: "01/01/2026",
    DIAS_VENCER: "120",
    STATUS: "OK",           // OK | ATENÇÃO | URGENTE | VENCIDA
    LANCADOS: "PROCESSADO", // PROCESSADO | LANÇADO | VERIFICAR
  },
  // ... mais registros
];
```

3. Salve o arquivo
4. Faça o commit no GitHub (o site atualiza automaticamente)

---

## 🚀 Como hospedar no GitHub Pages (gratuito)

### Passo 1 — Criar repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New repository** (botão verde)
3. Nome sugerido: `dashboard-ferias`
4. Deixe como **Public**
5. Clique em **Create repository**

### Passo 2 — Fazer upload dos arquivos
1. Na página do repositório, clique em **uploading an existing file**
2. Arraste os 4 arquivos: `index.html`, `config.js`, `data.js`, `README.md`
3. Clique em **Commit changes**

### Passo 3 — Ativar o GitHub Pages
1. No repositório, clique em **Settings** (engrenagem)
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Branch: **main** | Pasta: **/ (root)**
5. Clique em **Save**

### Passo 4 — Acessar o dashboard
Após ~1 minuto, seu dashboard estará disponível em:
```
https://SEU_USUARIO.github.io/dashboard-ferias/
```

---

## 🔄 Como atualizar os dados depois

### Via GitHub (sem instalar nada):
1. Acesse seu repositório no GitHub
2. Clique no arquivo `data.js`
3. Clique no ícone de lápis ✏️ (editar)
4. Faça as alterações diretamente no navegador
5. Clique em **Commit changes**
6. O site atualiza em ~1 minuto

### Via upload:
1. Edite o `data.js` localmente no Bloco de Notas
2. No GitHub, clique em `data.js` → **Delete file** → confirme
3. Clique em **Add file** → **Upload files** → envie o novo `data.js`

---

## 🔗 Conexão com Google Sheets (ao vivo)

Quando a planilha estiver pública, o dashboard:
- ✅ Busca os dados automaticamente a cada 5 minutos
- ✅ Mostra a barra verde "Google Sheets conectado"
- ✅ Você não precisa atualizar o `data.js` manualmente

Quando a planilha estiver privada:
- ⚠️ Usa os dados do `data.js` como fallback
- ⚠️ Mostra barra amarela avisando

---

## 📋 Colunas esperadas na planilha Google Sheets

| Coluna na planilha | Campo no sistema |
|---|---|
| NOME | Nome do colaborador |
| FUNCAO | Cargo/função |
| SUPER | Supervisor |
| GESTAO | Gestor |
| LOJA | Loja |
| MES_PREVISTO | Mês previsto (ex: JAN./2026) |
| ULT_FERIAS | Data últimas férias |
| VENCIMENTO | Data de vencimento |
| DIAS_PARA_VENCER | Dias restantes (número) |
| STATUS | OK / ATENÇÃO / URGENTE / VENCIDA |
| LANCADOS | PROCESSADO / LANÇADO / VERIFICAR |
