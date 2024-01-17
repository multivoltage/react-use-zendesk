export type ZendeskProviderProps = {
  apiKey: string;
  onOpen?: () => void;
  onClose?: () => void;
  onUnreadMessages?: (count: number) => void;
};

export type ZendeskConversationField = {
  id: string;
  value: string | number | boolean;
};

export type ZendeskContextValues = {
  show: () => void;
  hide: () => void;
  open: () => void;
  close: () => void;
  setLocale: (newLocale: string) => void;
  setZIndex: (newZIndex: number) => void;
  setCookies: (isEnabled: boolean) => void;
  setConversationFields: (
    conversationFields: Array<ZendeskConversationField>
  ) => void;
  setConversationTags: (conversationTags: Array<string>) => void;
  loginUser: (jwtToken: string) => void;
  logoutUser: () => void;
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
  | "logoutUser";
