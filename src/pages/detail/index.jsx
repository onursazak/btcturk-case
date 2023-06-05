import AddOrRemoveFromReadList from "@/components/AddOrRemoveFromReadList/AddOrRemoveFromReadList";
import Image from "@/components/Image/Image";
import styles from "./Detail.module.scss";
import { useGetPageDataFromUrl } from "@/hooks/useGetPageDataFromUrl";
import BackLink from "@/components/BackLink/BackLink";

const Detail = () => {
  const pageData = useGetPageDataFromUrl();

  const {
    author,
    content,
    description,
    title,
    publishedAt,
    source,
    urlToImage,
  } = pageData;

  const { id: sourceId } = source;

  return (
    <main className={styles.detail}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>
        <i>{description}</i>
      </p>

      <Image src={urlToImage} className={styles.image} />

      <p
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>

      <p className={styles.author}>
        <b>{author}</b>
      </p>

      <AddOrRemoveFromReadList
        sourceId={sourceId}
        publishedAt={publishedAt}
        data={pageData}
      />

      <BackLink className={styles.backLink} to={`/news?sources=${sourceId}`} />
    </main>
  );
};

export default Detail;
