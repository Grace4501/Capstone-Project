import React, { useState } from 'react';

const Calendar = () => {
  // State to keep track of the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to generate days of the month
  const generateCalendar = (date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const daysInMonth = endOfMonth.getDate();
    const startingDay = startOfMonth.getDay(); // day of the week the month starts on

    const calendarDays = [];

    // Fill in empty spaces before the 1st day of the month
    for (let i = 0; i < startingDay; i++) {
      calendarDays.push(null);
    }

    // Fill in the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    return calendarDays;
  };

  // Generate the days for the current month
  const days = generateCalendar(currentDate);

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Format the month and year for display
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <div>
      <div className="calendar-header">
        <button onClick={prevMonth}>Previous</button>
        <span>{monthName} {year}</span>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        <div className="weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        <div className="days">
          {days.map((day, index) => (
            <div key={index} className={`day ${day ? '' : 'empty'}`}>
              {day ? day : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calendar;