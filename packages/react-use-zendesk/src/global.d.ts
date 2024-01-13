export {};
declare global {
  interface Window {
    attachEvent: any; // old browser only
    zE?: (...params) => void;
  }
  interface HTMLScriptElement {
    parentNode: any;
  }
}
