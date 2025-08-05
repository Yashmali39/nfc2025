import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useAuth } from './AuthContext';

const handleGoogleLogin = () => {
    window.location.href = "https://47cd8359b069.ngrok-free.app/api/auth/google/";
  };
const Signin = () => {

  const {setIsLoggedIn, setUser} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    try {

      const response = await fetch(`https://47cd8359b069.ngrok-free.app/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        // credentials: "include"
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User created:", result);
        alert("User created successfully!");
        reset(); // clear form
        
        navigate('/login');
        alert("User Created");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='M flex flex-col justify-center items-center p-3 gap-10 shadow-md lg:h-[550px] w-[550px] border border-slate-300 rounded-md'>
        <div className='lg:text-4xl font-bold'>
          Create Your Account
        </div>
        <div className='flex gap-[20px]'>
          
          <div>
            <input
              type="text"
              className='p-1 lg:w-[500px] border border-slate-300 rounded-xl'
              placeholder="Full Name"
              {...register("full_name", {
                required: "Full Name is required",
                minLength: { value: 4, message: 'Minimum length is 4' },
                maxLength: { value: 30, message: 'Maximum length is 30' }
              })}
            />
            {errors.full_name && <p className='text-red-600'>{errors.full_name.message}</p>}
          </div>
        </div>
        <div>
          <input
            className='p-1 lg:w-[500px] border border-slate-300 rounded-xl'
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            })}
          />
          {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            className='p-1 lg:w-[500px] border border-slate-300 rounded-xl'
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 4, message: 'Minimum length is 4' },
              maxLength: { value: 10, message: 'Maximum length is 10' }
            })}
          />
          {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
        </div>

        
        <div className='font-bold text-l'>
          Already Have an Account? <button onClick={handleGoogleLogin} className='text-blue-600'>Login</button>
        </div>

        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 lg:w-[500px]'>Create User</button>
      </form>
    </div>
  )
}

export default Signin;
