const IdScript = "ze-snippet";

export function initialize(apiKey: string, onLoad: () => void) {
  if (
    !!apiKey &&
    typeof window !== "undefined"
    // && typeof window.zE === "undefined"
  ) {
    const setup = () => {
      removeNodes();
      appendScript(apiKey, onLoad);
    };
    if (document.readyState === "complete") {
      setup();
    } else if (window.attachEvent) {
      window.attachEvent("onload", setup);
    } else {
      window.addEventListener("load", setup, false);
    }
  }
}

export function removeNodes() {
  if (typeof window !== "undefined") {
    delete window.zE;
    delete (window as any).zEmbed;
    delete (window as any).zEACLoaded;
    delete (window as any).zEWebpackACJsonp;
    var scriptElement = document.getElementById(IdScript);
    var frameElement = document.querySelector("iframe#launcher");
    if (scriptElement) {
      scriptElement.remove();
    }
    if (frameElement) {
      frameElement.remove();
    }
  }
}

export function appendScript(apiKey: string, onLoad: () => void) {
  setTimeout(function () {
    const s = document.createElement("script");
    s.id = IdScript;
    s.type = "text/javascript";
    s.async = true;
    s.onload = onLoad;

    s.src = "https://static.zdassets.com/ekr/snippet.js?key=" + apiKey;

    const x = document.getElementsByTagName("script")[0];
    x?.parentNode.insertBefore(s, x);
  }, 0);
}
