import { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Dashboard from './components/Dashboard';
import type { Event, EventInput } from './types/Event';
import { eventsAPI } from './services/api';
import './App.css';

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState<string>('todas');
  const [priorityFilter, setPriorityFilter] = useState<string>('todas');

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [events, categoryFilter, priorityFilter]);

  const applyFilters = () => {
    let filtered = events;

    if (categoryFilter !== 'todas') {
      filtered = filtered.filter(e => e.category === categoryFilter);
    }

    if (priorityFilter !== 'todas') {
      filtered = filtered.filter(e => e.priority === priorityFilter);
    }

    setFilteredEvents(filtered);
  };

  const loadEvents = async () => {
    try {
      const data = await eventsAPI.getAll();
      setEvents(data);
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
      alert('Erro ao conectar com o servidor. Certifique-se de que o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEvent = async (eventInput: EventInput) => {
    try {
      const newEvent = await eventsAPI.create(eventInput);
      setEvents([...events, newEvent]);
      setShowForm(false);
      setSelectedDate(undefined);
    } catch (error) {
      console.error('Erro ao criar evento:', error);
      alert('Erro ao criar evento');
    }
  };

  const handleUpdateEvent = async (eventInput: EventInput) => {
    if (!selectedEvent) return;
    
    try {
      const updatedEvent = await eventsAPI.update(selectedEvent.id, eventInput);
      setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
      setShowForm(false);
      setSelectedEvent(undefined);
    } catch (error) {
      console.error('Erro ao atualizar evento:', error);
      alert('Erro ao atualizar evento');
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      await eventsAPI.delete(id);
      setEvents(events.filter(e => e.id !== id));
    } catch (error) {
      console.error('Erro ao deletar evento:', error);
      alert('Erro ao deletar evento');
    }
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedEvent(undefined);
    setShowForm(true);
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setSelectedDate(undefined);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setSelectedEvent(undefined);
    setSelectedDate(undefined);
  };

  const changeMonth = (delta: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-brand">
          <div className="logo-container">
            <svg className="anchor-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M17.8 7.6C18.3 8.5 18.5 9.5 18.5 10.5L17 11C17 9.92 16.67 8.87 16.07 8L17.8 7.6M6.2 7.6L7.93 8C7.33 8.87 7 9.92 7 11L5.5 10.5C5.5 9.5 5.7 8.5 6.2 7.6M11 11H13V22H11V11M18 11L16 11V15C16 17.8 14.4 20.2 12 21.7C9.6 20.2 8 17.8 8 15V11H6V15C6 18.08 7.89 20.82 10.5 22.45C10.65 22.53 10.82 22.58 11 22.6V22.5C11.33 22.67 11.66 22.78 12 22.85C12.34 22.78 12.67 22.67 13 22.5V22.6C13.18 22.58 13.35 22.53 13.5 22.45C16.11 20.82 18 18.08 18 15V11Z"/>
            </svg>
            <span className="company-name">CORCOVADO</span>
          </div>
          <p className="header-subtitle">Gestão Marítima</p>
        </div>
        <button className="btn-new-event" onClick={() => setShowForm(true)}>
          <span className="btn-icon">+</span>
          <span>Novo Evento</span>
        </button>
      </header>

      <div className="filters-bar">
        <div className="filter-group">
          <label>📁 Categoria:</label>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="todas">Todas</option>
            <option value="Operacional">🚢 Operacional</option>
            <option value="Manutenção">🔧 Manutenção</option>
            <option value="Comercial">💼 Comercial</option>
            <option value="Administrativo">📋 Administrativo</option>
            <option value="Inspeção">🔍 Inspeção</option>
            <option value="Treinamento">📚 Treinamento</option>
          </select>
        </div>

        <div className="filter-group">
          <label>🎯 Prioridade:</label>
          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <option value="todas">Todas</option>
            <option value="urgente">🔴 Urgente</option>
            <option value="alta">🟡 Alta</option>
            <option value="normal">🔵 Normal</option>
            <option value="baixa">🟢 Baixa</option>
          </select>
        </div>

        <div className="filter-results">
          {filteredEvents.length} de {events.length} eventos
        </div>
      </div>

      <div className="app-content">
        <div className="main-section">
          <Dashboard events={events} currentMonth={currentDate} />
          
          <div className="calendar-section">
          <div className="month-navigation">
            <button onClick={() => changeMonth(-1)}>←</button>
            <button onClick={() => setCurrentDate(new Date())}>Hoje</button>
            <button onClick={() => changeMonth(1)}>→</button>
          </div>
          <Calendar
            events={filteredEvents}
            currentDate={currentDate}
            onDateClick={handleDateClick}
            onEventClick={handleEventClick}
          />
        </div>
        </div>

        <div className="sidebar">
          <EventList
            events={filteredEvents}
            onEventClick={handleEventClick}
            onDeleteEvent={handleDeleteEvent}
          />
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={handleCancelForm}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <EventForm
              onSubmit={selectedEvent ? handleUpdateEvent : handleCreateEvent}
              onCancel={handleCancelForm}
              initialEvent={selectedEvent}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
