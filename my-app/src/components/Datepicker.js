import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    document.getElementById("theDate").value = new Date()
      .toISOString()
      .substring(0, 10);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        width: "300px",
        margin: "auto",
      }}>
      <div>react-datepicker VS input type="date"</div>
      input type="date" <input type="date" id="theDate"></input>
      <div style={{ width: "300px" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat={"MM/dd/yyyy"}
          maxDate={new Date()}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
      </div>
    </div>
  );
};

export default Datepicker;
