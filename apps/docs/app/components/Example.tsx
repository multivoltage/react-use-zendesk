import { ZendeskContextValues, useZendesk } from "react-use-zendesk";

export interface ExampleProps {
  id: string;
  title: string;
  description: React.ReactNode;
  buttonText: string;
  onClick: (hook: ZendeskContextValues) => void;
}

export const Example: React.FC<ExampleProps> = ({
  title,
  description,
  buttonText,
  onClick,
}) => {
  const hook = useZendesk();

  function handleClick() {
    onClick(hook);
  }

  return (
    <section className="section">
      <div className="title">{title}</div>
      <div className="row-grid">
        <div>{description}</div>

        <div>
          <button className="button" onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};
