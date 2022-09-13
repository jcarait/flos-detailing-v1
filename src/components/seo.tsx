import Head from "next/head";

export default function SEO() {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="initial-scale=0, width=device-width"
          key="title"
        />
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)){" "}
        {document.documentElement.classList.add("dark")} else{" "}
        {document.documentElement.classList.remove("dark")}
      </Head>
    </>
  );
}
