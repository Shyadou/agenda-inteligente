export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  color: string;
  reminder?: number; // minutos antes do evento
  category?: string;
  location?: string;
  priority?: 'baixa' | 'normal' | 'alta' | 'urgente';
}

export interface EventInput {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  color?: string;
  reminder?: number;
  category?: string;
  location?: string;
  priority?: 'baixa' | 'normal' | 'alta' | 'urgente';
}
