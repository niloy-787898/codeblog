import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Code Blog</h1>
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque
          nam quaerat facere, vitae pariatur vero praesentium in, asperiores
          unde id totam aspernatur blanditiis obcaecati est odio autem eum
          nulla?
        </p>

        <h2>Services Offered</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          quis. Saepe, blanditiis harum cum excepturi maiores atque mollitia
          quas itaque qui, exercitationem id quaerat magnam repellat quia fugiat
          hic iure sit vitae officiis eligendi.
        </p>
        <p>We offer the following services</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>solving &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>

          <div className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>

        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et animi
          harum assumenda necessitatibus explicabo nam, corporis deleniti, ab ad
          praesentium blanditiis iste saepe perferendis impedit architecto quia
          cupiditate? Accusantium est in inventore repellendus unde. Dolores
          labore deserunt corrupti fugiat ratione perspiciatis illo optio
          suscipit aliquid cumque nihil soluta earum, assumenda eligendi nulla
          sed molestias unde?
        </p>
      </main>
    </div>
  );
};
export default About;
