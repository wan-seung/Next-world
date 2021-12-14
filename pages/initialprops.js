// Page.getInitialProps

import React, { Component } from 'react';
import { wrapper } from '../components/store';

// you can also use `connect()` instead of hooks
const Page = () => {
  // const { tick } = useSelector(state => state);
  // return <div>{tick}</div>;
  return <div>hello</div>;
};

Page.getInitialProps = wrapper.getInitialPageProps(
  store =>
    ({ pathname, req, res }) => {
      console.log('2. Page.getInitialProps uses the store to dispatch things');
      store.dispatch({
        type: 'TICK',
        payload: 'was set in error page ' + pathname,
      });
    }
);

export default Page;
