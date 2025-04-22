// 🔹 What is the Date object in JavaScript?
// Ans: The Date object in JavaScript is used to work with dates and times. It lets you:
// 1. Create new date/time values
// 2. Get or set date components (year, month, day, etc.)
// 3. Format or manipulate dates
// 4. Compare dates


//js method used for making clock:
// str.padStart(targetLength, padString)
// targetLength: The total length you want the final string to be.
// padString: The string to add at the beginning (usually '0' when formatting time).

import React, { useEffect } from "react";

const App236 = () => {
  //this useEffect is for understanding Date() object
  useEffect(() => {
    // const now = new Date(); // Current date and time
    // console.log("now:", now);
    // const birthday = new Date("1995-12-17T03:24:00"); // Specific date
    // console.log("birthday:", birthday);

    //basic method:
    const time = new Date();
    console.log("year:", time.getFullYear()); //e.g. 2025
    console.log("month:", time.getMonth()); //// 0-11 (Jan is 0)
    console.log("Day of month:", time.getDate()); // Day of the month (1-31)
    console.log("Day of week:", time.getDay()); // Day of the week (0 = Sunday)
    console.log("sec:", time.getTime()); // Milliseconds since Jan 1, 1970
    console.log("hours:", time.getHours());
    console.log("minutes:", time.getMinutes());
    console.log("sec:", time.getSeconds());
}, []);
  return (
    <>
      <p>Date Object manupulation</p>
    </>
  );
};

export default App236;
