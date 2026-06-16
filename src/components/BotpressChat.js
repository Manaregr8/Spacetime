// components/BotpressChat.jsx
"use client";

import Script from "next/script";

export default function BotpressChat() {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2026/06/11/09/20260611091437-U4TQ6V73.js"
        strategy="afterInteractive"
      />
    </>
  );
}