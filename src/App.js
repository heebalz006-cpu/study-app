import React from "react";
import Group from "./Group.png";
export default function OFPPTInterface() {
  // Using your exact image filenames
// Single combined image containing logo + people + polygon
const mainImage = "Group.png";

  return (
    <div className="relative w-[440px] h-[956px] bg-white mx-auto overflow-hidden rounded-[30px] border border-gray-300">
      {/* Gradient Top Background */}
      <div
        className="absolute"
        style={{
          width: "440px",
          height: "573px",
          left: "0px",
          top: "-44px",
          background: "linear-gradient(180deg, #C6F1FF 0%, #2BCBFE 75.48%)",
          borderRadius: "65px",
        }}
      />

      {/* Big Blue Ellipse */}
      <div
        className="absolute"
        style={{
          width: "399.58px",
          height: "354.63px",
          left: "91.83px",
          top: "603.38px",
          background: "#42D0FF",
          transform: "matrix(-0.94, 0.34, 0.34, 0.94, 0, 0)",
          borderRadius: "50%",
        }}
      />

      {/* Button Background Rectangle */}
      <div
        className="absolute"
        style={{
          width: "214px",
          height: "66px",
          left: "108px",
          top: "746px",
          background: "linear-gradient(90deg, #03203A 34.62%, #074278 72.12%)",
          borderRadius: "20px",
        }}
      />

      {/* Commencer Button Text */}
      <div
        className="absolute text-white font-bold flex items-center justify-center"
        style={{
          width: "214px",
          height: "66px",
          left: "108px",
          top: "746px",
          fontFamily: "Lemonada, sans-serif",
          fontSize: "24px",
          lineHeight: "48px",
        }}
      >
        Commencer
      </div>

      {/* Green Ellipse */}
      <div
        className="absolute"
        style={{
          width: "245.84px",
          height: "87.52px",
          left: "124px",
          top: "778.5px",
          background: "rgba(179, 255, 185, 0.3)",
          borderRadius: "50%",
        }}
      />

      {/* Pink Ellipses */}
      <div
        className="absolute"
        style={{ width: "42px", height: "28px", left: "233px", top: "708px", background: "rgba(238, 167, 191, 0.67)", borderRadius: "50%" }}
      />
      <div
        className="absolute"
        style={{ width: "42px", height: "28px", left: "175px", top: "708px", background: "rgba(238, 167, 191, 0.42)", borderRadius: "50%" }}
      />
      <div
        className="absolute"
        style={{ width: "42px", height: "28px", left: "291px", top: "708px", background: "rgba(238, 167, 169, 0.62)", borderRadius: "50%" }}
      />

      <img
        src={Group}
        alt="main"
        style={{ position: "absolute", left: 0, top: 0, width: 440, height: 659, objectFit: "cover" }}
      />
      
    </div>
  );
}
