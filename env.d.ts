declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string | undefined;
      FIREBASE_KEY: string | undefined;
      HTTP_CLIENT: string | undefined;
      WSS_ENDPOINT: string | undefined;
      BOT_USERNAME: string | undefined;
      TONCLIENT_ENDPOINT: string | undefined;
      TONCLIENT_API_KEY: string | undefined;
      EXPLORER_URL: string | undefined;
      DEX_URL: string | undefined;
      GECKO_API: string | undefined;
      TRENDING_TOKENS_API: string | undefined;
      TRENDING_MSG: string | undefined;
    }
  }
}

export {};
