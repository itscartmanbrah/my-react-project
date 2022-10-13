import { feedback } from '../constants';
import styles, { layout } from '../style';
import FeedbackCard from './FeedbackCard';
import { astro4, astro5 } from '../assets';
const Testimonials = () => (
	<section
		id='clients'
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
	>
		<div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

		<div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
			<h1 className={styles.heading2}>
				What people are <br className='sm:block hidden' /> saying about us
			</h1>
			<div className='w-full md:mt-0 mt-6'>
				<p className={`${styles.paragraph} text-left max-w-[450px]`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
		</div>

		<div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
			{feedback.map((card) => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>
		<div
			className={`${layout.sectionImg} flex lg:flex-row ss:flex-col xs:flex-col`}
		>
			<img
				src={astro4}
				alt='card'
				className='lg:w-[60%] h-[100%] object-contain xs:w-[400px] ss:w-[100%]'
			/>
			<img
				src={astro5}
				alt='card'
				className='lg:w-[40%] lg:h-[20%] object-contain xs:w-[300px] ss:w-[300px]'
			/>
		</div>
	</section>
);

export default Testimonials;
