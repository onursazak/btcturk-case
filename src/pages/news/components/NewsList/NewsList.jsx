import Card from "@/components/Card/Card";
import styles from "./NewsList.module.scss";
import { useGetDeviceType } from "@/hooks/useGetDeviceType";
import { truncate } from "@/utils/string";

const NewsList = ({ articles }) => {
  const { isDesktop } = useGetDeviceType();

  return (
    <section className={styles.newsList}>
      {articles.map((article, index) => {
        const isLastElement = index === articles.length - 1;

        return (
          <Card
            key={article.title}
            showDivider={!isDesktop && !isLastElement}
            data={article}
            imageClass={styles.image}
            urlToImage={article.urlToImage}
            title={isDesktop ? truncate(article.title, 30) : article.title}
            description={
              isDesktop
                ? truncate(article.description, 50)
                : article.description
            }
            publishedAt={article.publishedAt}
            sourceId={article.source.id}
          />
        );
      })}
    </section>
  );
};

export default NewsList;
