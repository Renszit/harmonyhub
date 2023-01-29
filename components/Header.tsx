import styles from "@/styles/Home.module.css";
import { strings } from "@/constants/strings";




const Header = () => {
  return <h1 className={styles.title}>{strings.productTitle}</h1>;
};

export default Header;
