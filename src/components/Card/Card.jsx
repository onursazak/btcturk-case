import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "@/components/Image/Image";
import AddOrRemoveFromReadList from "@/components/AddOrRemoveFromReadList/AddOrRemoveFromReadList";

let cx = classNames.bind(styles);

const Card = ({
  data,
  showDivider,
  imageClass,
  urlToImage,
  title,
  description,
  publishedAt,
  sourceId,
}) => {
  let _className = cx({
    item: true,
    showDivider: !!showDivider,
  });

  const url = generateUrl(data);

  return (
    <article className={_className}>
      <Link to={url}>
        <Image src={urlToImage} className={imageClass} />
        <h3 className={styles.title} title={data.title} aria-label={data.title}>
          {title}
        </h3>
      </Link>

      <div className={styles.content}>
        <p
          className={styles.description}
          title={data.description}
          aria-label={data.description}
        >
          {description}
        </p>
      </div>

      <AddOrRemoveFromReadList
        sourceId={sourceId}
        publishedAt={publishedAt}
        data={data}
      />
    </article>
  );
};

const generateUrl = (data) => {
  const encoded = encodeURIComponent(JSON.stringify(data));
  return `/detail?data=${encoded}`;
};
export default Card;
