import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useRef } from "react";

const PinningPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    // console.log(ref);
    console.log("entra acaaaaaaaaaaa");
    gsap.defaults({ ease: "none", duration: 2 });

    const tl = gsap.timeline();
    tl.from(".orange", { xPercent: -100, delay: 0.5 });
    tl.from(".purple", { xPercent: 100 });
    tl.from(".green", { yPercent: -100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#container",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
      markers: true,
      anticipatePin: 1,
    });
  }, []);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        id="panel"
        style={{
          height: "100vh",
          background: "blue",
        }}
      >
        Slide-in Panels
      </div>
      <div
        id="container"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          className="panel"
          style={{
            width: "100%",
            height: "100%",
            background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          one
        </div>
        <div
          ref={ref}
          className="orange"
          style={{
            position: "absolute",
            top: 0,
            // left: "-100px",
            // left: 0,
            // left: "0",
            width: "100%",
            height: "100%",
            background: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // transform: "translateX(0)",
          }}
        >
          two
        </div>
        <div
          className="purple"
          style={{
            position: "absolute",
            top: 0,
            // left: "100%",
            width: "100%",
            height: "100%",
            background: "purple",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          three
        </div>
        <div
          className="green"
          style={{
            position: "absolute",
            zIndex: 4,
            top: 0,
            // top: "-100%",
            // left: 0,
            width: "100%",
            height: "100%",
            background: "green",
          }}
        >
          four
        </div>
      </div>
    </div>
  );
};

export default PinningPage;
