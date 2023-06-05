import { RightArrowButton } from "@/assets/icons/RightArrowButton";
import styles from "./NewsSource.module.scss";
import Divider from "@/components/Divider/Divider";
import { useNavigate } from "react-router-dom";

const NewsSource = ({ id, title, content, showDivider }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news?sources=${id}`);
  };

  return (
    <>
      {showDivider && <Divider type="dashed" />}
      <div className={styles.newsSource} onClick={handleClick}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{content}</p>
        </div>
        <RightArrowButton className={styles.button} />
      </div>
    </>
  );
};

export default NewsSource;
