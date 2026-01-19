import type { Event } from '../types/Event';

interface EventListProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  onDeleteEvent: (id: string) => void;
}

export default function EventList({ events, onEventClick, onDeleteEvent }: EventListProps) {
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="event-list">
      <h2>Próximos Eventos</h2>
      {sortedEvents.length === 0 ? (
        <p className="no-events">Nenhum evento cadastrado</p>
      ) : (
        <div className="events">
          {sortedEvents.map(event => (
            <div
              key={event.id}
              className="event-card"
              style={{ borderLeft: `4px solid ${event.color}` }}
            >
              <div className="event-content" onClick={() => onEventClick(event)}>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <span data-tooltip="Data e hora do evento">{formatDate(event.startDate)}</span>
                  {event.category && <span data-tooltip={`Categoria: ${event.category}`}>{event.category}</span>}
                  {event.location && <span data-tooltip="Localização">{event.location}</span>}
                  {event.priority && <span data-tooltip={`Prioridade: ${event.priority}`}>{event.priority}</span>}
                </div>
              </div>
              <button
                className="delete-btn"
                data-tooltip="Excluir evento"
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm('Deseja realmente excluir este evento?')) {
                    onDeleteEvent(event.id);
                  }
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
