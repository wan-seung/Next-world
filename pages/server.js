// getServerSideProps

import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { wrapper } from "../components/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }) => {
      console.log(
        "2. Page.getServerSideProps uses the store to dispatch things"
      );
      store.dispatch({ type: "TICK", payload: "이거되나?" });
    }
);

// Page itself is not connected to Redux Store, it has to render Provider to allow child components to connect to Redux Store
const Page = ({ tick }) => {
  return (
    <>
      <div>{tick}</div>
      <div> hello server</div>
      <Link href="/">
        <button type="button">홈으로</button>
      </Link>
    </>
  );
};

// you can also use Redux `useSelector` and other hooks instead of `connect()`
export default connect((state) => state)(Page);
