import styles from "./DefaultHeader.module.scss";

export type Props = {};

export const DefaultHeader: React.FC<Props> = ({}) => {
  return (
    <div className={styles.header}>
      <p>これはヘッダーです</p>
    </div>
  );
};
