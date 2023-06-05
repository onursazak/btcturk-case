import classNames from "classnames/bind";
import styles from "./FilterButton.module.scss";
import { SelectIcon } from "@/assets/icons/SelectIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";

/**
 * @see {@link https://www.npmjs.com/package/classnames classNames npm docs}
 *  */

let cx = classNames.bind(styles);

const FilterButton = ({ selected, children, onClick }) => {
  let className = cx({
    filterButton: true,
    selected,
  });

  const icon = selected ? <SelectIcon /> : <PlusIcon />;

  return (
    <button className={className} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default FilterButton;
