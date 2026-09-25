import styles from "./global-background.module.css";

export function GlobalBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.ambient} />
      <div className={styles.veil} />
      <div className={styles.noise} />
      <div className={styles.lattice} />
      <div className={styles.contentShield} />
    </div>
  );
}
