import styles from './Main.module.scss'
import { data } from '../data'
import quoatesImg from '../images/bg-pattern-quotation.svg'

const Main = () => {
	return (
		<main className={styles.main}>
			{data.map(({ img, text, desc, name }, index) => {
				return (
					<section className={styles.section} key={index}>
						<div className={styles.upBox}>
							<img
								src={img}
								alt={`${name} profile picture`}
								className={styles.img}
							/>
							<div className={styles.upName}>
								<p className={styles.name}>{name}</p>
								<p className={styles.graduate}>Verifed Graduate</p>
							</div>
						</div>
						<p className={styles.text}>{text}</p>
						<p className={styles.desc}>{desc}</p>
						{index === 0 && (
							<img
								src={quoatesImg}
								alt='Quotes'
								className={styles.quotes}
							/>
						)}
					</section>
				)
			})}
		</main>
	)
}
export default Main
