import { useZendesk } from "react-use-zendesk";

export function ValuesContainer() {
  const { isOpen, unreadMessages } = useZendesk();

  return (
    <div className="valuesContainer">
      <div className="title">Flags:</div>
      <p>
        isOpen: <span className="badge">{String(isOpen)}</span>
      </p>
      <p>
        unreadMessages: <span className="badge">{String(unreadMessages)}</span>
      </p>
    </div>
  );
}
