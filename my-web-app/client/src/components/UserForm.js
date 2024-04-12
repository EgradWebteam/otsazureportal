import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    motherName: ''
  });

  const handleChange = (e) => {
    let value = e.target.value;
  
    // Format phone number as XXXX-XXXXXX
    if (e.target.name === 'phoneNumber') {
      // Remove any non-numeric characters
      value = value.replace(/\D/g, '');
      // Add dashes for readability
      if (value.length > 4 && value.length <= 10) {
        value = value.replace(/^(\d{4})(\d{0,6})$/, '$1-$2');
      } else if (value.length > 10) {
        value = value.replace(/^(\d{4})(\d{6})(.*)$/, '$1-$2-$3');
      }
    }
  
    setFormData({ ...formData, [e.target.name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('User inserted successfully');
        // Clear form fields
        setFormData({
          username: '',
          phoneNumber: '',
          motherName: ''
        });
      } else {
        console.error('Error inserting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error inserting user:', error.message);
    }
  };

  return (
    <div className="App">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
