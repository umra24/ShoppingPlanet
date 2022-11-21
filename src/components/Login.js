import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <div>
        <h2>SIGN IN</h2>
        <form>
          <input placeholder="username" />
          <input placeholder="password" />
          <button>LOGIN</button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;