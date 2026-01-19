# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o **Corcovado Gestão Marítima**! 

## 📋 Código de Conduta

Este projeto e todos os participantes estão sob um código de conduta. Ao participar, espera-se que você mantenha este código.

## 🚀 Como Posso Contribuir?

### Reportando Bugs

Antes de criar um relatório de bug:
- **Verifique** se o bug já não foi reportado
- **Colete** informações sobre o bug (versão, navegador, SO)
- **Descreva** os passos para reproduzir o problema

**Template de Bug Report:**
```markdown
**Descrição**
Descrição clara e concisa do bug.

**Para Reproduzir**
Passos para reproduzir o comportamento:
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
Descrição do que você esperava que acontecesse.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente**
- OS: [ex: Windows 11]
- Navegador: [ex: Chrome 120]
- Versão: [ex: 2.0.0]
```

### Sugerindo Melhorias

**Template de Feature Request:**
```markdown
**Problema Relacionado**
Descrição clara do problema. Ex: "Sempre me frustro quando [...]"

**Solução Desejada**
Descrição clara da solução que você gostaria.

**Alternativas Consideradas**
Outras soluções ou features que você considerou.

**Contexto Adicional**
Qualquer outro contexto ou screenshots.
```

### Pull Requests

1. **Fork** o repositório
2. **Crie** uma branch para sua feature (`git checkout -b feature/MinhaNovaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona MinhaNovaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaNovaFeature`)
5. **Abra** um Pull Request

### Diretrizes de Código

#### TypeScript
```typescript
// ✅ BOM
interface UserData {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<UserData> {
  // implementação
}

// ❌ RUIM
function getUser(id: any): any {
  // implementação
}
```

#### React
```tsx
// ✅ BOM - Componente funcional com tipos
interface Props {
  title: string;
  onClose: () => void;
}

export default function Modal({ title, onClose }: Props) {
  return <div>{title}</div>;
}

// ❌ RUIM - Sem tipos
export default function Modal(props) {
  return <div>{props.title}</div>;
}
```

#### CSS
```css
/* ✅ BOM - Seguindo o design system */
.component {
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 217, 255, 0.2);
}

/* ❌ RUIM - Cores hardcoded aleatórias */
.component {
  background: #123456;
  border: 1px solid red;
}
```

### Padrões de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```
feat: adiciona sistema de notificações
fix: corrige bug no calendário
docs: atualiza README com novas instruções
style: ajusta espaçamento no header
refactor: refatora componente Dashboard
test: adiciona testes para EventForm
chore: atualiza dependências
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (não afeta o código)
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Manutenção

### Design System

Ao adicionar novos componentes, siga o design system:

**Cores:**
```css
--neon-cyan: #00d9ff
--neon-blue: #0ea5e9
--urgent: #ec4899
--high: #f59e0b
--normal: #00d9ff
--low: #10b981
```

**Glassmorphism:**
```css
background: rgba(26, 31, 58, 0.6);
backdrop-filter: blur(20px);
border: 1px solid rgba(0, 217, 255, 0.2);
```

**Efeitos Neon:**
```css
box-shadow: 0 0 20px rgba(0, 217, 255, 0.4);
```

## 🧪 Testes

Antes de submeter um PR:
```bash
# Rode o linter
npm run lint

# Teste o build
npm run build

# Teste manualmente
npm run dev
```

## 📝 Documentação

- Documente novas funcionalidades no README
- Atualize o CHANGELOG
- Adicione comentários em código complexo
- Use JSDoc para funções e componentes

## ❓ Dúvidas?

Abra uma [Issue](../../issues) com a tag `question`.

---

**Obrigado pela sua contribuição! ⚓**
