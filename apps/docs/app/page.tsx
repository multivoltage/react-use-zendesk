"use client";
import styles from "./page.module.css";
import { ZendeskProvider } from "react-use-zendesk";
import { ExampleList } from "./components/ExampleList";
import { useState } from "react";

export default function Page(): JSX.Element {
  const [callbacks, setCallBacks] = useState<{ params: any; id: string }[]>([]);

  function handleOpen() {
    setCallBacks((old) => [
      ...old,
      {
        params: arguments,
        id: "onOpen",
      },
    ]);
  }

  function handleClose() {
    setCallBacks((old) => [
      ...old,
      {
        params: arguments,
        id: "onClose",
      },
    ]);
  }

  function handleUnreadMessages() {
    setCallBacks((old) => [
      ...old,
      {
        params: arguments,
        id: "onUnreadMessages",
      },
    ]);
  }

  return (
    <ZendeskProvider
      apiKey={process.env.NEXT_PUBLIC_ZENDESK_API_KEY || ""}
      onOpen={handleOpen}
      onClose={handleClose}
      onUnreadMessages={handleUnreadMessages}
    >
      <main className={styles.main}>
        <div className={styles["section-grid"]}>
          <div>
            <ExampleList />
          </div>

          <div>
            {callbacks.map(({ id, params }) => {
              return (
                <div key={id} className={styles.callBackContainer}>
                  <code>{id}</code> called with arguments:
                  <pre>{JSON.stringify(params, null, 4)}</pre>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </ZendeskProvider>
  );
}
