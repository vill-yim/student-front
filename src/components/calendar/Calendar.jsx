import { useState } from "react";
import styles from "../../styles/calendar/calendar.module.css";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    startTime: "09:00",
    endTime: "10:00",
  });

  const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const MONTHS = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysArray = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      const prevDate = new Date(year, month, -i);
      daysArray.unshift({
        date: prevDate,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(year, month, i);
      daysArray.push({
        date: currentDate,
        isCurrentMonth: true,
      });
    }

    const remainingDays = 42 - daysArray.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      daysArray.push({
        date: nextDate,
        isCurrentMonth: false,
      });
    }

    return daysArray;
  };

  const changeMonth = (increment) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1)
    );
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setNewEvent({
      title: "",
      description: "",
      startTime: "09:00",
      endTime: "10:00",
    });
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !newEvent.title) return;

    const dateStr = formatDate(selectedDate);
    setEvents((prev) => ({
      ...prev,
      [dateStr]: [...(prev[dateStr] || []), newEvent],
    }));

    setNewEvent({
      title: "",
      description: "",
      startTime: "09:00",
      endTime: "10:00",
    });
  };

  const handleEventDelete = (dateStr, index) => {
    setEvents((prev) => ({
      ...prev,
      [dateStr]: prev[dateStr].filter((_, i) => i !== index),
    }));
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const hasEvents = (date) => {
    const dateStr = formatDate(date);
    return events[dateStr] && events[dateStr].length > 0;
  };

  const getEventCount = (date) => {
    const dateStr = formatDate(date);
    return events[dateStr]?.length || 0;
  };

  return (
    <div className={styles["content-calendar"]}>
       {selectedDate && (
        <div className={styles["agg-evt"]}>
          {selectedDate && (
            <div className={styles.eventForm}>
              <h3>Agregar evento para {selectedDate.toLocaleDateString()}</h3>
              <form onSubmit={handleEventSubmit}>
                <input
                  type="text"
                  placeholder="Título del evento"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
                <div className={styles.timeInputs}>
                  <div>
                    <label>Hora inicio:</label>
                    <input
                      type="time"
                      value={newEvent.startTime}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, startTime: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label>Hora fin:</label>
                    <input
                      type="time"
                      value={newEvent.endTime}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, endTime: e.target.value })
                      }
                    />
                  </div>
                </div>
                <textarea
                  placeholder="Descripción"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                />
                <button type="submit">Agregar Evento</button>
              </form>

              <div className={styles.eventList}>
                {events[formatDate(selectedDate)]
                  ?.sort((a, b) => a.startTime.localeCompare(b.startTime))
                  .map((event, index) => (
                    <div key={index} className={styles.event}>
                      <div className={styles.eventContent}>
                        <div className={styles.eventTime}>
                          {event.startTime} - {event.endTime}
                        </div>
                        <div className={styles.eventDetails}>
                          <strong>{event.title}</strong>
                          <p>{event.description}</p>
                        </div>
                      </div>
                      <button
                        className={styles.deleteButton}
                        onClick={() =>
                          handleEventDelete(formatDate(selectedDate), index)
                        }
                      >
                        ×
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
     
      <div className={styles.calendar}>
        <div className={styles.header}>
          <div className={styles.monthYear}>
            {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <div className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={() => changeMonth(-1)}
            >
              ←
            </button>
            <button className={styles.navButton} onClick={() => changeMonth(1)}>
              →
            </button>
          </div>
        </div>

        <div className={styles.weekdays}>
          {DAYS.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className={styles.days}>
          {getDaysInMonth(currentDate).map((dayInfo, index) => (
            <div
              key={index}
              className={`${styles.day} 
                ${isToday(dayInfo.date) ? styles.currentDay : ""} 
                ${hasEvents(dayInfo.date) ? styles.hasEvent : ""}`}
              style={{ opacity: dayInfo.isCurrentMonth ? 1 : 0.3 }}
              onClick={() => handleDateClick(dayInfo.date)}
            >
              {dayInfo.date.getDate()}
              {hasEvents(dayInfo.date) && (
                <div className={styles.eventCount}>
                  {getEventCount(dayInfo.date)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};
