"use client";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const handleClick = async () => {
    const res = await fetch("/api/create-checkout-session", { method: "POST" });
    const { id } = await res.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-950 rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center border border-gray-800">
        <Image src="https://stripe.com/img/v3/home/twitter.png" alt="Stripe Logo" width={60} height={60} className="mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2 text-center">Buy Pro Plan</h1>
        <p className="text-gray-400 mb-6 text-center">Unlock all premium features for just <span className="text-green-400 font-semibold">$10</span>.<br/>Secure payment powered by Stripe.</p>
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}