"use client";
import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-800">
      <div className="bg-green-950 rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center border border-green-800">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-2 text-center">Payment Successful!</h1>
        <p className="text-green-300 mb-6 text-center">Thank you for your purchase. Your Pro Plan is now active.</p>
        <Link href="/" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-green-400">
          Go to Home
        </Link>
      </div>
    </div>
  );
}