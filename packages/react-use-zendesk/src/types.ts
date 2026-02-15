type AbstractMessagingEvent = {
  createdAt: number;
  id: string;
};

export type EventMessagingOpenedClosed = AbstractMessagingEvent & {
  type: "messagingOpened" | "messagingClosed";
};
export type EventMessagingProactiveMessageDisplayed = AbstractMessagingEvent & {
  type: "proactiveMessageDisplayed";
  payload: {
    proactiveMessageId: number;
    campaignId: string;
  };
};
export type EventMessagingProactiveMessageClicked = AbstractMessagingEvent & {
  type: "proactiveMessageClicked";
  payload: {
    proactiveMessageId: number;
    campaignId: string;
  };
};
export type EventMessagingConversationStarted = AbstractMessagingEvent & {
  type: "conversationStarted";
  payload: {
    conversation: {
      id: string;
    };
  };
};
export type EventMessagingConversationOpened = AbstractMessagingEvent & {
  type: "conversationOpened";
  payload: {
    conversation: {
      id: string | null;
    };
  };
};
export type EventMessagingNewConversationButtonClicked = AbstractMessagingEvent & {
  type: "newConversationButtonClicked",
  payload: {
    newConversationSource: string
  }
}
export type EventMessagingConversationWithAgentRequested = AbstractMessagingEvent & {
  type: "conversationWithAgentRequested",
  payload: {
    conversation: {
      id: string
    }
  }
}
export type EventMessagingConversationAgentAssigned = AbstractMessagingEvent & {
  type: "conversationAgentAssigned",
  payload: {
    conversation: {
      id: string
    }
  }
}
export type EventMessagingMessagesShown = AbstractMessagingEvent & {
  type: "messagesShown",
  payload: {
    conversation: {
      id: string
    },
    messages: Array<{
      id: string;
      received: string
      role: string
    }>
  }
}


export type ZendeskProviderProps = {
  apiKey: string;
  onOpen?: (event: EventMessagingOpenedClosed) => void;
  onClose?: (event: EventMessagingOpenedClosed) => void;
  onUnreadMessages?: (count: number) => void;
  onResetWidget?: () => void;
  onProactiveMessageDisplayed?: (
    event: EventMessagingProactiveMessageDisplayed,
  ) => void;
  onProactiveMessageClicked?: (
    event: EventMessagingProactiveMessageClicked,
  ) => void;
  onConversationStarted?: (event: EventMessagingConversationStarted) => void;
  onConversationOpened?: (event: EventMessagingConversationOpened) => void;
  onNewConversationButtonClicked?: (event: EventMessagingNewConversationButtonClicked) => void
  onConversationWithAgentRequested?: (event: EventMessagingConversationWithAgentRequested) => void
  onConversationAgentAssigned?: (event: EventMessagingConversationAgentAssigned) => void
  onMessagesShown?: (event: EventMessagingMessagesShown) => void
};

export type ZendeskConversationField = {
  id: string;
  value: string | number | boolean;
};

export type LoginFailedError = {
  message: string;
  reason: string;
  type: string;
};

export type ZendeskCustomizationTheme = {
  primary: string;
  onPrimary: string;
  message: string;
  onMessage: string;
  action: string;
  onAction: string;
  businessMessage: string;
  onBusinessMessage: string;
  background: string;
  onBackground: string;
  error: string;
  onError: string;
  notify: string;
  onNotify: string;
  onSecondaryAction: string;
};

export type ZendeskConversationOptions = {
  displayName: string;
  iconUrl: string;
  metadata: object;
};

export type ZendeskContextValues = {
  show: () => void;
  hide: () => void;
  open: () => void;
  close: () => void;
  setLocale: (newLocale: string) => void;
  setZIndex: (newZIndex: number) => void;
  setCookies: (range: "all" | "functional" | "none") => void;
  setConversationFields: (
    conversationFields: Array<ZendeskConversationField>,
  ) => void;
  setConversationTags: (conversationTags: Array<string>) => void;
  loginUser: (
    jwtToken: string,
    loginCallback?: (error: null | LoginFailedError) => void,
  ) => void;
  logoutUser: () => void;
  resetWidget: () => void;
  setCustomize: (theme: Partial<ZendeskCustomizationTheme>) => void;
  newConversation: (
    conversationOptions?: Partial<ZendeskConversationOptions>,
  ) => void;
  useSessionAuth: () => void;
  isOpen: boolean;
  unreadMessages: number | undefined;
};

export type ZendeskMethod =
  | "show"
  | "hide"
  | "open"
  | "close"
  | "unreadMessages"
  | "locale"
  | "zIndex"
  | "cookies"
  | "conversationFields"
  | "conversationTags"
  | "loginUser"
  | "logoutUser"
  | "resetWidget"
  | "customization"
  | "useSessionAuth"
  | "newConversation"
  | "proactiveMessageDisplayed"
  | "proactiveMessageClicked"
  | "conversationStarted"
  | "conversationOpened"
  | "newConversationButtonClicked"
  | "conversationWithAgentRequested"
  | "conversationAgentAssigned"
  | "messagesShown"
