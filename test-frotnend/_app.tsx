import React from 'react';
import dotenv from 'dotenv';
import { AppProps } from 'next/app';

dotenv.config(); // Load environment variables from .env.dev

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
