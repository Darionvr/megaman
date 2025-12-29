import fs from 'fs'
import path from 'path'
import styles from '@/app/ui/navbar.module.css'

export const Navbar = () => {

    // Funciones para leer los logos SVG desde la carpeta
    const iconsDir = path.join(process.cwd(), "public/images/platforms");
    const files = fs.readdirSync(iconsDir);

    return (

        <nav className={styles.navbar}>
            <div className={styles.platforms}>
                <ul>
                    {files.map((svg) => (
                        <li key={svg}>
                            <img src={`/images/platforms/${svg}`} alt={svg} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.preorder}>
                <a href="#">
                    <span> Pre-order Now</span>
                    <span> Prepare For Launch!</span>
                </a>
            </div>
        </nav>
    )
}
