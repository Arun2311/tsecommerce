// src/components/Login.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

type LoginForm = {
  email: string;
  password: string;
}

const LoginComp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log('Formdata', data);
  };
  const navigate = useNavigate();


  return (
    <div className="container login-container">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">

        <div className="form-group  mt-3">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', {
              required: 'Email is required',
            //   pattern: {
            //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            //     message: 'Invalid email address',
            //   },
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <button type="submit" className=" mt-3 btn btn-primary btn-block">
          Login
        </button>


        {/* navigate */}

        <p className="text-center mt-5">
          Don't  have an account?{' '}
          <button type="button" className="btn btn-link p-0" onClick={()=>    navigate('/register')}>
            register here
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginComp;
