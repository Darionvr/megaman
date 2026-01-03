import styles from "./page.module.css";
import { Navbar } from "./ui/navbar";
import { Hero } from "./ui/hero-section";
import { About } from "./ui/about-section";
import { Online } from "./ui/online-section";
import { Characters } from "./ui/characters";
import { Footer } from "./ui/footer";


export default function Home() {
  return (
    <div className={styles.page}>

    <Navbar />
      <main className={styles.main}>
        <Hero/>
        <About/>
       <Online/>
       <Characters/>

       
      </main>
      <Footer/>
    </div>
  );
}
