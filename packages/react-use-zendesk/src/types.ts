export type ZendeskProviderProps = {
  apiKey: string;
  onOpen?: () => void;
  onClose?: () => void;
  onUnreadMessages?: (count: number) => void;
};

export type ZendeskContextValues = {
  show: () => void;
  hide: () => void;
  open: () => void;
  close: () => void;
};

export type ZendeskMethod =
  | "show"
  | "hide"
  | "open"
  | "close"
  | "unreadMessages";
