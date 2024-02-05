'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="" onClick={close}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={close}>
              MEMBER
            </Link>
          </li>
          <li>
            <Link href="/news" onClick={close}>
              WHAT'S NEW
            </Link>
          </li>
          <li>
            <Link href="/discography" onClick={close}>
              DISCOGRAPHY
            </Link>
          </li>
          <li>
            <Link href="/schedule" onClick={close}>
              SCHEDULE
            </Link>
          </li>
          <li>
            <Link href="/regulation" onClick={close}>
              REGULATION
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={close}>
              CONTACT
            </Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
