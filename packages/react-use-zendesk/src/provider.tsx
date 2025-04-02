"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
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
  const isRegisteredCb = useRef(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const [unreadMessages, setUnreadMessages] = React.useState<
    number | undefined
  >(undefined);

  const onOpenRef = useRef(onOpen);
  const onCloseRef = useRef(onClose);
  const onUnreadMessagesRef = useRef(onUnreadMessages);

  useLayoutEffect(() => {
    onOpenRef.current = onOpen;
    onCloseRef.current = onClose;
    onUnreadMessagesRef.current = onUnreadMessages;
  });

  function registerCallback() {
    if (isRegisteredCb.current) {
      return;
    }

    ZendeskApi("messenger:on", "open", function () {
      setIsOpen(true);
      !!onOpenRef.current && onOpenRef.current();
    });

    ZendeskApi("messenger:on", "close", function () {
      setIsOpen(false);
      !!onCloseRef.current && onCloseRef.current();
    });

    ZendeskApi(
      "messenger:on",
      "unreadMessages",
      function (unreadMessages: number) {
        setUnreadMessages(unreadMessages);
        onUnreadMessages && onUnreadMessages(unreadMessages);
      }
    );
    isRegisteredCb.current = true;
  }

  useEffect(() => {
    initialize(apiKey, registerCallback);
  }, [apiKey]);

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
    []
  );

  const setConversationTags = React.useCallback(
    (conversationTags: Array<string>) => {
      ZendeskApi("messenger:set", "conversationTags", conversationTags);
    },
    []
  );

  const loginUser = React.useCallback((jwtToken: string) => {
    ZendeskApi(
      "messenger",
      "loginUser",
      (callback: (token: string) => void) => {
        callback(jwtToken);
      }
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
