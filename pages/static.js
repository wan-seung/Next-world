// getStaticProps
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { wrapper } from "../components/store";

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    ({ preview }) => {
      console.log("2. Page.getStaticProps uses the store to dispatch things");
      store.dispatch({
        type: "TICK",
        payload: "was set in other page " + preview,
      });
    }
);

// you can also use `connect()` instead of hooks
const Page = () => {
  const { tick } = useSelector((state) => state);
  return (
    <>
      <div>{tick}</div>
      <div>hello static</div>
      <Link href="/">
        <button type="button">홈으로</button>
      </Link>
    </>
  );
};

export default Page;
