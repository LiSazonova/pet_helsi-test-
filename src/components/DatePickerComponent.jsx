// import { useState } from 'react';
import '../styles/components/DatePicker.scss';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';

registerLocale('uk', uk);
setDefaultLocale('uk');

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  return (
    <div className="datepicker-container">
      <div className="datepicker-input-wrapper">
        <span className="calendar-icon" />
        <ReactDatePicker
          showIcon
          selected={selectedDate}
          onChange={onDateChange}
          className="datepicker-input"
          placeholderText="Виберіть дату"
          locale="uk"
          dateFormat="eee, d MMMM"
          showMonthDropdown
          showYearDropdown
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
