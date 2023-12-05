import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Access the selected date from the payload
      const selectedDate = action.payload.date;

      // Replace this logic with your actual business logic to get available times for the selected date
      const newTimes = getAvailableTimesForDate(selectedDate);
      return newTimes;

    default:
      return state;
  }
};

const getAvailableTimesForDate = (selectedDate) => {
  // Replace this logic with your actual business logic
  // For simplicity, returning a static array
  return ["17 : 00", "18 : 00", "19 : 00", "20 : 00", "21 : 00", "22 : 00"];
};

const BookingPage = () => {
  // Initial state for available times
  const initialAvailableTimes = ["17 : 00", "18 : 00", "19 : 00", "20 : 00", "21 : 00", "22 : 00"];

  // Use reducer hook to manage available times state
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialAvailableTimes);

  // State variables for date and form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to handle date changes and update available times
  const handleDateChange = (e) => {
    // Check if e.target and e.target.value are defined before accessing the value property
    if (e.target && e.target.value !== undefined) {
      const selectedDate = e.target.value;

      // Update available times and include the selected date in the dispatch parameter
      dispatch({ type: 'UPDATE_TIMES', payload: { date: selectedDate } });
    }
  };


  // useEffect to reset formSubmitted after a short delay
  useEffect(() => {
    if (formSubmitted) {
      const timeoutId = setTimeout(() => {
        setFormSubmitted(false);
      }, 2000);

      // Cleanup the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [formSubmitted]);

  return (
    <div>
      <h3>Make your reservation now!</h3>
      {/* Pass availableTimes and handleDateChange as props to BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        formSubmitted={formSubmitted}
      />
    </div>
  );
};

export default BookingPage;

