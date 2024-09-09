import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { socialMedia } from '@/data/data';

const Footer = () => {
	return (
		<footer className="w-full h-screen flex flex-col justify-center items-center relative pt-20 pb-10" id="contact">
			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw] text-white">
					Ready to take <span className="text-purple">your</span> digital presence to the next level?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
				<a href="mailto:kavindu@apexkv.com">
					<MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
				</a>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light text-white text-center pb-2 w-full absolute bottom-0 left-0 right-0">
					Copyright © 2024 Kavindu Harshitha
				</p>
				<div className="fixed right-2 top-1/2 -translate-y-1/2">
					<div className="flex flex-col items-center gap-2">
						{socialMedia.map((info) => (
							<a
								key={info.id}
								className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
								href={info.link}
								target="_blank"
							>
								<img src={info.img} alt={info.label} width={28} height={28} />
							</a>
						))}
						<a
							href="/Kavindu-Harshitha-CV.pdf"
							download
							className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img width="24" height="24" src="/download-icon.png" alt="Kavindu Harshitha Resume" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
