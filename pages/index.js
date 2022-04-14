import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maître Cuisinier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Image src="/logov1-2.png" width={256} height={256} alt="Logo"/>
       <h2 className={styles.center}>L&apos;été est là!<br/>L&apos;argent, c&apos;est maintenant!</h2>
       <h3>Modèle prototype</h3>
       <Image src="/smart-stove.png" width={500} height={300} alt="Render image"/>
       <h3>Description</h3>
       <p>Maître Cuisinier est un cuiseur portable pour les camionneurs de nourriture et il possède le premier cuiseur à écran tactile au monde.</p>
       <h3 className={styles.center}>Achetez ce produit à 300 $ avec une remise de 10 %.<br/> Contactez admin@maitre-cuisinier.ca pour commander votre cuisinière.</h3>
      </main>
    </div>
  )
}
