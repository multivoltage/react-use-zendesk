export function initialize(apiKey: string, onLoad: () => void) {
  if (
    !!apiKey &&
    typeof window !== "undefined" &&
    typeof window.zE === "undefined"
  ) {
    var appendScript = function () {
      setTimeout(function () {
        var s = document.createElement("script");
        s.id = "ze-snippet";
        s.type = "text/javascript";
        s.async = true;
        s.onload = () => {
          debugger;
        };
        s.onerror = () => {
          debugger;
        };
        s.onabort = () => {
          debugger;
        };
        s.src = "https://static.zdassets.com/ekr/snippet.js?key=" + apiKey;

        var x = document.getElementsByTagName("script")[0];
        x?.parentNode.insertBefore(s, x);
      }, 0);
    };

    if (document.readyState === "complete") {
      appendScript();
    } else if (window.attachEvent) {
      window.attachEvent("onload", appendScript);
    } else {
      window.addEventListener("load", appendScript, false);
    }
  }
}
