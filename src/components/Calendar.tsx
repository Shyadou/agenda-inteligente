import type { Event } from '../types/Event';

interface CalendarProps {
  events: Event[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
  onEventClick: (event: Event) => void;
}

export default function Calendar({ events, currentDate, onDateClick, onEventClick }: CalendarProps) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days: Date[] = [];
  const current = new Date(startDate);

  while (days.length < 42) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const getEventsForDay = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.startDate);
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === month;
  };

  return (
    <div className="calendar" key={`${year}-${month}`}>
      <div className="calendar-header">
        <h2>{monthNames[month]} {year}</h2>
      </div>

      <div className="calendar-weekdays">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => {
          const dayEvents = getEventsForDay(day);
          return (
            <div
              key={index}
              className={`calendar-day ${!isCurrentMonth(day) ? 'other-month' : ''} ${isToday(day) ? 'today' : ''}`}
              onClick={() => onDateClick(day)}
            >
              <span className="day-number">{day.getDate()}</span>
              <div className="day-events">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className="event-item"
                    style={{ backgroundColor: event.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick(event);
                    }}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
