"use client";

export default function Background() {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-[#09090B]">

        {/* Main Spotlight */}
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px] animate-pulse" />

        {/* Left Glow */}
        <div className="absolute -left-40 top-80 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px] animate-[float_14s_ease-in-out_infinite]" />

        {/* Right Glow */}
        <div className="absolute -right-32 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[180px] animate-[float2_16s_ease-in-out_infinite]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/5 blur-[220px]" />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Noise Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      {/* Floating Orbs */}

      <div className="fixed inset-0 -z-40 pointer-events-none">

        <div className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-white/30 animate-ping" />

        <div className="absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-white/40 animate-pulse" />

        <div className="absolute left-[20%] bottom-[25%] h-2 w-2 rounded-full bg-white/20 animate-pulse" />

        <div className="absolute right-[25%] bottom-[15%] h-4 w-4 rounded-full bg-white/20 animate-ping" />

      </div>
    </>
  );
}
