import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home: NextPage = () => {
  const headerA = useRef(null);
  const headerB = useRef(null);
  const headerC = useRef(null);

  useEffect(() => {
    console.log("sfsdfsdf");
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(headerB.current, {
      scrollTrigger: {
        trigger: headerB.current,
        // endTrigger: headerC.current,
        // start: "20px 80%",
        // se puede usar funciones tmb
        // end: () => "+=" + (header.current! as HTMLElement).offsetWidth + " end",

        // end: "bottom end",  //default
        // end: "bottom 100px",
        // endTrigger:
        // end: "+=200 end",
        markers: true,
        start: "top center",
        end: "top 200px",

        // scrub: true,
        // if you set a number, it will be the delay value at then end of scrolling
        scrub: 1,
        // toggleActions: "restart pause reverse pause",

        pin: true,
      },
      x: 400,
      duration: 3,
      rotation: 360,
    });
  }, [headerC]);

  return (
    <div>
      <div
        ref={headerA}
        style={{
          background: "red",
          width: "50px",
          height: "50px",
          lineHeight: "50px",
          textAlign: "center",
          color: "white",
          marginBottom: "600px",
        }}
      >
        A
      </div>
      <div
        ref={headerB}
        style={{
          background: "blue",
          width: "50px",
          height: "50px",
          lineHeight: "50px",
          textAlign: "center",
          color: "white",
          marginBottom: "600px",
        }}
      >
        B
      </div>
      <div
        ref={headerC}
        style={{
          background: "green",
          width: "50px",
          height: "50px",
          lineHeight: "50px",
          textAlign: "center",
          color: "white",
          marginBottom: "900px",
        }}
      >
        C
      </div>
    </div>
  );
};

export default Home;
