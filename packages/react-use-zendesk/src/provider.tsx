"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { ZendeskContext } from "./context";
import {
  EventMessagingConversationAgentAssigned,
  EventMessagingConversationOpened,
  EventMessagingConversationStarted,
  EventMessagingConversationWithAgentRequested,
  EventMessagingMessagesShown,
  EventMessagingNewConversationButtonClicked,
  EventMessagingOpenedClosed,
  EventMessagingProactiveMessageClicked,
  EventMessagingProactiveMessageDisplayed,
  LoginFailedError,
  ZendeskContextValues,
  ZendeskConversationField,
  ZendeskConversationOptions,
  ZendeskCustomizationTheme,
  ZendeskProviderProps,
} from "./types";
import { PropsWithChildren } from "react";
import { initialize } from "./initialize";
import { ZendeskApi } from "./api";

export const ZendeskProvider: React.FC<
  PropsWithChildren<ZendeskProviderProps>
> = ({
  apiKey,
  onOpen,
  onClose,
  onUnreadMessages,
  onResetWidget,
  onProactiveMessageDisplayed,
  onProactiveMessageClicked,
  onConversationStarted,
  onConversationOpened,
  onNewConversationButtonClicked,
  onConversationWithAgentRequested,
  onConversationAgentAssigned,
  onMessagesShown,
  children,
}) => {
  const isRegisteredCb = useRef(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const [unreadMessages, setUnreadMessages] = React.useState<
    number | undefined
  >(undefined);

  const onOpenRef = useRef(onOpen);
  const onCloseRef = useRef(onClose);
  const onUnreadMessagesRef = useRef(onUnreadMessages);
  const onResetWidgetRef = useRef(onResetWidget);
  const onProactiveMessageDisplayedRef = useRef(onProactiveMessageDisplayed);
  const onProactiveMessageClickedRef = useRef(onProactiveMessageClicked);
  const onConversationStartedRef = useRef(onConversationStarted);
  const onConversationOpenedRef = useRef(onConversationOpened);
  const onNewConversationButtonClickedRef = useRef(onNewConversationButtonClicked)
  const onConversationWithAgentRequestedRef = useRef(onConversationWithAgentRequested)
  const onConversationAgentAssignedRef = useRef(onConversationAgentAssigned)
  const onMessagesShownRef = useRef(onMessagesShown)

  useLayoutEffect(() => {
    onOpenRef.current = onOpen;
    onCloseRef.current = onClose;
    onUnreadMessagesRef.current = onUnreadMessages;
    onResetWidgetRef.current = onResetWidget;
    onProactiveMessageDisplayedRef.current = onProactiveMessageDisplayed;
    onProactiveMessageClickedRef.current = onProactiveMessageClicked;
    onConversationStartedRef.current = onConversationStarted;
    onConversationOpenedRef.current = onConversationOpened;
    onNewConversationButtonClickedRef.current = onNewConversationButtonClicked
    onConversationWithAgentRequestedRef.current = onConversationWithAgentRequested
    onConversationAgentAssignedRef.current = onConversationAgentAssigned
    onMessagesShownRef.current = onMessagesShown
  });

  function registerCallback() {
    if (isRegisteredCb.current) {
      return;
    }

    ZendeskApi(
      "messenger:on",
      "open",
      function (event: EventMessagingOpenedClosed) {
        setIsOpen(true);
        !!onOpenRef.current && onOpenRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "close",
      function (event: EventMessagingOpenedClosed) {
        setIsOpen(false);
        !!onCloseRef.current && onCloseRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "unreadMessages",
      function (unreadMessages: number) {
        setUnreadMessages(unreadMessages);
        !!onUnreadMessagesRef.current &&
          onUnreadMessagesRef.current(unreadMessages);
      },
    );

    ZendeskApi(
      "messenger:on",
      "proactiveMessageDisplayed",
      function (event: EventMessagingProactiveMessageDisplayed) {
        !!onProactiveMessageDisplayedRef.current &&
          onProactiveMessageDisplayedRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "proactiveMessageClicked",
      function (event: EventMessagingProactiveMessageClicked) {
        !!onProactiveMessageClickedRef.current &&
          onProactiveMessageClickedRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "conversationStarted",
      function (event: EventMessagingConversationStarted) {
        !!onConversationStartedRef.current &&
          onConversationStartedRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "conversationOpened",
      function (event: EventMessagingConversationOpened) {
        !!onConversationOpenedRef.current &&
          onConversationOpenedRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "newConversationButtonClicked",
      function (event: EventMessagingNewConversationButtonClicked) {
        !!onNewConversationButtonClickedRef.current &&
          onNewConversationButtonClickedRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "conversationWithAgentRequested",
      function (event: EventMessagingConversationWithAgentRequested) {
        !!onConversationWithAgentRequestedRef.current &&
          onConversationWithAgentRequestedRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "conversationAgentAssigned",
      function (event: EventMessagingConversationAgentAssigned) {
        !!onConversationAgentAssignedRef.current &&
          onConversationAgentAssignedRef.current(event);
      },
    );

    ZendeskApi(
      "messenger:on",
      "messagesShown",
      function (event: EventMessagingMessagesShown) {
        !!onMessagesShownRef.current &&
          onMessagesShownRef.current(event);
      },
    );

    isRegisteredCb.current = true;
  }

  useEffect(() => {
    initialize(apiKey, registerCallback);
    return () => {
      isRegisteredCb.current = false;
      resetWidget();
    };
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

  const setCookies = React.useCallback((range: string) => {
    ZendeskApi("messenger:set", "cookies", range);
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

  const newConversation = React.useCallback(
    (conversationOptions?: Partial<ZendeskConversationOptions>) => {
      ZendeskApi("messenger:ui", "newConversation", conversationOptions);
    },
    [],
  );

  const loginUser = React.useCallback(
    (
      jwtToken: string,
      loginCallback?: (error: null | LoginFailedError) => void,
    ) => {
      ZendeskApi(
        "messenger",
        "loginUser",
        (jwtTokenCb: (token: string) => void) => {
          jwtTokenCb(jwtToken);
        },
        loginCallback,
      );
    },
    [],
  );

  const logoutUser = React.useCallback(() => {
    ZendeskApi("messenger", "logoutUser");
  }, []);

  const resetWidget = React.useCallback(() => {
    ZendeskApi("messenger", "resetWidget", (callback: () => void) => {
      !!onResetWidgetRef.current && onResetWidgetRef.current();
    });
  }, []);

  const setCustomize = React.useCallback(
    (customization: Partial<ZendeskCustomizationTheme>) => {
      ZendeskApi("messenger:set", "customization", customization);
    },
    [],
  );

  const useSessionAuth = React.useCallback(() => {
    ZendeskApi("messenger", "useSessionAuth");
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
    resetWidget,
    setCustomize,
    newConversation,
    useSessionAuth,
    isOpen,
    unreadMessages,
  };

  return (
    <ZendeskContext.Provider value={initialProviderValue}>
      {children}
    </ZendeskContext.Provider>
  );
};
