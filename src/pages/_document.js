import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col bg-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
