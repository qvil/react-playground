import React, { useState, useEffect } from "react";
import Head from "next/head";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("useTitle"), 3000);

  return (
    <div>
      <Head>
        <title>useTitle</title>
      </Head>
      <h1>UseTitle</h1>
      Update title after 3 second.
    </div>
  );
};

export default UseTitle;
