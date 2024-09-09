import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import '../style/stylesheet.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("https://example.com/api/register", {
        email,
        password,
        name,
      });

      // Assuming the response contains a success message or user data
      if (response.data.success) {
        navigate("/login"); // Redirect to the login page or another route
      }
    } catch (error) {
      setErrorMessage("Failed to register. Please try again.");
      console.error("Registration error", error);
    }
  };

  return (
    <div className="login">
    <Box
      sx={{
        width: 300,
        margin: "auto",
        padding: 2,
        boxShadow: 3,
        borderRadius: 1,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <form onSubmit={handleRegister}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </form>
    </Box>
    </div>
  );
};

export default Register;
