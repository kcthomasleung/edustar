import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../styles/landing-page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edustar - Blockchain-Powered Education Platform</title>
        <meta
          name="description"
          content="Edustar - An innovative educational platform integrating Astar blockchain for NFT certification"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Edustar</h1>

        <p className={styles.description}>
          Revolutionizing Education with Blockchain Technology
        </p>

        <section className={styles.section}>
          <h2>Our Journey</h2>
          <p>
            At last year's hackathon, we introduced our MVP, which featured an
            AI-powered search algorithm capable of finding the most relevant
            educational content from our database, along with the integration of
            the Astar blockchain to deploy NFT smart contracts on the Shibuya
            testnet. Our MVP demonstrated the ability for users to mint NFT
            certificates upon successful course completion, showcasing the
            potential of our platform to provide authenticated,
            blockchain-secured proof of learning.
          </p>
          <p>
            Since then, we have continued from where we left off, leveraging the
            foundation we built at the previous hackathon to make significant
            advancements. This year, we focused on expanding and enhancing our
            platform's capabilities to bring more value to our users.
          </p>
        </section>

        <section className={styles.section}>
          <h2>New Features</h2>
          <ul>
            <li>
              <strong>AI-Powered Chatbot:</strong> Leveraging OpenAI API, our
              chatbot provides course suggestions and supports audio output.
            </li>
            <li>
              <strong>User-Generated Courses:</strong> Users can now create and
              publish their own courses, set prices, and receive payments
              directly to their wallets.
            </li>
            <li>
              <strong>Crypto Payments for Courses:</strong> Purchase courses
              using crypto tokens, with transactions generating an NFT as proof
              of ownership.
            </li>
            <li>
              <strong>Enhanced UI/UX:</strong> We've made significant
              improvements to our user interface and overall user experience.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Roadmap</h2>

          <img
            src="/img/Roadmap.png"
            alt="Edustar Roadmap"
            className={styles.roadmapImage}
          />
        </section>

        <section className={styles.section}>
          <h2>Get Involved</h2>
          <p>
            Join us in our mission to revolutionize education through blockchain
            technology. Whether you're an educator, a learner, or a blockchain
            enthusiast, there's a place for you at Edustar.
          </p>
          <a href="/" className={styles.button}>
            Get Started
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer /> <br />
      </footer>
    </div>
  );
}
