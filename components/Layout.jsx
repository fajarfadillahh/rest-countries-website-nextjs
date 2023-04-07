import Head from "next/head";
import { useEffect } from "react";

// import components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>REST Countries website with NextJs.</title>
      </Head>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
