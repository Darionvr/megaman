
import styles from '@/app/ui/about.module.css'
import Title from './titles'

export const About = () => {
    return (
        <section id='about' className={styles.about_section}>
            <Title title="About" />
            <div className={styles.subtitle}> <span> What is Mega Man Star Force?</span></div>
            <div className={styles.wrap}>

                <div className={styles.inner}>
                    <div className={styles.img_left}>
                        <img src="/images/pic_about_left.png" alt="Geo Stelar" />
                    </div>
                    <div className={styles.img_right}>
                        <img src="/images/pic_about_right.png" alt="Megaman" />
                    </div>
                    <div className={styles.wrap_text}>
                        <p>
                            To celebrate Mega Man's 20th anniversary, the new titles Mega Man Star Force Pegasus, Mega Man Star Force Leo, and Mega Man Star Force Dragon were released simultaneously. They used the best of the Battle Network series' features, with the addition of new and exciting gameplay.
                        </p>
                        <h3>The World of Mega Man Star Force    </h3>
                        <p>It is the year 220X, and the world has seen rapid advancements in Wave technology. Our protagonist, 11-year-old Geo Stelar, refuses to go to school as he mourns the disappearance of his astronaut father.
                            One night, Geo is at the observatory gazing at stars as he usually does. Suddenly, his Transer picks up a signal from space and he is hit with a powerful electric shock!
                            When he finally comes to, an alien with an electromagnetic wave body called Omega-Xis is standing over him...</p>
                    </div>
                </div>

            </div>
           
        </section>
    )
}
