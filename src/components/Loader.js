"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Loader.module.css";

const ANIM_DURATION = 2000;  // draw duration ms
const FILL_DURATION = 800;
const PAUSE_AFTER   = 600;
const FADE_DURATION = 480;

const ANIM_COMPLETE = ANIM_DURATION + FILL_DURATION + PAUSE_AFTER;

let _played = false;

export default function Loader() {
  const shouldShow = !_played;

  const [fadeOut, setFadeOut] = useState(false);
  const [gone, setGone]       = useState(false);

  const animDone = useRef(false);
  const pageDone = useRef(false);
  const exiting  = useRef(false);

  // Only the dot needs JS (simple circle — getTotalLength is instant)
  const circleRef = useRef(null);

  useEffect(() => {
    if (!shouldShow) {
      setGone(true);
      return;
    }

    _played = true;

    function tryExit() {
      if (exiting.current || !animDone.current || !pageDone.current) return;
      exiting.current = true;
      setFadeOut(true);
      setTimeout(() => setGone(true), FADE_DURATION);
    }

    const animTimer = setTimeout(() => {
      animDone.current = true;
      tryExit();
    }, ANIM_COMPLETE);

    function onPageLoad() {
      pageDone.current = true;
      tryExit();
    }

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, { once: true });
    }

    // Animate only the dot — circle getTotalLength() is instant & reliable
    const c = circleRef.current;
    if (c) {
      const len = c.getTotalLength();
      c.style.strokeDasharray = `${len}`;
      c.style.strokeDashoffset = `${len}`;
      c.animate(
        [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        { duration: ANIM_DURATION, easing: "ease-out", fill: "forwards" }
      );
      c.animate(
        [
          { fill: "transparent", stroke: "#ffffff", strokeOpacity: 1 },
          { fill: "#fcbb2d",     stroke: "#fcbb2d",  strokeOpacity: 0 },
        ],
        { duration: FILL_DURATION, delay: ANIM_DURATION, easing: "ease-in-out", fill: "forwards" }
      );
    }

    return () => {
      clearTimeout(animTimer);
      window.removeEventListener("load", onPageLoad);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!shouldShow || gone) return null;

  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ""}`}>
      <svg
        className={styles.svgLogo}
        viewBox="0 0 431.43439 107.62484"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(0.26458333,0,0,0.26458334,2952.8591,-1792.3767)">
          <g transform="translate(624.41632,-9.4582401)">

            {/* "space" — CSS stroke-dash animation */}
            <text
              style={{
                fontWeight: 500,
                fontSize: "109.029px",
                fontFamily: "'Tsukimi Rounded'",
                textAlign: "start",
                letterSpacing: "-3.175px",
                writingMode: "lr-tb",
                direction: "ltr",
                textAnchor: "start",
                fill: "transparent",
              }}
              x="-2926.7585"
              y="1837.2983"
              transform="matrix(3.7687726,-0.0460673,0.04632363,3.7897469,-831.49611,0)"
              className={styles.animText}
            >
              <tspan
                x="-2926.7585"
                y="1837.2983"
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontFamily: "'Times New Roman'",
                  letterSpacing: "-3.175px",
                  strokeWidth: 3,
                }}
              >
                space
              </tspan>
            </text>

            <g transform="translate(1.41421,-3.5355338)">

              {/* "time" — fades in when space fills */}
              <path
                className={styles.animFadeIn}
                style={{
                  fill: "#ffffff",
                  stroke: "none",
                }}
                transform="matrix(3.7795276,0,0,3.7795275,-831.49611,0)"
                d="m -2494.7588,1880.1059 c -5.366,-0.5526 -9.5461,-2.2304 -13.2292,-5.3099 -2.6729,-2.2348 -4.5846,-4.705 -6.1327,-7.9243 -4.9039,-10.1979 -3.8379,-23.9785 2.5064,-32.4006 3.1572,-4.1912 7.5792,-7.1487 12.5673,-8.4051 2.1933,-0.5524 3.8837,-0.7702 6.5416,-0.843 7.7473,-0.2121 13.6627,1.8879 18.2763,6.4884 2.6904,2.6826 4.5233,5.8556 5.7594,9.9699 0.9805,3.2638 1.4553,7.4891 1.4606,12.9964 v 2.3813 h -17.5978 -17.5978 l 0.071,1.2053 c 0.2601,4.4201 2.9874,7.9699 7.0788,9.2138 0.9762,0.2968 1.2135,0.3216 3.0574,0.3206 1.6842,-9e-4 2.1473,-0.041 2.9398,-0.257 2.758,-0.7503 4.7189,-2.3024 5.937,-4.6992 l 0.3694,-0.727 h 7.6487 7.6488 l -0.075,0.3233 c -0.4685,2.0097 -1.9094,5.2696 -3.183,7.2011 -3.8262,5.8029 -9.326,9.2205 -16.5815,10.3039 -1.3965,0.2085 -6.0383,0.3093 -7.4671,0.1621 z m 12.6632,-34.3064 c -0.2473,-4.2995 -2.2654,-7.3966 -5.6497,-8.6704 -2.1385,-0.8049 -4.9501,-0.918 -7.2354,-0.291 -3.835,1.0521 -6.3974,4.5346 -6.6802,9.079 l -0.071,1.1465 h 9.8547 9.8547 z m -154.2997,33.7053 c -2.5908,-0.1986 -5.0081,-0.7225 -6.8096,-1.476 -2.2561,-0.9437 -4.5261,-2.965 -5.5031,-4.9003 -0.7168,-1.42 -1.1955,-3.9851 -1.3864,-7.429 -0.064,-1.1628 -0.1182,-7.7894 -0.1195,-14.7259 v -12.6118 h -4.2334 -4.2333 v -6.0561 -6.056 h 4.2326 4.2325 l 0.03,-8.5548 0.03,-8.5549 h 7.7611 7.7611 l 0.03,8.5538 0.03,8.5537 5.7907,0.031 5.7907,0.03 0.03,6.0266 0.03,6.0267 h -5.8264 -5.8263 l 0.04,12.7294 c 0.036,11.4011 0.061,12.8136 0.2363,13.5365 0.4641,1.9079 1.7365,3.0522 3.9508,3.5534 1.5888,0.3596 4.9287,0.3468 7.0414,-0.027 l 0.3821,-0.068 v 5.4077 5.4076 l -0.3629,0.073 c -0.6601,0.132 -3.7796,0.4233 -5.8107,0.5426 -2.3067,0.1356 -5.427,0.1303 -7.287,-0.012 z m 17.106,-26.738 v -26.5171 h 7.7611 7.7611 v 26.5171 26.5172 h -7.7611 -7.7611 z m 20.5787,0 v -26.5171 h 7.7611 7.7611 v 4.1158 4.1157 h 0.3839 c 0.3589,0 0.4082,-0.052 0.7557,-0.7937 0.5064,-1.0811 1.6552,-2.777 2.5221,-3.723 1.6705,-1.823 4.7032,-3.6731 6.9523,-4.2411 2.8909,-0.73 6.3736,-0.7084 9.1416,0.057 1.2673,0.3503 3.3007,1.3873 4.5273,2.3089 1.4738,1.1073 3.1711,2.8471 3.9874,4.0874 0.7202,1.0942 1.7026,2.9147 1.9259,3.5689 0.1062,0.311 0.1919,0.3815 0.46,0.3783 0.2971,0 0.3777,-0.1046 0.8202,-1.0289 1.2735,-2.6604 4.1667,-6.21 6.1343,-7.5261 2.3955,-1.6024 5.5327,-2.3801 9.5794,-2.3749 2.8849,0 5.1948,0.4025 7.2553,1.2527 1.8742,0.7733 3.1199,1.647 4.7734,3.3482 2.8364,2.918 4.3674,5.995 5.3372,10.7265 0.5986,2.9205 0.5903,2.6228 0.5903,21.3064 v 17.4565 h -7.7611 -7.7611 l -5e-4,-16.1984 c -5e-4,-17.309 -7e-4,-17.3178 -0.5781,-18.9942 -0.9192,-2.6689 -3.0511,-4.64 -5.7714,-5.3361 -1.8316,-0.4687 -4.2856,-0.1677 -6.0069,0.7368 -2.692,1.4146 -4.2168,3.8218 -4.5729,7.2187 -0.071,0.6817 -0.1178,7.2476 -0.1191,16.8452 v 15.728 h -7.7576 -7.7577 l -0.037,-16.6688 -0.037,-16.6687 -0.2656,-0.9996 c -0.1461,-0.5497 -0.4819,-1.4493 -0.7462,-1.999 -0.3932,-0.8181 -0.6645,-1.1814 -1.4945,-2.0013 -1.6993,-1.6785 -3.4337,-2.3881 -5.8354,-2.3873 -1.4521,5e-4 -2.3907,0.1972 -3.574,0.7489 -2.0343,0.9484 -3.5741,2.5692 -4.3177,4.5448 -0.7183,1.9083 -0.6756,0.788 -0.7184,18.8798 l -0.039,16.5512 h -7.758 -7.758 z m -14.4051,-36.1123 c -3.4578,-0.7704 -6.1549,-3.2677 -7.2269,-6.6914 -0.3643,-1.1635 -0.4554,-3.3277 -0.1942,-4.6164 0.7355,-3.6301 3.4612,-6.4999 7.0684,-7.4419 1.3012,-0.3399 3.3915,-0.3414 4.7037,0 3.6376,0.937 6.4623,3.9386 7.1201,7.5662 0.3118,1.7195 0.083,3.8505 -0.59,5.5052 -1.0394,2.5542 -3.4987,4.7309 -6.2362,5.5195 -1.1849,0.3413 -3.4811,0.4215 -4.6449,0.1622 z"
              />

              {/* Dot over 'i' — JS circle trace animation */}
              <circle
                ref={circleRef}
                style={{
                  fill: "transparent",
                  stroke: "#ffffff",
                  strokeWidth: 3.18445,
                  strokeDasharray: "0 99999",
                  strokeDashoffset: 0,
                }}
                cx="-2611.1731"
                cy="1807.2366"
                r="9.8297758"
                transform="matrix(3.7795276,0,0,3.7795275,-831.49611,0)"
              />

            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
