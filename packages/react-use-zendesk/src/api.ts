import { ZendeskMethod } from "./types";
import { isSSR } from "./utils";

type Scope = "messenger" | "messenger:on" | "messenger:set" | "messenger:ui";
export const ZendeskApi = (
  scope: Scope,
  method: ZendeskMethod,
  ...args: Array<unknown>
) => {
  if (!isSSR && !!window && window.zE) {
    return window.zE.apply(null, [scope, method, ...args]);
  }
};
