"use client";

import React from "react";
import { ZendeskContextValues } from "./types";

export const ZendeskContext = React.createContext<
  ZendeskContextValues | undefined
>(undefined);
