import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.to(".vi-mask-group", {
      rotate: 5,
      ease: "expo.easeInOut",
      duration: 3,
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.8) {
          document.querySelector(".svg")?.remove();
          setIsLoaded(true);
          t1.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!isLoaded) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      delay: -1,
      duration: 2,
      ease: "expo.inOut",
    });

    gsap.to(".sky", {
      scale: 1,
      rotate: 0,
      delay: -0.8,
      duration: 2,
      ease: "expo.inOut",
    });

    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      delay: -0.8,
      duration: 2,
      ease: "expo.inOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: xMove,
        ease: "expo.easeInOut",
        duration: 1,
      });
      gsap.to(".sky", {
        x: xMove,
        ease: "expo.easeInOut",
        duration: 1,
      });
      gsap.to(".bg", {
        x: xMove * 1.9,
        ease: "expo.easeInOut",
        duration: 1,
      });
    });
  }, [isLoaded]);

  return (
    <>
      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="vi-mask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="30%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="250"
                  fill="white"
                  fontFamily="Pricedown Black">
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="images/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#vi-mask)"
          />
        </svg>
      </div>

      {isLoaded && (
        <div className="main w-full rotate-[-10deg]  ">
          <div className="leading w-full h-screen  ">
            <div className="navbar absolute top-0 left-0 z-[100] w-full py-10 px-10">
              <div className="logos flex gap-5">
                <div className="lines flex flex-col gap-[7px] justify-center">
                  <div className="line w-10 h-1 bg-white" />
                  <div className="line w-8 h-1 bg-white" />
                  <div className="line w-5 h-1 bg-white" />
                </div>
                <h3 className="text-4xl text-white font-['Pricedown Black']">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imgdiv w-full h-screen relative overflow-hidden">
              <img
                className="sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover"
                src="images/sky.png"
                alt="sky"
              />
              <div className="text text-white absolute top-0 left-1/2 -translate-x-1/2 bg-red-500">
                <h1 className="text-6xl top-[100px] right-[150px] absolute">
                  grand
                </h1>
                <h1 className="text-6xl top-[170px] right-[120px] absolute">
                  theft
                </h1>
                <h1 className="text-6xl absolute top-[230px] right-[110px]">
                  auto
                </h1>
              </div>
              <img
                className="bg absolute scale-[3] rotate-[-10deg] top-0 left-0 w-full h-full object-cover"
                src="images/bg.png"
                alt="bg"
              />
              <img
                className="girl absolute -bottom-[70%] left-1/2 -translate-x-1/2 object-cover scale-[0.7]"
                src="images/girlbg.png"
                alt="girl"
              />
            </div>

            <div className="btmbar text-white w-full px-10 py-10 left-0 bottom-0 absolute bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                src="./images/ps5.png"
                alt="ps5"
                className="h-[55px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <div className="w-full h-screen flex items-center justify-center bg-black">
              <div className="cnter w-full h-[80%] flex">
                <div className="l-img relative w-1/2 h-full">
                  <img
                    src="./images/imag.png"
                    alt="character"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="rg text-white px-10">
                  <h1 className="text-7xl">Still Running</h1>
                  <h1 className="text-7xl">Not Hunting</h1>
                  <p className="mt-10 font-['Helvetica_Now_Display']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p className="mt-5 font-['Helvetica_Now_Display']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="mt-10 p-5 font-['Pricedown Black'] text-black bg-yellow-500 text-3xl">
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
