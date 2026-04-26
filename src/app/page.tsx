"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="mobile-container relative overflow-hidden bg-white" style={{ minHeight: "100dvh" }}>

      {/* TopCurveLines — absolute top-right */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{ zIndex: 0 }}>
        <img src="/TopCurveLines.svg" alt="" className="w-full" />
      </div>

      {/* FlowBackground — absolute, bottom ~1/6 from bottom */}
      <div className="absolute left-0 pointer-events-none" style={{ bottom: "16.67%", zIndex: 0 }}>
        <img src="/FlowBackground.svg" alt="" style={{ width: "100vw", maxWidth: "480px" }} />
      </div>

      {/* Content layer */}
      <div className="relative flex flex-col w-full h-full" style={{ minHeight: "100dvh", zIndex: 1 }}>

        {/* INSTALEARN — top-left, small, light */}
        <p
          className="absolute text-[#7C2D12]"
          style={{
            top: "calc(env(safe-area-inset-top, 0px) + 16px)",
            left: "16px",
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.05em",
            fontFamily: "Inter, sans-serif",
          }}
        >
          INSTALEARN
        </p>

        {/* Subtitle */}
        <p
          className="absolute text-[#9A3412]"
          style={{
            top: "calc(env(safe-area-inset-top, 0px) + 16px + 12px + 32px)",
            paddingLeft: "52px",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Upgrade Your Knowlege
        </p>

        {/* Title */}
        <h1
          className="absolute text-[#9A3412]"
          style={{
            top: "calc(env(safe-area-inset-top, 0px) + 16px + 12px + 32px + 20px + 8px)",
            paddingLeft: "32px",
            fontSize: "46px",
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.001em",
            lineHeight: 1.1,
            width: "66.67%",
          }}
        >
          Worldwide Online Training
        </h1>

        {/* ContinueButton — centered, bottom ~1/20 */}
        <Link
          href="/dashboard"
          className="absolute left-0 right-0 flex justify-center items-center active:scale-95 transition-transform"
          style={{ bottom: "5%" }}
        >
          <img src="/ContinueButton.svg" alt="Continue" style={{ width: "316px", maxWidth: "80vw" }} />
        </Link>
      </div>
    </div>
  );
}
