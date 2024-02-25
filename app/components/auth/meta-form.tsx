"use client";

import { nerd } from "@/app/lib/actions";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

interface MetaFormProps {
  outsideLove: string;
}

const MetaForm = ({ outsideLove }: MetaFormProps) => {
  const router = useRouter();
  const [inner, inMes] = useState("");

  const [state, dispatch] = useFormState(nerd, undefined);

  const getUserSignature = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const love = outsideLove;

    if (!love) return inMes("failed undefined");

    let signature = await signer.signMessage(love);

    dispatch(signature);
  };

  useEffect(() => {
    if (state?.startsWith("status ok")) router.push("/dashboard");
  }, [state, router]);

  return (
    <div className="flex items-center justify-center flex-col bg-black text-white p-3 rounded-lg mt-10">
      <h2 className="text-md font-semibold mb-3">Metamask Account? Sign in?</h2>
      <div className="flex flex-col w-full">
        <button
          onClick={getUserSignature}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Enter
        </button>
      </div>

      {state ||
        (inner && (
          <div>
            <h2>{state || inner}</h2>
          </div>
        ))}
    </div>
  );
};

export default MetaForm;
