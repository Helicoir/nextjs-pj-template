import { UseTestRequest } from "@/usecases/TestRequest";
import styles from "./DefaultHeader.module.scss";

export type Props = {};

export const DefaultHeader = () => {
  const { data, error } = UseTestRequest();

  return (
    <div className={styles.header}>
      <p>これはヘッダーです</p>
      <p>{data?.test}</p>
    </div>
  );
};
