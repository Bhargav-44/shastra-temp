import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Carousel from "../components/home/Carousel";
import Landing from "../components/home/Landing";
import Vision from "../components/home/Vision";
import CorePeeps from "../components/home/CorePeeps";
import FAQ from "../components/home/FAQ";

import CarouselImg from "../assets/home/carousel.jpg";
import CarouselImg3 from "../assets/home/carousel3.jpg";
import Core from "../assets/home/core.jpg";

export default function Home() {
  const [carouselImg, setCarouselImg] = useState(null);

  useEffect(() => {
    setCarouselImg([
      Core,
      "https://lh3.googleusercontent.com/pw/ADCreHdstilX0sOXTr70kXYCD1dRLVT8DRTN8x29DjAhoAIRnxzYut7eeNFgW6e0nKgm7NmBqGpk0WK2DTUyU8Nhd6IIi_Ijw9XRhiCdi7RL9JPEVDQyyqSekrNluUchLjS2ek74ZBNEiU2KagKYCV1Ia84E=w965-h643-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/ADCreHfiDyIFKxG_PDueH_8Q91V8b8RFKR0_zSeD5C72ETO_ujYfnpH-o48s4-wkhKi_aVl-h5P-pywTIJw8FW18FlvQaOYbh4NR_BQF-4g3KbBXGcDv1oekb-HVTgpJtmVG-I5Fa6Z0owegQoGIrkxpvMYd=w965-h643-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/ADCreHfQKUnvUBkh899zcUNrZEtDf7ynZk_qqQCVXrD-vnDJKbXJI3TBQPV8og2hMvyGYJD1A1JNq1BxBYd7H7lBseD9ToO8yQ0ioQTFFCk5Jn9ETflGKRgqkADWKNRx8hWoBRyOb_YentWQbZtMDs0-09_S=w965-h643-s-no-gm?authuser=0",
      CarouselImg,
      CarouselImg3,
    ]);
  }, []);

  return (
    <div className="relative min-h-full">
      <div className="relative -z-10 bg-gradient-to-r from-[#000778] from-[40%] via-slate-500 via-30% to-[#FF9201] to-60%">
        <Landing key={nanoid()} />
      </div>

      <Carousel slides={carouselImg} />

      <div className="relative z-10 h-max w-full flex flex-col justify-center space-y-5">
        <Vision />
        <CorePeeps />
      </div>

      <FAQ />
    </div>
  );
}
