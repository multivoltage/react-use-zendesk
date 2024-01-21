"use client";

import { createContext } from "react";
import { ZendeskContextValues } from "./types";

export const ZendeskContext = createContext<ZendeskContextValues | undefined>(
  undefined,
);
