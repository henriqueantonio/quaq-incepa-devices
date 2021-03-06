import React, { Fragment } from "react";
import Head from "next/head";
import "../../styles/Home.pages.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>QuaQ</title>
      </Head>
      <Component {...pageProps} />{" "}
    </Fragment>
  );
}

export default MyApp;
