import styles from '@/app/ui/titles.module.css'

const Title = ({title} : {title: string}) => {
  return (
       <div className={styles.title} >
                <div className={styles.left_line}></div>
                <h2 className={styles.text}> <span>{title}</span> </h2>
                <div className={styles.right_line}></div>
            </div>
  )
}

export default Title