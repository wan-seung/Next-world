import React from "react";
import App from "next/app";
import { wrapper } from "../components/store";

class MyApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(
    (store) => async (context) => {
      store.dispatch({ type: "TOE", payload: "was set in _app" });

      return {
        pageProps: {
          // https://nextjs.org/docs/advanced-features/custom-app#caveats
          ...(await App.getInitialProps(context)).pageProps,
          // Some custom thing for all pages
          // pathname: ctx.pathname,
        },
      };
    }
  );

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
