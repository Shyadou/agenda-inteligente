import { Router, Request, Response } from 'express';
import { Event, EventInput } from '../models/Event.js';
import { storage } from '../database/storage.js';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const events = storage.getAllEvents();
  res.json(events);
});

router.get('/:id', (req: Request, res: Response) => {
  const event = storage.getEventById(req.params.id);
  
  if (!event) {
    return res.status(404).json({ error: 'Evento não encontrado' });
  }
  
  res.json(event);
});

router.post('/', (req: Request, res: Response) => {
  const eventInput: EventInput = req.body;
  
  if (!eventInput.title || !eventInput.startDate || !eventInput.endDate) {
    return res.status(400).json({ error: 'Dados inválidos: title, startDate e endDate são obrigatórios' });
  }

  const eventData = {
    title: eventInput.title,
    description: eventInput.description,
    startDate: eventInput.startDate,
    endDate: eventInput.endDate,
    color: eventInput.color || '#3b82f6',
    reminder: eventInput.reminder,
    category: eventInput.category,
    location: eventInput.location,
    priority: eventInput.priority
  };
  
  const newEvent = storage.createEvent(eventData);
  res.status(201).json(newEvent);
});

router.put('/:id', (req: Request, res: Response) => {
  const eventInput: EventInput = req.body;

  const eventData = {
    title: eventInput.title,
    description: eventInput.description,
    startDate: eventInput.startDate,
    endDate: eventInput.endDate,
    color: eventInput.color || '#3b82f6',
    reminder: eventInput.reminder,
    category: eventInput.category,
    location: eventInput.location,
    priority: eventInput.priority
  };

  const updatedEvent = storage.updateEvent(req.params.id, eventData);

  if (!updatedEvent) {
    return res.status(404).json({ error: 'Evento não encontrado' });
  }

  res.json(updatedEvent);
});

router.delete('/:id', (req: Request, res: Response) => {
  const success = storage.deleteEvent(req.params.id);

  if (!success) {
    return res.status(404).json({ error: 'Evento não encontrado' });
  }

  res.status(204).send();
});

export default router;
