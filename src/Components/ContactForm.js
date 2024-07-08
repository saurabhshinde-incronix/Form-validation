import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required.';

    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid.';
    }

    if (!formData.message) tempErrors.message = 'Message is required.';

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <Box sx={{ width: '400px', margin: 'auto', padding: '2rem', boxShadow: 3, borderRadius: 2 }}>
      {submitted ? (
        <Typography variant="h6" color="primary" align="center">
          Thank you! Your message has been submitted.
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            helperText={errors.name}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            helperText={errors.message}
            multiline
            rows={4}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
};

export default ContactForm;
