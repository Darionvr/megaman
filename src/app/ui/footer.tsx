import styles from '@/app/ui/footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.title_footer}>
            <img src="/images/capcom_c_f.png" alt="capcom logo" />
        <ul>
            <li>Terms</li>
            <li>Privacy Policiy</li>
            <li>Cookie Policy</li>
        </ul>
        </div>

    </footer>
  )
}
