"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "../ui/button";
import SignupForm from "./SignupForm";

const AuthForm = () => {
  // State to manage authentication mode: 'login', 'signup', or 'reset'
  const [mode, setMode] = useState("login");

  return (
    <div className="space-y-6">
      {/* Title Section */}
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

      {/* Login Form */}
      {mode === "login" && (
        <>
          <LoginForm />
          <div className="text-center flex justify-between">
            {/* Switch to Signup Mode */}
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode("signup")}
            >
              Need an account? Sign up
            </Button>
            {/* Switch to Reset Password Mode */}
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

      {/* Signup Form */}
      {mode === "signup" && (
        <>
          <SignupForm />
          <div className="text-center">
            {/* Switch to Login Mode */}
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode("login")}
            >
              Already have an account? Log in
            </Button>
          </div>
        </>
      )}

      {/* Reset Password Form Placeholder */}
      {mode === "reset" && <span> Reset password form </span>}
    </div>
  );
};

export default AuthForm;
