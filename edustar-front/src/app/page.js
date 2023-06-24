'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/Navbar'
import Quiz from '../../components/Quiz'
import { useTheme } from "next-themes";
import { useEffect } from 'react';
import Link from 'next/link'
import { NikeCard } from '../../components/3Dimension'
import HeroComponent from '../../components/HeroComponent'

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
        </p>
      </div>
      <HeroComponent/>
      {/* <h2 className={styles.title}>
        Verified education <a href="">with blockchain</a>
      </h2> */}

      {/* <NikeCard/> */}

      {/* <Link href="/quiz">
        <div className={styles.card}>
          <h2>Quiz &rarr;</h2>
          <p>Take a quiz to test your knowledge of the material.</p>
        </div>
      </Link> */}

      {/* <div className={styles.center}> */}
      {/* </div> */}
      {/* <Navbar/> */}

      <div>
      </div>
    </main>
  )
}
