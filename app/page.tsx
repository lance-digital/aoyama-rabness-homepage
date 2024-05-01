import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}></h1>
          <p className={styles.description}></p>
        </div>
        <Image
          className={styles.bgimg}
          src="/aorabphoto.png"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>WHAT&apos;S NEW</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.movie}>
        <div className={styles.horizontal}>
          <div className={styles.movieContainer}>
            <div className={styles.movieIteme}>
              <div className={styles.movieWrap}>
                <p>5th Single『しあわせカーテン』MV</p>
                <iframe
                  width="350"
                  height="300"
                  src="https://www.youtube.com/embed/hkVV52IU1eM"
                  title="青山Rabness / 5th Single「しあわせカーテン」[Music Video]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={styles.movieWrap}>
                <p>4thシングル『シンデレラサマー』MV</p>
                <iframe
                  width="350"
                  height="300"
                  src="https://www.youtube.com/embed/tDHkaXm0hRU"
                  title="青山Rabness / 4th Single「シンデレラサマー」[Music Video]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={styles.movieWrap}>
                <p>3rdシングル『Speak like a star child』MV</p>
                <iframe
                  width="350"
                  height="300"
                  src="https://www.youtube.com/embed/vGEzoKIo9jA"
                  title="青山Rabness / 3rd Single「Speak like a star child」[Music Video]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={styles.movieWrap}>
                <p>2ndシングル『わがままヘアアレンジ』MV</p>
                <iframe
                  width="350"
                  height="300"
                  src="https://www.youtube.com/embed/qSMQZ3LkC1U"
                  title="青山Rabness / 2nd Single わがままヘアアレンジ [Music Video]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={styles.movieWrap}>
                <p>1st Single『マイアミ・ブルー』MV</p>
                <iframe
                  width="350"
                  height="300"
                  src="https://www.youtube.com/embed/T0lwViJMvc0"
                  title="青山Rabness / 1st Single「マイアミ・ブルー」[Music Video]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            {/* <ButtonLink href="/business">もっとみる</ButtonLink> */}
          </div>
        </div>
      </section>
      <div className={styles.profile}>
        <div className={styles.profileTitle}>
          <p>PROFILE</p>
        </div>
        <section>
          <div className={styles.horizontal}>
            <div className={styles.profileContent}>
              <p>
                2020年1月24日デビューの正統派王道アイドルグループ！<br></br>
                何にも染まらない「あなたのままで」をコンセプトに 活動しております。<br></br>
                音楽はエレクトリック×王道メロディラインで、<br></br>
                懐かしいけど新しいをテーマに楽曲を提供しております。
              </p>
            </div>
          </div>
          <div className={styles.profileImg}>
            <img className={styles.memberImg} src="rikosan-photo.png" alt="" />
            <img className={styles.memberImg} src="honokasan-photo.png" alt="" />
            <img className={styles.memberImg} src="reisan-photo.png" alt="" />
            <img className={styles.memberImg} src="harunasan-photo.png" alt="" />
            <img className={styles.memberImg} src="miriasan-photo.png" alt="" />
            <img className={styles.memberImg} src="rukasan-photo.png" alt="" />
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <img className={styles.aorabGoodsImg} src="aorab-goods.png" alt="" />
        <div className={styles.side}>
          <p>公式ファンアプリ</p>
          <img className={styles.aorabFanappImg} src="aorab-fanapp.png" alt="" />
          <ul className={styles.SNSbtn}>
            <li>
              <a href="https://twitter.com/AoyamaRabness" target="_blank">
                <img src="X_アイコン.png" alt="twitter" width="40" height="40" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aoyama_rabness/" target="_blank">
                <img src="instagram.png" alt="instagram" width="40" height="40" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCSdMSoA-0HHHz575n0ZNgwg" target="_blank">
                <img src="YouTube_アイコン.png" alt="youtube" width="40" height="40" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@aoyama_rabness?language=ja&amp;sec_uid=MS4wLjABAAAASOisPmax5bydZp0L66VdwR8bxbuFgLHHYBMEYln8xFupnBPb35nua_QKmBkOq5Y7&amp;u_code=da5a099d9g5fhi&amp;utm_source=copy&amp;app=tiktok&amp;iid=6810301971712902913&amp;utm_campaign=client_share&amp;utm_medium=ios&amp;tt_from=copy&amp;user_id=6776798000825222145&amp;source=h5_t&amp;_r=1"
                target="_blank"
              >
                <img src="tiktok.png" alt="tiktok" width="40" height="40" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div className={styles.discography}>
            <h2 className={styles.sectionTitleEn}>DISCOGRAPHY</h2>
            <div className={styles.discographyItem}>
              <div className={styles.jaketImg}>
                <img src="5th-single-jaket.png" alt="" />
                <img src="4th-single-jaket.png" alt="" />
                <img src="3th-single-jaket.png" alt="" />
                <img src="2th-single-jaket.png" alt="" />
                <img src="1th-single-jaket.png" alt="" />
              </div>
            </div>
            {/* <ButtonLink href="/discography">詳しくはこちら</ButtonLink> */}
          </div>
        </div>
      </section>
    </>
  );
}
