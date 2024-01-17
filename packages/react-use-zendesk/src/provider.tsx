"use client";
import React from "react";
import { ZendeskContext } from "./context";
import { ZendeskContextValues, ZendeskProviderProps } from "./types";
import { PropsWithChildren } from "react";
import { initialize } from "./initialize";
import { ZendeskApi } from "./api";

export const ZendeskProvider: React.FC<
  PropsWithChildren<ZendeskProviderProps>
> = ({ apiKey, onOpen, onClose, onUnreadMessages, children }) => {
  const isBooted = React.useRef(false);

  function registerCallback() {
    if (onOpen) {
      ZendeskApi("messenger:on", "open", onOpen);
    }
    if (onClose) {
      ZendeskApi("messenger:on", "close", onClose);
    }
    if (onUnreadMessages) {
      ZendeskApi("messenger:on", "unreadMessages", onUnreadMessages);
    }
  }

  if (!isBooted.current) {
    initialize(apiKey, registerCallback);
    isBooted.current = true;
  }

  const show = React.useCallback(() => {
    ZendeskApi("messenger", "show");
  }, []);

  const hide = React.useCallback(() => {
    ZendeskApi("messenger", "hide");
  }, []);

  const open = React.useCallback(() => {
    ZendeskApi("messenger", "open");
  }, []);

  const close = React.useCallback(() => {
    ZendeskApi("messenger", "close");
  }, []);

  const initialProviderValue: ZendeskContextValues = {
    show,
    hide,
    open,
    close,
  };

  return (
    <ZendeskContext.Provider value={initialProviderValue}>
      {children}
    </ZendeskContext.Provider>
  );
};
