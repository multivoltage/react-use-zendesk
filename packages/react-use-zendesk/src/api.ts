import { ZendeskMethod } from "./types";
import { isSSR } from "./utils";

export const ZendeskApi = (
  scope: "messenger",
  method: ZendeskMethod,
  ...args: Array<unknown>
) => {
  if (!isSSR && !!window && window.zE) {
    return window.zE.apply(null, [scope, method, ...args]);
  }
};
