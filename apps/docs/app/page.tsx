"use client";
import styles from "./page.module.css";
import { ZendeskProvider } from "react-use-zendesk";
import { Section1 } from "./components/Section1";

export default function Page(): JSX.Element {
  return (
    <ZendeskProvider apiKey={process.env.NEXT_PUBLIC_ZENDESK_API_KEY || ""}>
      <main className={styles.main}>
        <Section1 />
      </main>
    </ZendeskProvider>
  );
}
