import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Arrays from '../components/Arrays'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZTH:DSA</title>
        <meta name="description" content="DSA Questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Zero To Hero <Link href="/">DSA!</Link>
        </h1>

        <p className={styles.description}>
          By Piyush Yadav{' '}
          <code className={styles.code}>Scroll down for Questions</code>
        </p>

        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Usage &rarr;</h2>
            <p>All DSA IMP Questions Provided.</p>
          </Link>


          <Link href="/" className={styles.card}>
            <h2>Implement &rarr;</h2>
            <p>Implement in your favourite Language!</p>
          </Link>


          <Link
            href="/"
            className={styles.card}
          >
            <h2>Submition &rarr;</h2>
            <p>Submit Your code on LeetCode after practising each questions.</p>
          </Link>



          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Logic &rarr;</h2>
            <p>
              Write the Logic in Copy which you learned from Youtube
            </p>
          </Link>


        </div>
        <Arrays />
      </main>

      <footer className={styles.footer}>

        <h4>More will Upload after 1 week</h4>
        <em>Arrays will have 10 questions more </em>

        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by PY

        </Link>


      </footer>
    </div>
  )
}
