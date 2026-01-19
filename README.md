<div align="center">

# Corcovado - Agenda Marítima Inteligente

![Status](https://img.shields.io/badge/Status-Active-00d9ff?style=for-the-badge&logo=checkmarx&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-0ea5e9?style=for-the-badge)

**Sistema profissional de gestão marítima com interface dark futurista**

[Instalação](#instalação) • [Recursos](#recursos) • [API](#api) • [Licença](#licença)

</div>

---

## Sobre o Projeto

**Corcovado Gestão Marítima** é uma aplicação web moderna para gerenciamento de eventos e operações marítimas. Desenvolvida com React 19 e TypeScript, oferece uma experiência visual única com design dark futurista, efeitos glassmorphism e cores neon vibrantes.

### Principais Características

**Interface Dark Futurista**  
Design moderno com glassmorphism, animações suaves e efeitos neon

**Dashboard Analítico Completo**  
Métricas em tempo real com visualizações intuitivas e cards informativos

**Sistema de Filtros Avançado**  
Filtragem por categoria e prioridade com resultados instantâneos

**Performance Otimizada**  
React 19 com TypeScript garantindo máxima eficiência e type-safety

**API RESTful Robusta**  
Backend em Express com persistência em arquivo JSON para demonstrações

---

## Recursos

### Calendário Inteligente

- Visualização mensal com eventos organizados
- Navegação fluida entre meses com transições suaves
- Destaque do dia atual com efeito neon
- Eventos codificados por cores customizáveis
- Altura consistente dos dias (130px)

### Gestão de Eventos

**Criação e Edição Completa**
- Formulário modal elegante com validação
- Edição inline diretamente no calendário
- Date picker customizado com interface visual
- Exclusão com confirmação de segurança

**Categorias Marítimas Disponíveis**
- Operacional
- Manutenção
- Segurança
- Ambiental
- Administrativo
- Treinamento

**Níveis de Prioridade**
- Urgente (rosa vibrante)
- Alta (laranja/amarelo)
- Normal (cyan)
- Baixa (verde)

### Dashboard de Métricas

**4 Cards Principais**
- Total de eventos do mês atual
- Próximos eventos (7 dias)
- Eventos com prioridade urgente
- Eventos com alta prioridade

**Visualizações Adicionais**
- Breakdown por categoria com contadores
- Barras de distribuição por prioridade
- Percentuais visuais com cores diferenciadas

### Sistema de Filtros

- Filtro por categoria (6 opções marítimas)
- Filtro por prioridade (4 níveis)
- Contador de resultados em tempo real
- Interface integrada ao design neon

### Sidebar de Eventos

- Listagem dos próximos eventos ordenados
- Cards com efeito glassmorphism
- Informações completas (data, hora, categoria, prioridade)
- Ações rápidas de edição e exclusão
- Scroll customizado com tema dark

---

## Design System

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
- **Animações**: Transições de 0.4s com `cubic-bezier(0.4, 0, 0.2, 1)`

---

## Stack Tecnológico

### Frontend
```
React          v19.2.0
TypeScript     v5.6.2
Vite           v7.3.1
CSS3           Custom Animations
```

### Backend
```
Node.js        v20+
Express        v4.18.2
TypeScript     v5.3.3
TSX            v4.7.0
CORS           v2.8.5
```

### Ferramentas
```
ESLint         v9.18.0
@types/node    v22.10.5
```

---

## Banco de Dados

Sistema de armazenamento em **arquivo JSON** para persistência local.

### Características

- Zero configuração (sem instalação de banco de dados)
- Arquivo JSON legível para fácil visualização
- Auto-inicialização (cria estrutura automaticamente)
- Persistência entre reinicializações
- Perfeito para demos e desenvolvimento local

### Localização

```
server/data/events.json
```

### Estrutura do Arquivo

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

### Classe JSONStorage

```typescript
storage.getAllEvents()           // Lista todos os eventos
storage.getEventById(id)         // Busca evento específico
storage.createEvent(data)        // Cria novo evento
storage.updateEvent(id, data)    // Atualiza evento existente
storage.deleteEvent(id)          // Remove evento
storage.clearAll()               // Limpa todos os dados
```

---

## Instalação

### Pré-requisitos

- Node.js 20+ 
- npm ou yarn

### Clonando o Repositório

```bash
git clone https://github.com/Shyadou/agenda-inteligente.git
cd agenda-inteligente
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

## Executando o Projeto

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

## Estrutura do Projeto

```
agenda-inteligente/
│
├── src/                          # Frontend React
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Calendar.tsx          # Calendário mensal
│   │   ├── Dashboard.tsx         # Dashboard com métricas
│   │   ├── DateTimePicker.tsx    # Seletor de data/hora
│   │   ├── EventForm.tsx         # Modal de criação/edição
│   │   └── EventList.tsx         # Sidebar de eventos
│   │
│   ├── services/                 # Camada de serviços
│   │   └── api.ts                # Cliente HTTP (axios)
│   │
│   ├── types/                    # Interfaces TypeScript
│   │   └── Event.ts              # Event, EventInput
│   │
│   ├── App.tsx                   # Componente raiz
│   ├── App.css                   # Design system completo
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Reset CSS
│
├── server/                       # Backend Node.js
│   ├── src/
│   │   ├── models/               # Modelos de dados
│   │   │   └── Event.ts          # Interface do evento
│   │   │
│   │   ├── routes/               # Rotas da API
│   │   │   └── events.ts         # CRUD de eventos
│   │   │
│   │   ├── database/             # Camada de persistência
│   │   │   └── storage.ts        # JSONStorage class
│   │   │
│   │   └── index.ts              # Server Express
│   │
│   ├── data/                     # Banco de dados JSON
│   │   └── events.json           # Arquivo de dados
│   │
│   └── package.json              # Dependências backend
│
├── .github/
│   └── copilot-instructions.md   # Instruções do Copilot
│
├── CHANGELOG.md                  # Histórico de versões
├── CONTRIBUTING.md               # Guia de contribuição
├── LICENSE                       # Licença MIT
└── README.md                     # Este arquivo
```

---

## API

### Base URL

```
http://localhost:3001/api
```

### Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/events` | Lista todos os eventos |
| GET | `/events/:id` | Busca evento por ID |
| POST | `/events` | Cria novo evento |
| PUT | `/events/:id` | Atualiza evento |
| DELETE | `/events/:id` | Remove evento |

### Exemplo de Requisição

**POST /api/events**

```json
{
  "title": "Inspeção de Segurança",
  "description": "Verificação trimestral",
  "startDate": "2025-02-15T09:00:00",
  "endDate": "2025-02-15T12:00:00",
  "category": "Segurança",
  "priority": "alta",
  "color": "#ec4899",
  "location": "Porto de Santos"
}
```

### Exemplo de Resposta

```json
{
  "id": "1",
  "title": "Inspeção de Segurança",
  "description": "Verificação trimestral",
  "startDate": "2025-02-15T09:00:00",
  "endDate": "2025-02-15T12:00:00",
  "category": "Segurança",
  "priority": "alta",
  "color": "#ec4899",
  "location": "Porto de Santos"
}
```

---

## Scripts Disponíveis

### Frontend

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
```

### Backend

```bash
npm run dev          # Inicia servidor em modo desenvolvimento (tsx watch)
npm run build        # Compila TypeScript para JavaScript
npm start            # Executa servidor compilado
```

---

## Contribuindo

Contribuições são bem-vindas! Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## Autor

Desenvolvido por [@Shyadou](https://github.com/Shyadou)

---

## Changelog

Para ver o histórico completo de mudanças, consulte o [CHANGELOG.md](CHANGELOG.md)

---

<div align="center">

**Corcovado Agenda Marítima** v2.0.0

Made with TypeScript, React and dedication

</div>
