"use client";
import React from "react";
import { ZendeskContext } from "./context";
import { ZendeskContextValues, ZendeskProviderProps } from "./types";
import { PropsWithChildren } from "react";
import { initialize } from "./initialize";

export const ZendeskProvider: React.FC<
  PropsWithChildren<ZendeskProviderProps>
> = ({ apiKey, children }) => {
  const isBooted = React.useRef(false);
  if (!isBooted.current) {
    initialize(apiKey);
    isBooted.current = true;
  }

  const initialProviderValue: ZendeskContextValues = {};

  return (
    <ZendeskContext.Provider value={initialProviderValue}>
      {children}
    </ZendeskContext.Provider>
  );
};
