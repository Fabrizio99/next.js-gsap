import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useRef } from "react";

const PinSpacingPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: "top top",
        pin: true,
        markers: true,
        // pinSpacing: false,
      });
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
        className="panel"
        style={{
          width: "100%",
          height: "100vh",
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
        className="panel"
        style={{
          width: "100%",
          height: "100vh",
          background: "orange",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        two
      </div>
      <div
        className="panel"
        style={{
          width: "100%",
          height: "100vh",
          background: "purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        three
      </div>
      <div
        className="panel"
        style={{
          width: "100%",
          height: "100vh",
          background: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        four
      </div>
    </div>
  );
};

export default PinSpacingPage;
