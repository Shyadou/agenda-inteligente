# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [2.0.0] - 2026-01-16

### 🎨 Adicionado
- **Design Dark Futurista** com cores neon (cyan #00d9ff e azul #0ea5e9)
- **Glassmorphism** em todos os componentes principais
- **Dashboard de Métricas** com 4 cards analíticos
  - Total de eventos do mês
  - Próximos 7 dias
  - Eventos urgentes
  - Alta prioridade
- **Sistema de Prioridades** (Urgente, Alta, Normal, Baixa)
- **Sistema de Filtros** por categoria e prioridade
- **Categorias Marítimas** personalizadas (6 opções)
- **DateTimePicker customizado** com interface visual
- **Barras de distribuição por prioridade** com percentuais
- **Breakdown por categoria** com contadores
- **Efeitos neon** em hover e focus
- **Gradientes vibrantes** em botões e títulos

### 🔄 Modificado
- Redesign completo da interface (light → dark)
- Paleta de cores atualizada para tema marítimo
- Animações suaves e transições de 0.3s
- Cards com efeitos glassmorphism e backdrop-blur
- Altura fixa dos dias do calendário (130px)
- Modal de eventos com novo visual dark
- Sidebar de eventos com glassmorphism

### 🎯 Melhorado
- Performance geral da aplicação
- Experiência do usuário (UX)
- Feedback visual em interações
- Consistência do design system
- Responsividade mobile

### 🐛 Corrigido
- Layout quebrando entre diferentes meses
- Texto invisível em inputs (branco sobre branco)
- Duplicação de propriedades CSS
- Inconsistências no tamanho do calendário

---

## [1.0.0] - 2026-01-15

### ✨ Lançamento Inicial
- Calendário mensal interativo
- CRUD completo de eventos
- API RESTful com Express
- Interface React + TypeScript
- Sistema de categorias
- Cores personalizadas por evento
- Listagem de próximos eventos
- Design premium com tema Corcovado (tema claro)

---

## [Não Lançado]

### 🚀 Planejado para v2.1.0
- [ ] Autenticação de usuários
- [ ] Notificações push
- [ ] Exportação para PDF
- [ ] Integração com Google Calendar
- [ ] Modo offline (PWA)
- [ ] Tema claro opcional

### 🎯 Planejado para v3.0.0
- [ ] Multi-tenant
- [ ] Permissões granulares
- [ ] Relatórios avançados
- [ ] API GraphQL
- [ ] Aplicativo mobile nativo
