import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Showcase from "./Showcase";
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ events | Find the hottest parties",
  description: "Find the latest DJ and other music events",
  keywords: "music ,dj, edm, events",
};
