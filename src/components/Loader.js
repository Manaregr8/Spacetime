"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const FADE_DURATION = 480;
const SHOW_DURATION = 1200; // fixed display duration, no waiting for hero image

let _played = false;

export default function Loader() {
  const shouldShow = !_played;

  const [fadeOut, setFadeOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!shouldShow) {
      setGone(true);
      return;
    }

    // Exit after a fixed duration — don't wait for hero image load
    const timer = setTimeout(() => {
      exit();
    }, SHOW_DURATION);

    return () => clearTimeout(timer);
  }, [shouldShow]);

  const exit = () => {
    _played = true;
    setFadeOut(true);
    setTimeout(() => {
      setGone(true);
      window.dispatchEvent(new CustomEvent("loader-gone"));
    }, FADE_DURATION);
  };

  if (!shouldShow || gone) return null;

  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ""}`}>
      <img
        src="/logo.png"
        alt="spacetime"
        className={styles.logo}
      />
    </div>
  );
}