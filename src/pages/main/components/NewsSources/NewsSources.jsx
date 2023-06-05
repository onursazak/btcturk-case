import NewsSource from "@/pages/main/components/NewsSource/NewsSource";
import styles from "./NewsSources.module.scss";

const NewsSources = ({ sources }) => {
  return (
    <div className={styles.newsSources}>
      {sources.map((source, index) => {
        return (
          <NewsSource
            key={source.id}
            id={source.id}
            showDivider={index !== 0}
            title={source.name}
            content={source.description}
          />
        );
      })}
    </div>
  );
};

export default NewsSources;
