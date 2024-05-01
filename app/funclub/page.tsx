import { addHookAliases } from 'next/dist/server/require-hook';
import styles from './page.module.css';
import ContactForm from '@/app/_components/ContactForm';

export default function Page() {
  return (
    <div className={styles.container}>
      <img className={styles.title} src="ファンクラブ.png" alt="" />
      <img className={styles.fanapplogo} src="aorab-fanapp.png" alt="" />
      <h1 className={styles.text}>◆青ラビモバイルとは</h1>
      <p>
        青ラビモバイルは、青山rabnessのファンコミュニティアプリです。これまでのファンクラブとは異なり、ファンは、運営のサポート等を通じてアイドル運営の一部に携わることもできます。
        メンバー、運営、ファンが一丸となって、日本一愛されるアイドルグループ「青山Rabness」を作りあげましょう！
      </p>
      <h1 className={styles.text}>◆アプリのダウンロード</h1>
      <div className={styles.appDownload}>
        <div className={styles.app}>
          <p>android版</p>
          <a href="https://play.google.com/store/apps/details?id=jp.co.toiware.aorabi&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              alt="Google Play で手に入れよう"
              src="https://play.google.com/intl/us-en/badges/static/images/badges/ja_badge_web_generic.png"
              width={250}
              height={97}
            />
          </a>
        </div>
        <div className={styles.app}>
          <p>iOS版</p>
          <a href="https://apps.apple.com/jp/app/%E9%9D%92%E5%B1%B1rabness/id1508151358">
            <img src="black.svg" alt="" width={250} height={97} />
          </a>
        </div>
      </div>
      {/* <img className={styles.functionImg} src="appfunction.png" alt="" /> */}
      <h1 className={styles.text}>◆青ラビモバイルの機能</h1>
      <ul className={styles.function}>
        <li>
          <h2>タイムライン</h2>
          <p>
            メンバーや運営、他のコミュニティメンバーの投稿をみることができます。イベント情報や、メンバーからの情報など、コミュニティでの活動に関する様々な情報を随時知ることができる機能です。
          </p>
        </li>
        <li>
          <h2>クエスト</h2>
          <p>
            メンバー、またはURLが「クエスト」を作成し、コミュニティメンバーに公開する機能です。
            「クエスト」の内容は、メンバーがその時困っていることや、運営が考えた企画等千差万別です。コミュニティメンバーは「クエスト」を時に競い合い、時に助け合って達成することでアプリ内コインを手にいれることができます。
          </p>
        </li>
        <li>
          <h2>アイテム</h2>
          <p>
            運営が、グッズやライブチケットなどの「アイテム」を、コミュニティ内で販売する機能です。コミュニティメンバーは、クエスト等を通じて入手したアプリ内コインを、アイテムの購入に使用することができます。
          </p>
        </li>
      </ul>
      <h1 className={styles.text}>◆コミュニティへの参加</h1>
      <p>
        青ラビモバイルでは、コミュニティへの参加に際しコミュニティ会員費用(月額)が必要となります。
        コミュニティ会員費用は、コミュニティ毎に異なります。会員費用を確認したい場合は、各コミュニティの詳細画面をご参照下さい。
      </p>
      <h1 className={styles.text}>◆機種変更時の復元</h1>
      <p>
        機種変更時であっても、以前加入したコミュニティは引き続きご利用になれます。
        コミュニティ加入時と同じアカウントで青ラビモバイルにログインしてください。
        また、購入履歴を復元したい場合は、本画面の「購入を復元する」ボタンを押下してください。
      </p>
      <h1 className={styles.text}>◆コミュニティの退会</h1>
      <p>
        コミュニティを退会したい場合は、以下の順に操作を行ってください。
        <br />
        ①画面右上のメニューボタンを選択する
        <br />
        ②コミュニティ退会を選択する
        <br />
        ③注意事項を確認の上、退会ボタンを選択する
      </p>
      <h1 className={styles.text}>◆自動継続課金について</h1>
      <p>コミュニティの会員権は、コミュニティを退会しない限り自動更新されます。</p>
      <h1 className={styles.text}>◆注意点</h1>
      <p>
        コミュニティ会員費用はiTunesアカウントを経由して課金されます。
        <br />
        コミュニティを退会した場合、退会前のアカウントは復旧できません。
      </p>
      <h1 className={styles.text}>◆利用規約・プライバシーポリシー</h1>
      <p>
        ・利用規約<a href="https://butaiura.fan/lp/terms">https://butaiura.fan/lp/terms</a>
        <br />
        ・プライバシーポリシー
        <a href="https://butaiura.fan/lp/privacy">https://butaiura.fan/lp/privacy</a>
      </p>
      <h1 className={styles.text}>◆動作環境</h1>
      <p>
        iOS 12以上
        <br />
        ※正式にリリースされているOSのみ対応しています。
        <br />
        ※快適に動作することを保証するものではありません
      </p>
      <h1 className={styles.text}>◆推奨環境</h1>
      <p>
        「動作環境」に加えて、以下の条件を満たす環境を推奨しています。
        <br />
        ・iPhone 6以降
        <br />
        ・iPad 第5世代以降
      </p>
    </div>
  );
}
