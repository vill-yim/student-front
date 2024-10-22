import { Cover } from './Cover'
import  {FlexFirstCover} from './FlexFirstCover'
import CoverUser from './CoverUser'
import styles from '../../../styles/user/landing.module.css'

export const HomeUser = () => {
  return (
    <div className={styles["content-home"]}>
      <CoverUser/>
      <FlexFirstCover />
      <Cover />
    </div>
  );
}
//<SectionCategory/>
