import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getMembersList({
    draftKey: searchParams.dk,
  });
  return (
    <div className={styles.container}>
      <img className={styles.title} src="メンバー.png" alt="" />
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image?.url as string}
                alt=""
                width={member.image?.width}
                height={member.image?.height}
                className={styles.image}
              />
              <dl className={styles.profile}>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile1}>{member.profile1}</dd>
                <dd className={styles.profile2}>{member.profile2}</dd>
                <dd className={styles.profile3}>{member.profile3}</dd>
                <dd className={styles.profile4}>{member.profile4}</dd>
                <dd className={styles.profile5}>{member.profile5}</dd>
                <dd className={styles.profile6}>{member.profile6}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
