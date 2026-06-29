"use client";
import React from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import('./components/lanyard'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Lanyard lives outside content so it stays fixed */}
      <Lanyard />

      {/* Content wrapper - Lanyard sits behind this z-index 10 layer */}
      <div className="relative z-10 pointer-events-auto">
        <section className="h-screen flex flex-col justify-center px-12">
          <h1 className="text-8xl font-bold tracking-tighter">THE CAT GUY</h1>
          <p className="text-2xl text-zinc-500 mt-4">Editor & Motion Designer</p>
        </section>

        <section className="max-w-4xl mx-auto px-12 py-32 space-y-24">
          {/* ... Your content cards here ... */}
        </section>
      </div>
    </main>
  );
}
