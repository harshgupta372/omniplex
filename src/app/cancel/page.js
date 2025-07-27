"use client";
import Link from "next/link";

export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-950 rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center border border-gray-800">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-3xl font-bold text-white mb-2 text-center">Payment Cancelled</h1>
        <p className="text-gray-400 mb-6 text-center">Your payment was not completed. You can try again anytime.</p>
        <Link href="/checkout" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-red-400">
          Try Again
        </Link>
      </div>
    </div>
  );
} 