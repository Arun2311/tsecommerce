// src/components/Signup.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

interface SignupForm {
  name: string;
  age: number;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupComp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupForm>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupForm> = (data) => {
    console.log('formdata', data);

    navigate('/login')
  };

  const password = watch('password');

  return (
    <div className="container signup-container">
      <h2 className="text-center">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div className="form-group mt-3">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="form-group  mt-3">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            {...register('age', { required: 'Age is required', valueAsNumber: true })}
          />
          {errors.age && <div className="invalid-feedback">{errors.age.message}</div>}
        </div>

        <div className="form-group  mt-3">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            {...register('phone', {
              required: 'Phone is required',
            //   pattern: {
            //     value: /^[0-9]{10}$/,
            //     message: 'Phone number must be 10 digits',
            //   },
            })}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
        </div>

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

        <div className="form-group  mt-3">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            {...register('password', { 
                required: 'Password is required',
                //  minLength: 6
                 })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <div className="form-group mt-3">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword.message}</div>
          )}
        </div>

        <button type="submit" className="mt-5 btn btn-primary btn-block">
          Sign Up
        </button>

        <p className="text-center mt-5">
          Already have an account?{' '}
          <button type="button" className="btn btn-link p-0" onClick={()=>    navigate('/')}>
            Login here
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignupComp;
