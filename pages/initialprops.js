// Page.getInitialProps

import Link from "next/link";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { wrapper } from "../components/store";

// you can also use `connect()` instead of hooks
const Page = () => {
  const { tick } = useSelector((state) => state);
  return (
    <div>
      <div>{tick}</div>
      <div>hello</div>
      <Link href="/">
        <button type="button">홈으로</button>
      </Link>
    </div>
  );
};

Page.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    ({ pathname, req, res }) => {
      console.log("2. Page.getInitialProps uses the store to dispatch things");
      store.dispatch({
        type: "TICK",
        payload: "was set in error page " + pathname,
      });
    }
);

export default Page;
