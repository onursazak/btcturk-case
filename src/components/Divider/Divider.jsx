import styles from "./Divider.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const Divider = ({ className, type = "solid" }) => {
  let _className = cx({
    divider: true,
    [className]: !!className,
  });

  return (
    <div className={`${_className} ${styles[type]}`}>
      <hr />
    </div>
  );
};

export default Divider;
