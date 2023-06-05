import { Link } from "react-router-dom";
import styles from "./BackLink.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const BackLink = ({ to, children, className }) => {
  let _className = cx({
    backLink: true,
    [className]: !!className,
  });

  return (
    <Link className={_className} to={to}>
      {"<"} {children || "Back"}
    </Link>
  );
};

export default BackLink;
