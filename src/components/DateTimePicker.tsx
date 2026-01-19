import { useState, useRef, useEffect } from 'react';

interface DateTimePickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  required?: boolean;
}

export default function DateTimePicker({ value, onChange, label, required }: DateTimePickerProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : new Date());
  const [time, setTime] = useState(value ? value.slice(11, 16) : '09:00');
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
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

    return { days, month, year };
  };

  const { days, month, year } = getDaysInMonth(selectedDate);

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const dateStr = date.toISOString().slice(0, 10);
    const newValue = `${dateStr}T${time}`;
    onChange(newValue);
    setShowCalendar(false);
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    const dateStr = selectedDate.toISOString().slice(0, 10);
    onChange(`${dateStr}T${newTime}`);
  };

  const changeMonth = (delta: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + delta);
    setSelectedDate(newDate);
  };

  const formatDisplayDate = () => {
    if (!value) return 'Selecione uma data';
    const date = new Date(value);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === month;
  };

  return (
    <div className="datetime-picker" ref={calendarRef}>
      <label>{label} {required && '*'}</label>
      <div className="datetime-input" onClick={() => setShowCalendar(!showCalendar)}>
        <span className="datetime-value">{formatDisplayDate()}</span>
      </div>

      {showCalendar && (
        <div className="calendar-popup">
          <div className="calendar-header">
            <button type="button" onClick={() => changeMonth(-1)}>←</button>
            <span>{monthNames[month]} {year}</span>
            <button type="button" onClick={() => changeMonth(1)}>→</button>
          </div>

          <div className="calendar-weekdays">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="calendar-days">
            {days.map((day, index) => (
              <div
                key={index}
                className={`
                  calendar-day-item
                  ${!isCurrentMonth(day) ? 'other-month' : ''}
                  ${isToday(day) ? 'today' : ''}
                  ${isSelected(day) ? 'selected' : ''}
                `}
                onClick={() => handleDateClick(day)}
              >
                {day.getDate()}
              </div>
            ))}
          </div>

          <div className="time-selector">
            <label>Horário:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => handleTimeChange(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
