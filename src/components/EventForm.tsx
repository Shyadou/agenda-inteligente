import { useState } from 'react';
import type { Event, EventInput } from '../types/Event';
import DateTimePicker from './DateTimePicker';

interface EventFormProps {
  onSubmit: (event: EventInput) => void;
  onCancel: () => void;
  initialEvent?: Event;
}

export default function EventForm({ onSubmit, onCancel, initialEvent }: EventFormProps) {
  // Define data/hora padrão como agora
  const getDefaultStartDate = () => {
    const now = new Date();
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15); // Arredonda para próximos 15min
    return now.toISOString().slice(0, 16);
  };

  const getDefaultEndDate = () => {
    const now = new Date();
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15);
    now.setHours(now.getHours() + 1); // 1 hora depois
    return now.toISOString().slice(0, 16);
  };

  const [formData, setFormData] = useState({
    title: initialEvent?.title || '',
    description: initialEvent?.description || '',
    startDate: initialEvent?.startDate 
      ? new Date(initialEvent.startDate).toISOString().slice(0, 16)
      : getDefaultStartDate(),
    endDate: initialEvent?.endDate 
      ? new Date(initialEvent.endDate).toISOString().slice(0, 16)
      : getDefaultEndDate(),
    color: initialEvent?.color || '#0369a1',
    reminder: initialEvent?.reminder || 15,
    category: initialEvent?.category || '',
    location: initialEvent?.location || '',
    priority: initialEvent?.priority || 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>{initialEvent ? 'Editar Evento' : 'Novo Evento'}</h2>
      
      <div className="form-group">
        <label>Título *</label>
        <input
          type="text"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Descrição</label>
        <textarea
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          rows={3}
        />
      </div>

      <div className="form-row">
        <DateTimePicker
          label="Data/Hora Início"
          value={formData.startDate}
          onChange={(value) => setFormData({ ...formData, startDate: value })}
          required
        />

        <DateTimePicker
          label="Data/Hora Fim"
          value={formData.endDate}
          onChange={(value) => setFormData({ ...formData, endDate: value })}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cor</label>
          <input
            type="color"
            value={formData.color}
            onChange={e => setFormData({ ...formData, color: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Lembrete (min antes)</label>
          <input
            type="number"
            value={formData.reminder}
            onChange={e => setFormData({ ...formData, reminder: parseInt(e.target.value) })}
            min="0"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Categoria</label>
          <select
            value={formData.category}
            onChange={e => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Selecione...</option>
            <option value="Operacional">🚢 Operacional</option>
            <option value="Manutenção">🔧 Manutenção</option>
            <option value="Comercial">💼 Comercial</option>
            <option value="Administrativo">📋 Administrativo</option>
            <option value="Inspeção">🔍 Inspeção</option>
            <option value="Treinamento">📚 Treinamento</option>
          </select>
        </div>

        <div className="form-group">
          <label>Prioridade</label>
          <select
            value={formData.priority}
            onChange={e => setFormData({ ...formData, priority: e.target.value as any })}
          >
            <option value="baixa">🟢 Baixa</option>
            <option value="normal">🔵 Normal</option>
            <option value="alta">🟡 Alta</option>
            <option value="urgente">🔴 Urgente</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Local</label>
          <input
            type="text"
            value={formData.location}
            onChange={e => setFormData({ ...formData, location: e.target.value })}
            placeholder="Sala de reuniões, cais, etc."
          />
        </div>

        <div className="form-group">
          <label>Cor</label>
          <input
            type="color"
            value={formData.color}
            onChange={e => setFormData({ ...formData, color: e.target.value })}
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn-cancel">
          Cancelar
        </button>
        <button type="submit" className="btn-submit">
          {initialEvent ? 'Atualizar' : 'Criar'}
        </button>
      </div>
    </form>
  );
}
