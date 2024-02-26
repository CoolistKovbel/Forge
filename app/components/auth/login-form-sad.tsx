"use client";

import { AuthenticateUser } from "@/app/madlib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export const LogInForm = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      
      const res = await fetch("/api/login", {
        method: 'POST',
        body: formData
      })

      const dRes  = await res.json()

      console.log(dRes)


    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form className="mb-8 w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-400 text-sm mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 float-right">
          Login
        </button>

      </form>
    </>
  );
};
