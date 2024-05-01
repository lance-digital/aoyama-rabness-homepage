import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <img className={styles.title} src="スケジュール.png" alt="" />
      <iframe
        className={styles.iframe}
        src="https://calendar.google.com/calendar/embed?src=naora.yuki%40lance-digital.com&ctz=Asia%2FTokyo"
        // style="border: 0"
        // width="700"
        height="600"
        // frameborder="0"
        // scrolling="no"
      ></iframe>
      <iframe
        className={styles.iframe}
        src="https://calendar.google.com/calendar/b/2/embed?width=600&amp;wkst=1&amp;bgcolor=%2300aedd&amp;ctz=Asia%2FTokyo&amp;src=YW95YW1hLnJhYm5lc3NAZ21haWwuY29t&amp;color=%2322AA99&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA"
        frameborder="0"
        // width="700"
        height="600"
      ></iframe>
    </div>
  );
}
