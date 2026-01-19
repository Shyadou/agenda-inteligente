import type { Event } from '../types/Event';

interface DashboardProps {
  events: Event[];
  currentMonth: Date;
}

export default function Dashboard({ events, currentMonth }: DashboardProps) {
  const currentMonthEvents = events.filter(event => {
    const eventDate = new Date(event.startDate);
    return eventDate.getMonth() === currentMonth.getMonth() &&
           eventDate.getFullYear() === currentMonth.getFullYear();
  });

  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.startDate);
    const now = new Date();
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    return eventDate > now && eventDate <= sevenDaysFromNow;
  });

  const eventsByCategory = currentMonthEvents.reduce((acc, event) => {
    const cat = event.category || 'Sem Categoria';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const eventsByPriority = currentMonthEvents.reduce((acc, event) => {
    const pri = event.priority || 'normal';
    acc[pri] = (acc[pri] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const priorityLabels: Record<string, string> = {
    'baixa': 'BAIXA',
    'normal': 'NORMAL',
    'alta': 'ALTA',
    'urgente': 'URGENTE'
  };

  const categoryColors: Record<string, string> = {
    'Operacional': '#0369a1',
    'Manutenção': '#0284c7',
    'Segurança': '#dc2626',
    'Ambiental': '#059669',
    'Administrativo': '#7c3aed',
    'Treinamento': '#ea580c'
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard - {monthNames[currentMonth.getMonth()]}</h2>
      
      <div className="dashboard-grid">
        <div className="dashboard-card total" data-tooltip="Total de eventos neste mês">
          <div className="card-content">
            <p className="card-label">Total de Eventos</p>
            <h3>{currentMonthEvents.length}</h3>
          </div>
        </div>

        <div className="dashboard-card upcoming" data-tooltip="Eventos nos próximos 7 dias">
          <div className="card-content">
            <p className="card-label">Próximos 7 Dias</p>
            <h3>{upcomingEvents.length}</h3>
          </div>
        </div>

        <div className="dashboard-card urgent" data-tooltip="Eventos com prioridade urgente">
          <div className="card-content">
            <p className="card-label">Urgentes</p>
            <h3>{eventsByPriority['urgente'] || 0}</h3>
          </div>
        </div>

        <div className="dashboard-card high" data-tooltip="Eventos com prioridade alta">
          <div className="card-content">
            <p className="card-label">Alta Prioridade</p>
            <h3>{eventsByPriority['alta'] || 0}</h3>
          </div>
        </div>
      </div>

      {Object.keys(eventsByCategory).length > 0 && (
        <div className="dashboard-section">
          <h3>Por Categoria</h3>
          <div className="category-list">
            {Object.entries(eventsByCategory).map(([category, count]) => (
              <div 
                key={category} 
                className="category-item" 
                style={{borderLeftColor: categoryColors[category] || '#0369a1'}}
                data-tooltip={`${count} evento${count !== 1 ? 's' : ''} na categoria ${category}`}
              >
                <span className="category-name">{category}</span>
                <span className="category-badge">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {Object.keys(eventsByPriority).length > 0 && (
        <div className="dashboard-section">
          <h3>Por Prioridade</h3>
          <div className="priority-bars">
            {Object.entries(eventsByPriority).map(([priority, count]) => (
              <div key={priority} className="priority-bar-item">
                <div className="priority-bar-label">
                  <span>{priorityLabels[priority]}</span>
                  <span className="priority-bar-count">{count}</span>
                </div>
                <div className="priority-bar-bg">
                  <div 
                    className={`priority-bar-fill priority-${priority}`}
                    style={{ width: `${(count / currentMonthEvents.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
