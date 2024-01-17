import { Example, ExampleProps } from "./Example";

export const ExampleList: React.FC = () => {
  const examples: ExampleProps[] = [
    {
      id: "messenger show",
      title: "Show",
      description: (
        <div>
          Displays the widget on the host page in the state it was in before it
          was hidden. The widget is displayed by default on page load. You don't
          need to call <code>show</code> to display the widget unless you use{" "}
          <code>hide.</code>
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
      description: <div>Opens the messaging Web Widget.</div>,
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
