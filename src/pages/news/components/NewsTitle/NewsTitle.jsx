import BackLink from "@/components/BackLink/BackLink";
import styles from "./NewsTitle.module.scss";

const NewsTitle = ({ children }) => {
  return (
    <section className={styles.newsTitle}>
      <h2>{children}</h2>
      <BackLink to="/">Go to News</BackLink>
    </section>
  );
};

export default NewsTitle;
