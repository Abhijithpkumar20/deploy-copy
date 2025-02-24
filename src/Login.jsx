import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <Link to='/home'>
        <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;