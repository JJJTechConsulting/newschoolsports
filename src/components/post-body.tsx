import styles from "./post-body.module.css";

export default function PostBody({ content }: { content: HTMLElement }) {
  return (
    <div className="">
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content as unknown as string }} />
    </div>
  );
}
