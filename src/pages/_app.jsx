import "@/styles/globals.css";
import "@/styles/bg.css";

import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={plusJakartaSans.className}>
      <Head>
        <title>Epic Chat</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
