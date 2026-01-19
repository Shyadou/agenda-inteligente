import type { Event, EventInput } from '../types/Event';

const API_URL = 'http://localhost:3001/api';

export const eventsAPI = {
  async getAll(): Promise<Event[]> {
    const response = await fetch(`${API_URL}/events`);
    const data = await response.json();
    return data.map((event: any) => ({
      ...event,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate)
    }));
  },

  async getById(id: string): Promise<Event> {
    const response = await fetch(`${API_URL}/events/${id}`);
    const data = await response.json();
    return {
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate)
    };
  },

  async create(event: EventInput): Promise<Event> {
    const response = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
    const data = await response.json();
    return {
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate)
    };
  },

  async update(id: string, event: EventInput): Promise<Event> {
    const response = await fetch(`${API_URL}/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
    const data = await response.json();
    return {
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate)
    };
  },

  async delete(id: string): Promise<void> {
    await fetch(`${API_URL}/events/${id}`, {
      method: 'DELETE'
    });
  }
};
