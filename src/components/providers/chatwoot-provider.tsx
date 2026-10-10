"use client";

import Script from "next/script";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

const websiteToken = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN;
const configuredBaseUrl = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL;

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.startsWith("http://") || baseUrl.startsWith("https://")
    ? baseUrl.replace(/\/$/, "")
    : `https://${baseUrl.replace(/\/$/, "")}`;
}

export function ChatwootProvider() {
  if (!websiteToken || !configuredBaseUrl) {
    return null;
  }

  const baseUrl = normalizeBaseUrl(configuredBaseUrl);

  return (
    <Script
      id="chatwoot-sdk"
      src={`${baseUrl}/packs/js/sdk.js`}
      strategy="lazyOnload"
      onReady={() => {
        window.chatwootSDK?.run({
          websiteToken,
          baseUrl,
        });
      }}
    />
  );
}
