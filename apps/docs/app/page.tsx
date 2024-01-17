"use client";
import styles from "./page.module.css";
import { ZendeskProvider } from "react-use-zendesk";
import { ExampleList } from "./components/ExampleList";
import { useState } from "react";
import { ExampleProps } from "./components/Example";

export default function Page(): JSX.Element {
  const [callBack, setCallBack] = useState<ExampleProps["callbackWith"]>();

  function handleOpen() {
    setCallBack({
      params: arguments,
      callbackId: "messenger open",
    });
  }
  return (
    <ZendeskProvider
      apiKey={process.env.NEXT_PUBLIC_ZENDESK_API_KEY || ""}
      onOpen={handleOpen}
    >
      <main className={styles.main}>
        <ExampleList callbackWith={callBack} />
      </main>
    </ZendeskProvider>
  );
}
