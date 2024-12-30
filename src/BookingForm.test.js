import React from 'react';

import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders static text in BookingForm", () => {
  // Formu render et
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  // Statik metinlerin render edildiğini doğrula
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});
