import Head from "next/head";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>REST Countries website with NextJs.</title>
      </Head>
      <main className="main">{children}</main>
    </>
  );
}
