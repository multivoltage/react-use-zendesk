"use client";
import {
  EventMessagingOpenedClosed,
  EventMessagingProactiveMessageDisplayed,
  ZendeskProvider,
} from "react-use-zendesk";
import { ExampleList } from "./components/ExampleList";
import { useState } from "react";
import { ValuesContainer } from "./components/ValuesContainer";
import { CallbackContainer } from "./components/CallbackContainer";
import { KeyForm } from "./components/KeyForm";
import { toast } from "sonner";
import { EventMessagingProactiveMessageClicked } from "react-use-zendesk";

export default function Page(): JSX.Element {
  const [apiKey, setApiKey] = useState("");
  const [callbacks, setCallBacks] = useState<
    { params: any; id: string; key: string }[]
  >([]);

  function handleOpen(event: EventMessagingOpenedClosed) {
    toast(`"onOpen callback" - ${JSON.stringify(event)}`);
    setCallBacks((old) => [
      {
        params: arguments,
        id: "onOpen",
        key: "onOpen" + old.length,
      },
      ...old,
    ]);
  }

  function handleClose(event: EventMessagingOpenedClosed) {
    toast(`"onClose callback" - ${JSON.stringify(event)}`);
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

  function handleResetWidget() {
    toast("onResetWidget callback");
    setCallBacks((old) => [
      {
        params: arguments,
        id: "onResetWidget",
        key: "onResetWidget" + old.length,
      },
      ...old,
    ]);
  }

  function handleProactiveMessageDisplayed(
    event: EventMessagingProactiveMessageDisplayed,
  ) {
    toast(`onProactiveMessageDisplayed callback - ${JSON.stringify(event)}`);
    setCallBacks((old) => [
      {
        params: arguments,
        id: "onProactiveMessageDisplayed",
        key: "onProactiveMessageDisplayed" + old.length,
      },
      ...old,
    ]);
  }

  function handleProactiveMessageClicked(
    event: EventMessagingProactiveMessageClicked,
  ) {
    toast(`onProactiveMessageClicked callback - ${JSON.stringify(event)}`);
    setCallBacks((old) => [
      {
        params: arguments,
        id: "onProactiveMessageClicked",
        key: "onProactiveMessageClicked" + old.length,
      },
      ...old,
    ]);
  }

  function onChangeKey(key: string) {
    setApiKey(key);
  }

  return (
    <ZendeskProvider
      apiKey={apiKey}
      onOpen={handleOpen}
      onClose={handleClose}
      onUnreadMessages={handleUnreadMessages}
      onResetWidget={handleResetWidget}
      onProactiveMessageDisplayed={handleProactiveMessageDisplayed}
      onProactiveMessageClicked={handleProactiveMessageClicked}
    >
      <main className="main">
        <div className="section-grid">
          <div className="example-list">
            <ExampleList />
          </div>

          <div>
            <KeyForm onChangeKey={onChangeKey} />
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
