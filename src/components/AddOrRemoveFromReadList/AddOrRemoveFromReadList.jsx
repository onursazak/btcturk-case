import styles from "./AddOrRemoveFromReadList.module.scss";
import { RemoveIcon } from "@/assets/icons/RemoveIcon";
import { AddIcon } from "@/assets/icons/AddIcon";
import { useForceUpdate } from "@/hooks/useForceUpdate";
import { formatDate } from "@/utils/date";

const AddOrRemoveFromReadList = ({ sourceId, publishedAt, data }) => {
  const forceUpdate = useForceUpdate();

  const isInReadList = checkIfPresentInReadList(sourceId, publishedAt);

  const addToReadList = () => {
    localStorage.setItem(`${sourceId}:::${publishedAt}`, JSON.stringify(data));
    forceUpdate();
  };

  const removeFromReadList = () => {
    localStorage.removeItem(`${sourceId}:::${publishedAt}`);
    forceUpdate();
  };

  return (
    <div className={styles.addRemove}>
      {isInReadList ? (
        <button onClick={removeFromReadList}>
          <RemoveIcon /> <span>Remove my read list</span>
        </button>
      ) : (
        <button onClick={addToReadList}>
          <AddIcon />
          <span>Add to my read list</span>
        </button>
      )}
      <div className={styles.date}>{formatDate(publishedAt)}</div>
    </div>
  );
};

function checkIfPresentInReadList(sourceId, publishedAt) {
  if (!sourceId || !publishedAt) return;

  const splitter = ":::";

  const isPresent = !!localStorage.getItem(
    `${sourceId}${splitter}${publishedAt}`
  );

  return isPresent;
}

export default AddOrRemoveFromReadList;
