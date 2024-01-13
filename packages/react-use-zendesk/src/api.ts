import { ZendeskMethod } from "./types";
import { isSSR } from "./utils";

export const ZendeskApi = (method: ZendeskMethod, ...args: Array<unknown>) => {
  if (!isSSR && !!window && window.zE) {
    return window.zE.apply(null, [method, ...args]);
  }
};
