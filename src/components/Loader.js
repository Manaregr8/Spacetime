"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/context/BookingContext";
import styles from "./Loader.module.css";

const FADE_DURATION = 480;

let _played = false;

export default function Loader() {
  const { isHeroLoaded } = useBooking();
  const shouldShow = !_played;

  const [fadeOut, setFadeOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!shouldShow) {
      setGone(true);
      return;
    }

    if (isHeroLoaded) {
      exit();
    }

    const safetyTimer = setTimeout(() => {
      exit();
    }, 5000);

    return () => clearTimeout(safetyTimer);
  }, [shouldShow, isHeroLoaded]);

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