"use client";
import React from "react";
import { ZendeskContext } from "./context";
import {
  ZendeskContextValues,
  ZendeskConversationField,
  ZendeskProviderProps,
} from "./types";
import { PropsWithChildren } from "react";
import { initialize } from "./initialize";
import { ZendeskApi } from "./api";

export const ZendeskProvider: React.FC<
  PropsWithChildren<ZendeskProviderProps>
> = ({ apiKey, onOpen, onClose, onUnreadMessages, children }) => {
  const isBooted = React.useRef(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [unreadMessages, setUnreadMessages] = React.useState<
    number | undefined
  >(undefined);

  function registerCallback() {
    ZendeskApi("messenger:on", "open", function () {
      setIsOpen(true);
      onOpen && onOpen();
    });

    ZendeskApi("messenger:on", "close", function () {
      setIsOpen(false);
      onClose && onClose();
    });

    ZendeskApi(
      "messenger:on",
      "unreadMessages",
      function (unreadMessages: number) {
        setUnreadMessages(unreadMessages);
        onUnreadMessages && onUnreadMessages(unreadMessages);
      },
    );
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

  const setLocale = React.useCallback((newLocale: string) => {
    ZendeskApi("messenger:set", "locale", newLocale);
  }, []);

  const setZIndex = React.useCallback((newZIndex: number) => {
    ZendeskApi("messenger:set", "zIndex", newZIndex);
  }, []);

  const setCookies = React.useCallback((isEnabled: boolean) => {
    ZendeskApi("messenger:set", "cookies", isEnabled);
  }, []);

  const setConversationFields = React.useCallback(
    (conversationFields: Array<ZendeskConversationField>) => {
      ZendeskApi("messenger:set", "conversationFields", conversationFields);
    },
    [],
  );

  const setConversationTags = React.useCallback(
    (conversationTags: Array<string>) => {
      ZendeskApi("messenger:set", "conversationTags", conversationTags);
    },
    [],
  );

  const loginUser = React.useCallback((jwtToken: string) => {
    ZendeskApi(
      "messenger",
      "loginUser",
      (callback: (token: string) => void) => {
        callback(jwtToken);
      },
    );
  }, []);

  const logoutUser = React.useCallback(() => {
    ZendeskApi("messenger", "logoutUser");
  }, []);

  const initialProviderValue: ZendeskContextValues = {
    show,
    hide,
    open,
    close,
    setLocale,
    setZIndex,
    setCookies,
    setConversationFields,
    setConversationTags,
    loginUser,
    logoutUser,
    isOpen,
    unreadMessages,
  };

  return (
    <ZendeskContext.Provider value={initialProviderValue}>
      {children}
    </ZendeskContext.Provider>
  );
};
