import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Arrays from '../components/Arrays'
import Link from 'next/link'
import Comments from '../components/Comments'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const notify = () => {
    toast.success("Solutions are Available")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ZTH:DSA</title>
        <meta name="description" content="DSA Questions" />
          <meta name="google-site-verification" content="6aCoA5KjkKbXBAe2UpPIlr2vKnIDwGq-7X3v5np0eDs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Zero To Hero <Link href="/">DSA!</Link>
        </h1>
        <p className={styles.description}>
          Launched On Nov 2k22{' '}
          <code className={styles.code}>Scroll down for Questions</code>
        </p>
        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2 className="text-bold">Usage &rarr;</h2>
            <p>All DSA IMP Questions Provided.</p>
          </Link>
          <Link href="/" className={styles.card}>
            <h2 className="text-bold">Implement &rarr;</h2>
            <p>Implement in your favourite Language!</p>
          </Link>
          <Link
            href="/"
            className={styles.card}
          >
            <h2 className="text-bold">Updates &rarr;</h2>
            <p>Updates Questions after each One Week. Try Max 2-3Q daily</p>
          </Link>
          <Link
            href="/"
            className={styles.card}
          >
            <h2 className="text-bold">Logic &rarr;</h2>
            <p>
              Write the Logic in Copy which you learned from Youtube
            </p>
          </Link>
        </div>
        <h3 className='text-gray-600 pt-8 font-bold'>Questions Listed here</h3>
        <div onClick={notify}>
          <Arrays />
        </div>

        <hr />
        <h3 className={styles.title}>
          <span className='text-blue-600 '>Comments</span>
        </h3>
        <Comments />
      </main>
      <em>Arrays are completed, Next Topic will be String </em>
      <footer className={styles.footer}>
        <h4>More will Upload after 1 week</h4>
        <Link
          href="/"
          rel="noopener noreferrer"
        >
          Made with Love
        </Link>
      </footer>
    </div>
  )
}
