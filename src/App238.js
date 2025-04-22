//need to learn later
import React, { useState } from 'react';

const App238 = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setBirthDate(selectedDate);
    if (selectedDate) {
      const ageData = calculateAge(selectedDate);
      setAge(ageData);
    } else {
      setAge(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🎂 Age Calculator</h2>
      <input
        type="date"
        value={birthDate}
        onChange={handleChange}
        style={styles.input}
      />
      {age && (
        <div style={styles.result}>
          <p>
            You are <strong>{age.years}</strong> years,{' '}
            <strong>{age.months}</strong> months, and{' '}
            <strong>{age.days}</strong> days old.
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '40px'
  },
  input: {
    fontSize: '16px',
    padding: '8px',
    marginTop: '10px'
  },
  result: {
    marginTop: '20px',
    fontSize: '18px'
  }
};

export default App238;