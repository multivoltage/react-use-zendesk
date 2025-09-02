import { useRef, useState } from "react";
import { Example, ExampleProps } from "./Example";
import { toast } from "sonner";

export const ExampleList: React.FC = () => {
  const [cookieActive, setCookieActive] = useState(true);
  const [jwt, setJwt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setJwt(query);
  }

  const examples: ExampleProps[] = [
    {
      id: "messenger show",
      title: "Show",
      description: (
        <div>
          Displays the widget. The widget is displayed by default on page load.
          You don't need to call <code>show</code> to display the widget unless
          you use <code>hide.</code>
        </div>
      ),
      buttonText: "show",
      onClick: ({ show }) => {
        show();
      },
    },
    {
      id: "messenger hide",
      title: "Hide",
      description: (
        <div>
          Hides all parts of the widget from the page. You can invoke it before
          or after page load.
        </div>
      ),
      buttonText: "hide",
      onClick: ({ hide }) => {
        hide();
      },
    },
    {
      id: "messenger open",
      title: "Open",
      description: (
        <div>Opens the messaging Web Widget. Chat become visible</div>
      ),
      buttonText: "open",
      onClick: ({ open }) => {
        open();
      },
    },
    {
      id: "messenger close",
      title: "Close",
      description: <div>Closes the messaging Web Widget.</div>,
      buttonText: "close",
      onClick: ({ close }) => {
        close();
      },
    },
    {
      id: "messenger set DE locale",
      title: "Set DE locale",
      description: (
        <div>
          Sets the locale of the messaging Web Widget. For a list of supported
          locales and associated codes, use the following{" "}
          <a
            href="https://support.zendesk.com/api/v2/locales/public.json"
            target="_blank"
          >
            Zendesk public REST API endpoint
          </a>
        </div>
      ),
      buttonText: "set DE locale",
      onClick: ({ setLocale }) => {
        setLocale("de");
      },
    },
    {
      id: "messenger set ES locale",
      title: "Set ES locale",
      description: (
        <div>
          Sets the locale of the messaging Web Widget. For a list of supported
          locales and associated codes, use the following{" "}
          <a
            href="https://support.zendesk.com/api/v2/locales/public.json"
            target="_blank"
          >
            Zendesk public REST API endpoint
          </a>
        </div>
      ),
      buttonText: "set ES locale",
      onClick: ({ setLocale }) => {
        setLocale("es");
      },
    },
    {
      id: "messenger set zIndex",
      title: "Set zIndex",
      description: (
        <div>
          Sets the CSS property z-index on all the iframes for the messaging Web
          Widget.
        </div>
      ),
      buttonText: "set (100) zIndex",
      onClick: ({ setZIndex }) => {
        setZIndex(100);
      },
    },
    {
      id: "messenger set cookies",
      title: "Set cookies",
      description: (
        <div>
          The messaging Web Widget uses a mixture of cookies as well as local
          and session storage in order to function.
        </div>
      ),
      buttonText: `set (${!cookieActive}) cookies`,
      onClick: ({ setCookies }) => {
        setCookies(!cookieActive);
        setCookieActive(!cookieActive);
      },
    },
    {
      id: "messenger set conversationFields",
      title: "Set conversation fields",
      description: (
        <div>
          Allows values for conversation fields to be set in the client to add
          contextual data about the conversation. To learn more about Messaging
          Metadata, see{" "}
          <a
            href="https://support.zendesk.com/hc/en-us/articles/5658339908378"
            target="_blank"
          >
            Introduction to Messaging Metadata.
          </a>
          <br />
          <br />
          example fields: <code>{`[{id: "123456789", value: 100.5}]`}</code>
        </div>
      ),
      buttonText: `set fields`,
      onClick: ({ setConversationFields }) => {
        setConversationFields([{ id: "123456789", value: 100.5 }]);
      },
    },
    {
      id: "messenger set conversationTags",
      title: "Set conversation tags",
      description: (
        <div>
          Allows custom conversation tags to be set in the client to add
          contextual data about the conversation. To learn more about Messaging
          Metadata, see{" "}
          <a
            href="https://support.zendesk.com/hc/en-us/articles/5868905484442"
            target="_blank"
          >
            Introduction to Messaging Metadata.
          </a>
          <br />
          <br />
          example tags: <code>{`["sales", "computer_accessories"]`}</code>
        </div>
      ),
      buttonText: `set tags`,
      onClick: ({ setConversationTags }) => {
        setConversationTags(["sales", "computer_accessories"]);
      },
    },
    {
      id: "messenger logins",
      title: "Login",
      description: (
        <div>
          If your application has a login flow, or if a user needs to access the
          same conversation from multiple devices, you can use the{" "}
          <code>loginUser</code> API.
          <br />
          <br /> This command works only with a generated and valid jw token.
          Please read
          <br />{" "}
          <a
            href="https://developer.zendesk.com/documentation/conversations/messaging-platform/users/authenticating-users-your-app/#generating-a-signing-key"
            target="_blank"
          >
            Authenticating users in your application
          </a>
          <br />
          <br />
          <input
            placeholder="eyJhbGci...."
            ref={inputRef}
            type="text"
            value={jwt}
            style={{
              width: "100%",
              height: 30,
            }}
            onChange={handleChange}
          />
        </div>
      ),
      buttonText: `login`,
      onClick: ({ loginUser }) => {
        if (!jwt) {
          toast.error("please type a valid jwt token");
          return;
        }
        loginUser(jwt, (error) => {
          alert(`callbak for login with jwt ${jwt}:
            ${JSON.stringify(error, null, 2)}`);
        });
      },
    },
    {
      id: "messenger logout",
      title: "Logout",
      description: (
        <div>
          Your app may have a logout function that brings users back to a login
          screen. In this case, revert the messaging Web Widget to a pre-login
          state by calling the <code>logoutUser</code> API.
        </div>
      ),
      buttonText: `logout`,
      onClick: ({ logoutUser }) => {
        logoutUser();
      },
    },
    {
      id: "resetWidget",
      title: "Reset",
      description: (
        <div>
          This method clears all widget local state, including user data,
          conversations, and connections. To learn more about Reset Widget see{" "}
          <a
            href="https://developer.zendesk.com/api-reference/widget-messaging/web/core/#reset-widget"
            target="_blank"
          >
            Reset Widget
          </a>
          <br />
          Internally the library call this method when api key changes
        </div>
      ),
      buttonText: "reset",
      onClick({ resetWidget }) {
        resetWidget();
      },
    },
    {
      id: "useSessionAuth",
      title: "useSessionAuth",
      buttonText: "useSessionAuth",
      description: (
        <div>
          For use when the Web Widget is embedded in a Zendesk help center. To
          learn more about Reset Widget see{" "}
          <a
            href="https://developer.zendesk.com/api-reference/widget-messaging/web/authentication/#use-session-auth"
            target="_blank"
          >
            useSessionAuth
          </a>
        </div>
      ),
      onClick({ useSessionAuth }) {
        useSessionAuth();
      },
    },
  ];
  return (
    <>
      {examples.map((example) => {
        const { title, description, onClick, buttonText, id } = example;

        return (
          <Example
            id={id}
            key={id}
            title={title}
            description={description}
            onClick={onClick}
            buttonText={buttonText}
          />
        );
      })}
    </>
  );
};
