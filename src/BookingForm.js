import React, { useState } from "react";

const BookingForm = ({ availableTimes, onDateChange, onSubmit, formSubmitted }) => {
  // State variables for form fields
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Guests:", guests);
    console.log("Occasion:", occasion);

    // Additional logic for handling form submission can be added here
    if (onSubmit) {
      onSubmit({
        date,
        time,
        guests,
        occasion,
      });
    }

    clearForm();
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");

    // Form submitted state is managed externally, clearForm should not change it
  };

  const isFormValid = date !== "" && time !== "" && guests !== "" && occasion !== "";

  // Function to handle date changes and update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Call the onDateChange prop from Main component to update available times
    onDateChange(selectedDate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'grid', margin: 'auto', maxWidth: '400px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
        className="formInput"
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
  className="formInput"
  id="res-time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
>
{availableTimes.map((availableTime, index) => (
    <option key={index} >{availableTime}</option>
  ))}
</select>

<label htmlFor="guests">Number of guests</label>
        <input
          className="formInput"
          type="number"
          placeholder="1"
          min={1}
          max={10}
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
 />

 <label htmlFor="occasion">Occasion</label>
   <select
          className="formInput"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
   >
          <option>Birthday</option>
          <option>Anniversary</option>
  </select>

        <input
        className="button"
         type="submit"
         value={'Make your reservation'}
          disabled={!isFormValid}
         onClick={() =>onSubmit({ date, time, guests, occasion})}
         />
        {formSubmitted && <p>Form submitted successfully!</p>}
      </form>
    </div>
  );
};

export default BookingForm;




