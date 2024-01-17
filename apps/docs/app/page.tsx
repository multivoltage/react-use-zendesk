"use client";
import { ZendeskProvider, useZendesk } from "react-use-zendesk";
import { ExampleList } from "./components/ExampleList";
import { useState } from "react";
import { ValuesContainer } from "./components/ValuesContainer";
import { CallbackContainer } from "./components/CallbackContainer";

export default function Page(): JSX.Element {
  const [callbacks, setCallBacks] = useState<
    { params: any; id: string; key: string }[]
  >([]);

  function handleOpen() {
    setCallBacks((old) => [
      {
        params: arguments,
        id: "onOpen",
        key: "onOpen" + old.length,
      },
      ...old,
    ]);
  }

  function handleClose() {
    setCallBacks((old) => [
      {
        params: arguments,
        id: "onClose",
        key: "onClose" + old.length,
      },
      ...old,
    ]);
  }

  function handleUnreadMessages() {
    setCallBacks((old) => [
      {
        params: arguments,
        id: "onUnreadMessages",
        key: "onUnreadMessages" + old.length,
      },
      ...old,
    ]);
  }

  return (
    <ZendeskProvider
      apiKey={process.env.NEXT_PUBLIC_ZENDESK_API_KEY || ""}
      onOpen={handleOpen}
      onClose={handleClose}
      onUnreadMessages={handleUnreadMessages}
    >
      <main className="main">
        <div className="section-grid">
          <div className="example-list">
            <ExampleList />
          </div>

          <div>
            <ValuesContainer />
            <div className="callback-list">
              {callbacks.map(({ id, params, key }) => {
                return <CallbackContainer key={key} params={params} id={id} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </ZendeskProvider>
  );
}
