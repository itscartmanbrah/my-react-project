import { astro1 } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
	<section id='' className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Find a better card deal <br className='sm:block hidden' /> in few east
				steps.
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
				voluptates, accusamus autem voluptatibus molestias a optio, quos ipsam
				libero soluta rem harum odit! Error non magni omnis nostrum, blanditiis
				ullam.
			</p>
			<Button styles='mt-10' />
		</div>
		<div className={layout.sectionImg}>
			<img
				src={astro1}
				alt='card'
				className='w-[50%] h-[100%] object-contain'
			/>
		</div>
	</section>
);

export default CardDeal;
