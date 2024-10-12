import styles from '../../styles/user/landing.module.css'
import { Cover } from './Cover'

export const HomeUser = () => {
  return (
    <div className={styles["content-home"]}>
      <Cover />
    </div>
  );
}
