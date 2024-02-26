"use client";

import { RegisterUser } from "@/app/madlib/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { ethers } from "ethers";

export const RegisterForm = () => {
  const [signature, setSignature] = useState("");

  const router = useRouter();
  const registerWithSignature = RegisterUser.bind(null, signature);
  const [state, dispatch] = useFormState(registerWithSignature, undefined);

  const getUserSignature = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const message = process.env.SIGNMESSAGE as string;

    let signature = await signer.signMessage(message);
    setSignature(signature);

    const userAddress = ethers.utils.verifyMessage(message, signature);
    console.log(userAddress);
  };

  useEffect(() => {
    if (state?.startsWith("success create")) return router.push("/login");
  }, [state, router]);

  return (
    <>
      <form className="mb-8 w-full" action={dispatch}>
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
            htmlFor="username"
            className="block text-gray-400 text-sm mb-2"
          >
            Username:
          </label>
          <input
            id="username"
            name="username"
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

        <div className="mb-4">
          <label
            htmlFor="metaAccount"
            className="block text-gray-400 text-sm mb-2"
          >
            MetaAccount
          </label>
          <input
            id="metaAccount"
            name="metaAccount"
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
