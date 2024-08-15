import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Importe o arquivo de estilos
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://your-api-url.com/login', {
        email,
        password,
      });

      // Supondo que o backend retorne um token de autenticação
      const token = response.data.token;
      localStorage.setItem('authToken', token); // Armazena o token localmente
      navigate('/'); // Redireciona para a página principal após o login
    } catch (err) {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
