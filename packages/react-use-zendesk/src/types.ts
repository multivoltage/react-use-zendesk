export type ZendeskProviderProps = {
  apiKey: string;
};

export type ZendeskContextValues = {
  show: () => void;
  hide: () => void;
  open: () => void;
  close: () => void;
};

export type ZendeskMethod = "show" | "hide" | "open" | "close";
