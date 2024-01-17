"use client";
import styles from "./page.module.css";
import { ZendeskProvider } from "react-use-zendesk";
import { ExampleList } from "./components/ExampleList";

export default function Page(): JSX.Element {
  function handleOpen() {
    alert("open");
  }

  return (
    <ZendeskProvider
      apiKey={process.env.NEXT_PUBLIC_ZENDESK_API_KEY || ""}
      onOpen={handleOpen}
    >
      <main className={styles.main}>
        <ExampleList />
      </main>
    </ZendeskProvider>
  );
}
