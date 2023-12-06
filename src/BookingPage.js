import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./MockApi";
import { useNavigate } from "react-router-dom";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload.times;

    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate(); // Move this line here

  // State variables
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fetch available times on component mount
  useEffect(() => {
    fetchAvailableTimes(selectedDate);
  }, [selectedDate]);

  // Function to fetch available times
  const fetchAvailableTimes = (date) => {
    fetchAPI(date)
      .then(updatedTimes => {
        dispatch({ type: 'UPDATE_TIMES', payload: { times: updatedTimes } });
      })
      .catch(error => {
        console.error(error);
        // Handle the error, e.g., show an error message to the user
      });
  };

  // Function to handle date change
  const handleDateChange = (e) => {
    if (e.target && e.target.value !== undefined) {
      const newDate = e.target.value;
      setSelectedDate(newDate);
    }
  };

  // Function to handle form submission
  const submitForm = async (formData) => {
    try {
      if (formData.guests <= 10) {
      await submitAPI(formData);
      setFormSubmitted(true);
      // After successful submission, refresh available times for the selected date
      fetchAvailableTimes(selectedDate);
      navigate("/confirmed-booking"); // Navigate here
      }  else {
        console.error("Number of guests exceeds 10")
      }
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  // Render the BookingForm component with appropriate props
  return (
    <div>
      <h3>Make your reservation now!</h3>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        formSubmitted={formSubmitted}
        onSubmit={submitForm}
      />
    </div>
  );
};

export default BookingPage;




