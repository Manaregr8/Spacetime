// components/BotpressChat.jsx
"use client";

import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    // Avoid duplicate script injection on re-renders
    if (document.getElementById("botpress-inject")) return;

    const script1 = document.createElement("script");
    script1.id = "botpress-inject";
    script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.id = "botpress-config";
      script2.src =
        "https://files.bpcontent.cloud/2026/06/11/09/20260611091437-U4TQ6V73.js";
      script2.async = true;
      document.body.appendChild(script2);
    };
  }, []); // Runs once on mount, survives client-side nav

  return null;
}