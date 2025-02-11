'use client'
import React, { useState } from 'react'

const AuthForm = () => {
  const [mode, setMode] = useState('login'); // 'login', 'signup', or 'reset'
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === 'reset'
            ? 'Reset Password'
            : mode === 'login'
            ? 'Login'
            : 'Sign Up'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {mode === 'reset'
            ? 'Enter your email below to reset your password'
            : mode === 'login'
            ? 'Enter your email below to login to your account'
            : 'Enter your information below to create an account'}
        </p>
      </div>
      {
        mode === 'login' && <span> LoginForm </span>
      }
       {
        mode === 'signup' && <span> SignupForm </span>
      }
       {
        mode === 'reset' && <span> Reset passowrd form </span>
      }
    </div>
  )
}

export default AuthForm