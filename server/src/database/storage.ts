import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Event } from '../models/Event.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '../../data/events.json');

interface Database {
  events: Event[];
  lastId: number;
}

class JSONStorage {
  private ensureDataFile(): void {
    const dataDir = path.dirname(DB_PATH);
    
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    if (!fs.existsSync(DB_PATH)) {
      const initialData: Database = {
        events: [
          {
            id: '1',
            title: 'Reuniao com paixao',
            description: 'alinhamento de IA usado em codigo via PROMPT',
            startDate: '2026-02-12T16:30:00',
            endDate: '2026-02-12T17:30:00',
            color: '#0ea5e9',
            category: 'Reuniao com paixao',
            priority: 'normal',
            location: 'Sala de Reuniões'
          }
        ],
        lastId: 1
      };
      fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
    }
  }

  private readData(): Database {
    this.ensureDataFile();
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  }

  private writeData(data: Database): void {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  }

  getAllEvents(): Event[] {
    const data = this.readData();
    return data.events;
  }

  getEventById(id: string): Event | undefined {
    const data = this.readData();
    return data.events.find(event => event.id === id);
  }

  createEvent(eventData: Omit<Event, 'id'>): Event {
    const data = this.readData();
    data.lastId += 1;
    
    const newEvent: Event = {
      ...eventData,
      id: String(data.lastId)
    };

    data.events.push(newEvent);
    this.writeData(data);
    
    return newEvent;
  }

  updateEvent(id: string, eventData: Omit<Event, 'id'>): Event | null {
    const data = this.readData();
    const index = data.events.findIndex(event => event.id === id);

    if (index === -1) {
      return null;
    }

    data.events[index] = {
      ...eventData,
      id
    };

    this.writeData(data);
    return data.events[index];
  }

  deleteEvent(id: string): boolean {
    const data = this.readData();
    const initialLength = data.events.length;
    
    data.events = data.events.filter(event => event.id !== id);
    
    if (data.events.length < initialLength) {
      this.writeData(data);
      return true;
    }

    return false;
  }

  clearAll(): void {
    const data: Database = {
      events: [],
      lastId: 0
    };
    this.writeData(data);
  }
}

export const storage = new JSONStorage();
