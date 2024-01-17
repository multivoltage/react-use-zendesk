import { ZendeskContextValues, useZendesk } from "react-use-zendesk";
import styles from "../page.module.css";
import { useContext } from "react";

export interface ExampleProps {
  id: string;
  title: string;
  description: React.ReactNode;
  buttonText: string;
  onClick: (hook: ZendeskContextValues) => void;
  callbackWith?: {
    callbackId: string;
    params: IArguments;
  };
}

export const Example: React.FC<ExampleProps> = ({
  title,
  description,
  buttonText,
  onClick,
  callbackWith,
  id,
}) => {
  const hook = useZendesk();

  function handleClick() {
    onClick(hook);
  }

  return (
    <section className={styles.section}>
      <div className={styles.title}>{title}</div>
      <div className={styles.grid}>
        <div>{description}</div>

        <div>
          <button className={styles.button} onClick={handleClick}>
            {buttonText}
          </button>
        </div>
        {callbackWith?.params && callbackWith.callbackId === id && (
          <div className={styles.callBackContainer}>
            callback called with arguments:
            <pre>{JSON.stringify(callbackWith.params, null, 4)}</pre>
          </div>
        )}
      </div>
    </section>
  );
};
