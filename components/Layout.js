import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "./Header";

export default ({ children }) => (
  <div>
    <Header />
    <div
      style={{ padding: "20px", margin: "20px", backgroundColor: "chocolate" }}
    >
      {children}
    </div>
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
      </a>
    </footer>
  </div>
);
