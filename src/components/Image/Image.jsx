import styles from "./Image.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const Image = ({ src, className }) => {
  let _className = cx({
    image: true,
    [className]: !!className,
  });

  return (
    <div className={_className}>
      <img src={src} alt="news image" />
    </div>
  );
};

export default Image;
