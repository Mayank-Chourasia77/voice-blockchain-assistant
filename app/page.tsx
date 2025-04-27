'use client'
import Image from "next/image";
import Microphone from "./microphone";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Siriwave from 'react-siriwave';
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleFluvio = async () => {
    try {
      const res = await fetch("/api/fluvio");
      const data = await res.json();
      setMessage(`Fluvio: ${data.message}`);
    } catch (error) {
      setMessage("Fluvio Error");
    }
  };

  const handleStellar = async () => {
    try {
      const res = await fetch("/api/stellar");
      const data = await res.json();
      setMessage(`Stellar: Wallet created!\nPublic Key: ${data.publicKey}`);
    } catch (error) {
      setMessage("Stellar Error");
    }
  };

  const handleBase = async () => {
    try {
      const res = await fetch("/api/base");
      const data = await res.json();
      setMessage(`Base: Current Block - ${data.blockNumber}`);
    } catch (error) {
      setMessage("Base Error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="mb-8 flex justify-center items-center lg:max-w-5xl lg:w-full">
        <Microphone />
      </div>

      {/* New Buttons */}
      <div className="flex flex-col items-center space-y-4">
        <button onClick={handleFluvio} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Fluvio Message
        </button>

        <button onClick={handleStellar} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Stellar Wallet
        </button>

        <button onClick={handleBase} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Fetch Base Block Number
        </button>

        {/* Display Message */}
        {message && (
          <div className="mt-4 text-center text-lg font-semibold text-gray-800">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}
