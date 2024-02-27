import { LogInForm } from "@/app/components/auth/login-form-sad";
import MetaForm from "@/app/components/auth/meta-form";
import Link from "next/link";
import React from "react";

const LoginPage = () => {


  const message = process.env.SIGNMESSAGE as string



  return (
    <div className="max-w-[500px] w-full mx-auto p-8 rounded-lg border-2 border-gray-800 shadow-lg">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Login</h2>

      {/* Login Form */}
      <LogInForm />

      {/* Panel */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">Need an account?</h3>
          <p>
            Come through{" "}
            <Link
              href="/register"
              className="font-bold text-shadow-lg hover:text-red-500"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>

      {/* MetaForm */}
      <MetaForm  outsideLove={message}/>
      
    </div>
  );
};

export default LoginPage;
