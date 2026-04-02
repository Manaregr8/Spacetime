"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Loader.module.css";

const CHARS = "spacetime".split("");
const CHAR_DELAY = 110;    // ms between each character
const ANIM_DURATION = 700; // ms for the drop+bounce animation
const PAUSE_AFTER = 550;   // ms to hold after last char lands
const FADE_DURATION = 480; // ms for the whole loader to fade out

// Time when the last character has fully settled + pause
const ANIM_COMPLETE = (CHARS.length - 1) * CHAR_DELAY + ANIM_DURATION + PAUSE_AFTER;

// Module-level flag — evaluated synchronously at render time,
// so StrictMode's effect double-invoke cannot cause a premature exit.
let _played = false;

export default function Loader() {
  // Computed once during this render — stays stable for the component's lifetime.
  // If _played is already true (navigated back to home), skip immediately.
  const shouldShow = !_played;

  const [fadeOut, setFadeOut] = useState(false);
  const [gone, setGone]       = useState(false);

  const animDone = useRef(false);
  const pageDone = useRef(false);
  const exiting  = useRef(false); // guards against concurrent tryExit calls

  useEffect(() => {
    if (!shouldShow) {
      setGone(true);
      return;
    }

    // Mark as played so future mounts (e.g. navigating back) skip the loader
    _played = true;

    function tryExit() {
      if (exiting.current || !animDone.current || !pageDone.current) return;
      exiting.current = true;
      setFadeOut(true);
      setTimeout(() => setGone(true), FADE_DURATION);
    }

    // Gate 1 — animation must always complete its full sequence
    const animTimer = setTimeout(() => {
      animDone.current = true;
      tryExit();
    }, ANIM_COMPLETE);

    // Gate 2 — page must be fully loaded
    function onPageLoad() {
      pageDone.current = true;
      tryExit();
    }

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, { once: true });
    }

    return () => {
      clearTimeout(animTimer);
      window.removeEventListener("load", onPageLoad);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — shouldShow is stable for this instance

  if (!shouldShow || gone) return null;

  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.logoWrap}>
        {CHARS.map((char, i) => (
          <span
            key={i}
            className={`${styles.char} ${i < 5 ? styles.charSpace : styles.charTime}`}
            style={{ animationDelay: `${i * CHAR_DELAY}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
