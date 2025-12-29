import styles from "./page.module.css";
import { Navbar } from "./ui/navbar";
import { Hero } from "./ui/hero-section";
export default function Home() {
  return (
    <div className={styles.page}>

    <Navbar />
      <main className={styles.main}>
        <Hero/>
       
       
      </main>
    </div>
  );
}
