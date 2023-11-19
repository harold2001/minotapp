import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../stylesheets/Calendario.css"


export default function Calendario() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date)
  }

  return (
    <div className="mainContainer d-flex flex-column gap-3 justify-content-center align-items-center">
      <Calendar onChange={onChange} value={date} />
      <small className="text-white">Date selected: {date.toLocaleDateString()}</small>
    </div>
  );
}

