# 🌊 Corcovado - Agenda Marítima Inteligente

<div align="center">

![Status](https://img.shields.io/badge/Status-Ativo-00d9ff?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-0ea5e9?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-00d9ff?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-20+-0ea5e9?style=for-the-badge)

**Sistema de gestão marítima com interface dark futurista e design neon**

[Demo](#) · [Reportar Bug](#) · [Solicitar Feature](#)

</div>

---

## 🎯 Sobre o Projeto

**Corcovado Gestão Marítima** é uma aplicação web moderna e elegante para gerenciamento de eventos e operações marítimas. Com um design dark futurista inspirado em dashboards executivos, oferece uma experiência visual única com efeitos glassmorphism e cores neon vibrantes.

### ✨ Destaques

- 🎨 **Interface Dark Futurista** - Design moderno com glassmorphism e efeitos neon
- 📊 **Dashboard Analítico** - Métricas em tempo real com visualizações intuitivas
- 🔍 **Sistema de Filtros** - Filtragem avançada por categoria e prioridade
- ⚡ **Performance Otimizada** - React 19 com TypeScript para máxima eficiência
- 🎭 **Experiência Premium** - Animações suaves e feedback visual rico
- 🌐 **API RESTful** - Backend robusto com Express e TypeScript

---

## 🚀 Funcionalidades

### 📅 Calendário Inteligente
- Visualização mensal com eventos organizados
- Navegação fluida entre meses
- Destaque do dia atual com efeito neon
- Eventos codificados por cores
- Altura consistente dos dias (130px)

### 📝 Gestão de Eventos
- **Criação rápida** com formulário modal elegante
- **Edição inline** diretamente no calendário
- **Exclusão** com confirmação visual
- **Categorias marítimas**: Operacional, Manutenção, Segurança, Ambiental, Administrativo, Treinamento
- **Níveis de prioridade**: Urgente, Alta, Normal, Baixa
- **Date picker customizado** com interface visual

### 📊 Dashboard de Métricas
- **4 Cards principais**:
  - Total de eventos do mês
  - Próximos eventos (7 dias)
  - Eventos urgentes
  - Alta prioridade
- **Breakdown por categoria** com contadores
- **Barras de distribuição por prioridade** com percentuais e cores diferenciadas

### 🔎 Sistema de Filtros
- Filtro por **categoria** (6 opções)
- Filtro por **prioridade** (4 níveis)
- Contador de resultados em tempo real
- Interface integrada ao design neon

### 🎯 Sidebar de Eventos
- Listagem dos próximos eventos
- Cards com glassmorphism
- Informações completas: data, hora, categoria, prioridade
- Ação rápida de exclusão
- Scroll customizado com tema dark

---

## 🎨 Design System

### Paleta de Cores

```css
/* Background Principal */
--bg-primary: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1729 100%);

/* Cores Neon */
--neon-cyan: #00d9ff;
--neon-blue: #0ea5e9;

/* Cores de Status */
--urgent: #ec4899;     /* Rosa vibrante */
--high: #f59e0b;       /* Laranja/Amarelo */
--normal: #00d9ff;     /* Cyan */
--low: #10b981;        /* Verde */

/* Glassmorphism */
--glass-bg: rgba(26, 31, 58, 0.6);
--glass-border: rgba(0, 217, 255, 0.2);
```

### Efeitos Visuais

- **Glassmorphism**: `backdrop-filter: blur(20px)`
- **Neon Glow**: `box-shadow` em múltiplas camadas
- **Gradientes**: Transições suaves cyan → azul
- **Animações**: Transições de 0.3s com `ease`

---

## 🛠️ Stack Tecnológico

### Frontend
```
React          v19.2.0
TypeScript     v5.6.2
Vite           v7.3.1
CSS3           (Custom + Gradients)
```

### Backend
```
Node.js        v20+
Express        v4.18.2
TypeScript     v5.3.3
TSX            v4.7.0 (dev runtime)
CORS           v2.8.5
```

### Ferramentas
```
ESLint         v9.18.0
@types/node    v22.10.5
```

---

## � Banco de Dados

Este projeto utiliza **armazenamento em arquivo JSON** para persistência de dados, ideal para apresentações e demonstrações locais.

### Sistema de Armazenamento

#### Características
- ✅ **Zero configuração** - Sem instalação de banco de dados
- ✅ **Arquivo JSON legível** - Fácil visualização e debug
- ✅ **Auto-inicialização** - Cria estrutura automaticamente
- ✅ **Persistência local** - Dados salvos entre reinicializações
- ✅ **Perfeito para demos** - Sem complexidade adicional

#### Localização
```
server/data/events.json
```

#### Estrutura do Arquivo
```json
{
  "events": [
    {
      "id": "1",
      "title": "Reunião com cliente",
      "description": "Discussão sobre o projeto",
      "startDate": "2025-01-15T10:00:00",
      "endDate": "2025-01-15T11:00:00",
      "category": "reuniao",
      "priority": "alta"
    }
  ],
  "lastId": 1
}
```

#### Implementação
O sistema usa a classe `JSONStorage` que gerencia:
- **Leitura/Escrita** - Operações síncronas no arquivo
- **Auto-criação** - Cria diretório e arquivo se não existirem
- **IDs incrementais** - Controle automático de IDs únicos
- **CRUD completo** - Create, Read, Update, Delete

#### Métodos Disponíveis
```typescript
storage.getAllEvents()           // Lista todos os eventos
storage.getEventById(id)         // Busca evento específico
storage.createEvent(data)        // Cria novo evento
storage.updateEvent(id, data)    // Atualiza evento existente
storage.deleteEvent(id)          // Remove evento
storage.clearAll()               // Limpa todos os dados
```

---

## �📦 Instalação

### Pré-requisitos
- Node.js 20+ 
- npm ou yarn

### Clonando o Repositório
```bash
git clone https://github.com/seu-usuario/agenda-inteligente.git
cd "Agenda inteligente"
```

### Instalando Dependências

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

---

## ⚡ Executando o Projeto

### Opção 1: Rodar Tudo (Recomendado)
```bash
# No VS Code, use a task configurada:
Terminal > Run Task > Rodar Tudo
```

### Opção 2: Manual

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Acessando
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001

---

## 📂 Estrutura do Projeto

```
Agenda inteligente/
│
├── 📁 src/                          # Frontend React
│   ├── 📁 components/               # Componentes reutilizáveis
│   │   ├── Calendar.tsx             # Calendário mensal (130px por dia)
│   │   ├── Dashboard.tsx            # Dashboard com métricas
│   │   ├── DateTimePicker.tsx       # Seletor visual de data/hora
│   │   ├── EventForm.tsx            # Modal de criação/edição
│   │   └── EventList.tsx            # Sidebar de eventos
│   │
│   ├── 📁 services/                 # Camada de serviços
│   │   └── api.ts                   # Cliente HTTP (axios)
│   │
│   ├── 📁 types/                    # Interfaces TypeScript
│   │   └── Event.ts                 # Event, EventInput
│   │
│   ├── App.tsx                      # Componente raiz
│   ├── App.css                      # Design system completo
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Reset CSS
│
├── 📁 server/                       # Backend Node.js
│   ├── 📁 src/
│   │   ├── 📁 models/               # Modelos de dados
│   │   │   └── Event.ts             # Interface do evento
│   │   │
│   │   ├── 📁 routes/               # Rotas da API
│   │   │   └── events.ts            # CRUD de eventos
│   │   │
│   │   └── index.ts                 # Servidor Express
│   │
│   ├── package.json                 # Dependências backend
│   └── tsconfig.json                # Config TypeScript
│
├── 📁 .vscode/
│   └── tasks.json                   # Tasks automatizadas
│
├── 📁 public/                       # Assets estáticos
├── package.json                     # Dependências frontend
├── tsconfig.json                    # Config TypeScript
├── vite.config.ts                   # Config Vite
└── README.md                        # Este arquivo
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:3001/api
```

### Rotas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/events` | Lista todos os eventos |
| `GET` | `/events/:id` | Busca evento por ID |
| `POST` | `/events` | Cria novo evento |
| `PUT` | `/events/:id` | Atualiza evento |
| `DELETE` | `/events/:id` | Deleta evento |

### Exemplo de Request

**POST /api/events**
```json
{
  "title": "Inspeção de Segurança",
  "description": "Vistoria trimestral do equipamento",
  "startDate": "2026-01-20T09:00:00",
  "endDate": "2026-01-20T12:00:00",
  "color": "#00d9ff",
  "category": "Segurança",
  "priority": "alta",
  "location": "Deck Principal"
}
```

---

## 🎯 Roadmap

- [x] Sistema de prioridades
- [x] Dashboard com métricas
- [x] Filtros por categoria e prioridade
- [x] Design dark futurista
- [x] DatePicker customizado
- [ ] Autenticação de usuários
- [ ] Notificações push
- [ ] Exportação para PDF
- [ ] Integração com calendário externo (Google Calendar)
- [ ] Modo offline (PWA)
- [ ] Tema claro (opcional)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👤 Autor

**Corcovado Gestão Marítima**

- Website: [corcovado.com.br](#)
- GitHub: [@corcovado](#)

---

## 🙏 Agradecimentos

- Design inspirado em dashboards executivos modernos
- Ícones e efeitos visuais customizados
- Comunidade React e TypeScript

---

<div align="center">

**⚓ Desenvolvido com dedicação para operações marítimas de excelência ⚓**

![Wave](https://raw.githubusercontent.com/mayhemantt/mayhemantt/Update/svg/Bottom.svg)

</div>
│       ├── routes/         # Rotas da API
│       │   └── events.ts   # Endpoints de eventos
│       └── index.ts        # Servidor Express
│
└── .vscode/
    └── tasks.json          # Tarefas do VS Code
```

## 🏃 Como Executar

### Instalação

As dependências já foram instaladas. Caso precise reinstalar:

```bash
# Frontend
npm install

# Backend
cd server
npm install
```

### Executando a Aplicação

**Opção 1: Executar Tudo de Uma Vez**

Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac) e digite "Tasks: Run Task", depois selecione "Rodar Tudo".

**Opção 2: Terminal Manual**

```bash
# Terminal 1 - Backend (porta 3001)
cd server
npm run dev

# Terminal 2 - Frontend (porta 5173)
npm run dev
```

### Acessando a Aplicação

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 🌐 API Endpoints

### Eventos

- `GET /api/events` - Listar todos os eventos
- `GET /api/events/:id` - Buscar evento específico
- `POST /api/events` - Criar novo evento
- `PUT /api/events/:id` - Atualizar evento
- `DELETE /api/events/:id` - Deletar evento

### Exemplo de Payload (POST/PUT)

```json
{
  "title": "Reunião de Equipe",
  "description": "Discussão sobre o projeto",
  "startDate": "2026-01-17T10:00:00",
  "endDate": "2026-01-17T11:00:00",
  "color": "#3b82f6",
  "reminder": 15,
  "category": "Trabalho",
  "location": "Sala de reuniões"
}
```

## 🎨 Componentes Principais

### Calendar
Exibe o calendário mensal com todos os eventos. Permite navegação entre meses e clique em datas para criar eventos.

### EventForm
Formulário modal para criar e editar eventos com validação de campos obrigatórios.

### EventList
Lista lateral com todos os eventos ordenados por data, mostrando detalhes completos.

## 🔄 Próximas Melhorias

- [ ] Persistência em banco de dados (MongoDB/PostgreSQL)
- [ ] Sistema de autenticação
- [ ] Notificações em tempo real
- [ ] Visualização semanal e diária
- [ ] Exportar para Google Calendar/iCal
- [ ] Busca e filtros avançados
- [ ] Eventos recorrentes
- [ ] Compartilhamento de eventos
- [ ] Dark mode

## 📝 Notas de Desenvolvimento

- O backend atualmente usa armazenamento em memória. Os dados são perdidos ao reiniciar o servidor.
- Os eventos de exemplo são criados automaticamente na inicialização.
- O CORS está habilitado para permitir comunicação entre frontend e backend.

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com melhorias! Este projeto está em desenvolvimento ativo.

---

Desenvolvido com ❤️ usando React e Node.js
```
