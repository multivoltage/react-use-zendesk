export type ZendeskProviderProps = {
  apiKey: string;
};

export type ZendeskContextValues = {
  show: () => void;
  hide: () => void;
};

export type ZendeskMethod = "show" | "hide" | "open" | "close";
