"use client";
import React from "react";
import { ZendeskContext } from "./context";
import { ZendeskContextValues } from "./types";

export function useZendesk() {
  const context = React.useContext(ZendeskContext);
  if (context === undefined) {
    throw new Error(`"useZendesk" must be used within "ZendeskProvider"`);
  }
  return context as ZendeskContextValues;
}
