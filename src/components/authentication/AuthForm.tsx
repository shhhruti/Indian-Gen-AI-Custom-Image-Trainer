"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "../ui/button";
import SignupForm from "./SignupForm";
const AuthForm = () => {
  const [mode, setMode] = useState("login"); // 'login', 'signup', or 'reset'
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {mode === "reset"
            ? "Enter your email below to reset your password"
            : mode === "login"
            ? "Enter your email below to login to your account"
            : "Enter your information below to create an account"}
        </p>
      </div>
      {mode === "login" && (
        <>
          <LoginForm />
          <div className="text-center flex justify-between ">
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode("signup")}
            >
              Need an account? Sign up
            </Button>

            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode("reset")}
            >
              Forgot Password?
            </Button>
          </div>
        </>
      )}
      {mode === "signup" && (
        <>
          <SignupForm />
          <div className="text-center">
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode("login")}
            >
              Already have account? Login up
            </Button>
          </div>
          
        </>
      )}
      {mode === "reset" && <span> Reset password form </span>}
    </div>
  );
};

export default AuthForm;
