import { ZendeskContextValues, useZendesk } from "react-use-zendesk";
import styles from "../page.module.css";

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
    <section className={styles.section}>
      <div className={styles.title}>{title}</div>
      <div className={styles.grid}>
        <div>{description}</div>

        <div>
          <button className={styles.button} onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};
