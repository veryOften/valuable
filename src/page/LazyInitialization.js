import React, { useState, Fragment, useEffect } from "react";

function LazyInitializationEx1() {
  const [count, setCount] = useState(() => 0);
  const increment = () => setCount((previousCount) => previousCount + 1);
  return <button onClick={increment}>{count}</button>;
}

const doSomethingAsync = async () => {
  return setTimeout(() => {
    console.log("setTimeOut");
  }, 2000);
};

function LazyInitializationEx2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(doSomethingAsync);
    };
  }, []);

  const increment = async () => {
    await doSomethingAsync();
    setCount((previousCount) => previousCount + 1);
  };

  return <button onClick={increment}>{count}</button>;
}

export default function LazyInitialization() {
  return (
    <Fragment>
      <LazyInitializationEx1 />
      <LazyInitializationEx2 />
    </Fragment>
  );
}
