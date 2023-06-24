'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/Navbar'
import Quiz from '../../components/Quiz'
import { useTheme } from "next-themes";
import { useEffect } from 'react';

export default function Home() {

  const { theme, setTheme } = useTheme();

useEffect(() => {
  document.body.dataset.theme = theme;
}, []);

  return (
    <main className={styles.main}>
          <Navbar/>

      <div className={styles.description}>
        <p>
          <code className={styles.code}>src/app/page.js</code>
        </p>
      </div>

      {/* <div className={styles.center}> */}
      {/* </div> */}
      {/* <Navbar/> */}

      <div>
        <Quiz/>
      </div>
    </main>
  )
}
