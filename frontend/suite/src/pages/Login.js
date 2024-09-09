import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import '../style/stylesheet.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://example.com/api/login", {
        email,
        password,
      });

      // Assuming the response contains a JWT token on successful authentication
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Navigate to the dashboard or another secure route
      }
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.error("Login error", error);
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
        Login
      </Typography>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <form onSubmit={handleLogin}>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
    </div>
  );
};

export default Login;
