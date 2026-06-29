"use client";
import React from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import('./components/lanyard'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold">THE CAT GUY</h1>
      </div>
      <Lanyard />
    </main>
  );
}
