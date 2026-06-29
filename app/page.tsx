"use client";
import React from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import('./components/lanyard'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold tracking-tighter mb-4">Kavin.</h1>
        <p className="text-xl text-gray-500">Creative Technologist</p>
        <Lanyard />
      </div>
      {/* Add your skills section here using the structure provided previously */}
    </main>
  );
}
