import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

// initializeTimes fonksiyonu
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// updateTimes fonksiyonu
function updateTimes(state, action) {
  switch (action.type) {
    case "dateChange":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Şimdilik sabit saatler döndürülüyor
    default:
      return state;
  }
}

function Main() {
  // useReducer ile availableTimes ve dispatch tanımlandı
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>Reservation</h1>
      {/* BookingForm'a dispatch ve availableTimes prop olarak geçiliyor */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
